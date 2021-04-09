import { useUserData } from 'hooks/useUserData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { titleCase } from 'utils/text';
import { useAuth } from '../../hooks/useAuth';
import { openSignInModal } from '../../state/navigation';
import { UserAvatar } from '../avatar/UserAvatar';
import { Dropdown } from '../Dropdown';
import { DropdownItem } from '../DropdownItem';

interface IProfileDropdownItems {
  id: string;
  name: string;
  isSelected?: boolean;
  onClick: () => void;
}

export function HeaderAvatar() {
  const { user, isSignedIn, signOut } = useAuth();
  const { userData } = useUserData(user);

  const dispatch = useDispatch();
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const displayName = titleCase(
    userData?.details?.firstName ?? user?.email.replace(/@.*$/, ''),
  );

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [router.pathname]);

  const signedInDropdownItems: Array<IProfileDropdownItems> = [
    {
      id: 'preferences',
      name: 'Preferences',
      onClick: () => router.push('/preferences'),
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

  // const dropdownItems = isSignedIn
  //   ? signedInDropdownItems
  //   : signedOutDropdownItems;

  const dropdownItems = signedInDropdownItems;

  const onAvatarClick = () => {
    if (isSignedIn) {
      setIsDropdownOpen(!isDropdownOpen);
      return;
    }

    setIsDropdownOpen(false);
    dispatch(openSignInModal());
  };

  return (
    <div>
      <UserAvatar onClick={onAvatarClick} />

      <Dropdown
        isOpen={isDropdownOpen}
        style="outline"
        onClickAway={() => setIsDropdownOpen(false)}
        pull="left"
      >
        <p className="pb-1 pl-4 pr-6 mb-1 text-sm text-gray-900 border-b border-gray-200">
          Eat well, {displayName}
        </p>
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
