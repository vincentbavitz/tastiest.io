import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { Dropdown } from '../Dropdown';
import { DropdownItem } from '../DropdownItem';

interface IProfileDropdownItems {
  id: string;
  name: string;
  isSelected?: boolean;
  onClick: () => void;
}

export function HeaderAvatar() {
  const { isSignedIn, signOut } = useAuth();
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [router.pathname]);

  const signedOutDropdownItems: Array<IProfileDropdownItems> = [
    {
      id: 'sign-in',
      name: 'Sign In',
      onClick: () => {
        router.push('/login', '/login');
        setIsDropdownOpen(false);
      },
    },
    {
      id: 'help',
      name: 'Help',
      onClick: () => {
        router.push('/help', '/help');
        setIsDropdownOpen(false);
      },
    },
  ];

  const signedInDropdownItems: Array<IProfileDropdownItems> = [
    {
      id: 'view-profile',
      name: 'View Profile',
      onClick: () => router.push('/profile', '/profile'),
      isSelected: false,
    },
    {
      id: 'account-info',
      name: 'Account Info',
      onClick: () => router.push('/account', '/account'),
      isSelected: false,
    },
    {
      id: 'sign-out',
      name: 'Sign Out',
      onClick: () => {
        signOut();
        setIsDropdownOpen(false);
      },
    },
  ];

  const dropdownItems = isSignedIn
    ? signedInDropdownItems
    : signedOutDropdownItems;

  return (
    <div>
      <Avatar onClick={() => setIsDropdownOpen(!isDropdownOpen)} />

      <Dropdown
        isOpen={isDropdownOpen}
        style="outline"
        onClickAway={() => setIsDropdownOpen(false)}
        pull="left"
      >
        {dropdownItems.map(item => (
          <DropdownItem
            style="outline"
            key={item.id}
            id={item.id}
            onSelect={item.onClick}
            selected={item.isSelected}
          >
            {item.name}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
}
