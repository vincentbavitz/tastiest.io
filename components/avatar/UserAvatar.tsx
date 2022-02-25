import { Avatar, AvatarProps } from '@tastiest-io/tastiest-ui';
import React from 'react';
import { useAuth } from '../../hooks/auth/useAuth';

type UserAvatarProps = Omit<AvatarProps, 'imageSrc'> & {
  initial?: string;
};

export function UserAvatar(props: UserAvatarProps) {
  const { userData } = useAuth();

  // CORRECT ME
  // const firstWord = userData?.firstName;
  // const initial = props.initial ?? firstWord?.[0]?.toUpperCase();
  const initial = 'T';

  return <Avatar {...props} initial={initial} />;
}
