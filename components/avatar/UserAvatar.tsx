import { useUserData } from 'hooks/useUserData';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Avatar, AvatarProps } from './Avatar';

export function UserAvatar(props: Omit<AvatarProps, 'imageSrc'>) {
  const { user } = useAuth();
  const { userData } = useUserData(user);

  const firstWord = userData?.details?.firstName;
  const initial = firstWord?.[0]?.toUpperCase();

  return <Avatar {...props} initial={initial}></Avatar>;
}
