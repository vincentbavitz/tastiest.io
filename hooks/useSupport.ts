import {
  ISupportMessage,
  IUserSupportRequest,
  SupportRequestType,
} from '@tastiest-io/tastiest-utils';
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { v4 as uuid } from 'uuid';
import { IState } from '../state/reducers';

export enum SupportRequestGenerationError {
  NO_NAME = 'NO_NAME',
  NO_EMAIL = 'NO_EMAIL',
  NO_SUBJECT = 'NO_SUBJECT',
  NO_MESSAGE = 'NO_MESSAGE',
  FIRESTORE_ERROR = 'FIRESTORE_ERROR',
}

export function useSupport() {
  const firestore = useFirestore();

  useFirestoreConnect([
    {
      collection: 'support-users',
    },
  ]);

  const supportRequests: Partial<IUserSupportRequest> = useSelector(
    ({ firestore: { data } }: IState) => data?.['support-users'],
  );

  const makeSupportRequest = async (
    name: string,
    email: string,
    type: SupportRequestType,
    subject: string,
    message: string,
    userId?: string,
  ): Promise<{ success: boolean; errors: SupportRequestGenerationError[] }> => {
    const errors: SupportRequestGenerationError[] = [];
    if (!name?.length) errors.push(SupportRequestGenerationError.NO_NAME);
    if (!email?.length) errors.push(SupportRequestGenerationError.NO_EMAIL);
    if (!subject?.length) errors.push(SupportRequestGenerationError.NO_SUBJECT);
    if (!message?.length) errors.push(SupportRequestGenerationError.NO_MESSAGE);

    if (errors.length) {
      return { success: false, errors };
    }

    const initialMessage: ISupportMessage = {
      name,
      message,
      timestamp: Date.now(),
      role: 'user',
    };

    const supportRequest: IUserSupportRequest = {
      name,
      email,
      type,
      subject,
      conversation: [initialMessage],
      userId: userId ?? null,
      seen: false,
      resolved: false,
      priority: 'normal',
      openedAt: Date.now(),
      updatedAt: null,
    };

    try {
      await firestore
        .collection('support-users')
        .doc(uuid())
        .set(supportRequest);

      return { success: true, errors: [] };
    } catch (_) {
      return {
        success: false,
        errors: [SupportRequestGenerationError.FIRESTORE_ERROR],
      };
    }
  };

  const updateSupportRequest = async () => {
    return null;
  };
  return { supportRequests, makeSupportRequest };
}
