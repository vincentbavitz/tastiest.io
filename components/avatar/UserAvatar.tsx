import { Avatar, AvatarProps } from '@tastiest-io/tastiest-ui';
import { useUserData } from 'hooks/useUserData';
import React from 'react';
import { useAuth } from '../../hooks/auth/useAuth';

export function UserAvatar(props: Omit<AvatarProps, 'imageSrc'>) {
  const { user } = useAuth();
  const { userData } = useUserData(user);

  const firstWord = userData?.details?.firstName;
  const initial = firstWord?.[0]?.toUpperCase();

  return <Avatar {...props} initial={initial} />;
}
