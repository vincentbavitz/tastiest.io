import { useRouter } from 'next/router';
import React, { useState } from 'react';
import LogoSVG from '../../assets/svgs/logo.svg';
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
      <div className="flex justify-center items-center bg-primary rounded-full h-8 w-8 cursor-pointer duration-300 bg-opacity-75 hover:bg-opacity-100">
        <LogoSVG
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="h-4 text-white fill-current"
          style={{ marginTop: '3px', marginLeft: '0.5px' }}
        />
      </div>

      <Dropdown
        isOpen={isDropdownOpen}
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
