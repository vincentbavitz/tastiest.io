import { useRouter } from 'next/router';
import React, { useState } from 'react';
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
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => null;

  const dropdownItems: Array<IProfileDropdownItems> = [
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
      onClick: () => handleSignOut(),
    },
  ];

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
