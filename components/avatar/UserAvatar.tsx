import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Avatar, AvatarProps } from './Avatar';

export function UserAvatar(props: Omit<AvatarProps, 'imageSrc'>) {
  const { user } = useAuth();
  const { email, displayName } = user ?? { email: '', displayName: '' };

  const initial =
    // prettier-ignore
    displayName?.length ? displayName[0].toUpperCase() : 
    email?.length ? email[0].toUpperCase() :
    undefined;

  return <Avatar {...props} initial={initial}></Avatar>;
}
