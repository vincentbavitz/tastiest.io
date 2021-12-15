import { Avatar, AvatarProps } from '@tastiest-io/tastiest-ui';
import { useUserData } from 'hooks/useUserData';
import React from 'react';
import { useAuth } from '../../hooks/auth/useAuth';

type UserAvatarProps = Omit<AvatarProps, 'imageSrc'> & {
  initial?: string;
};

export function UserAvatar(props: UserAvatarProps) {
  const { user } = useAuth();
  const { userData } = useUserData(user);

  const firstWord = userData?.details?.firstName;
  const initial = props.initial ?? firstWord?.[0]?.toUpperCase();

  return <Avatar {...props} initial={initial} />;
}
