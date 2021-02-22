import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenContext } from '../../contexts/screen';
import { useAuth } from '../../hooks/useAuth';
import { openSignInModal } from '../../state/navigation';
import { IState } from '../../state/reducers';
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
  const { isSignedIn, signOut } = useAuth();
  const { isSignInModalOpen } = useSelector(
    (state: IState) => state.navigation,
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const { isDesktop } = useContext(ScreenContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [router.pathname]);

  // const signedOutDropdownItems: Array<IProfileDropdownItems> = [
  //   {
  //     id: 'sign-in',
  //     name: 'Sign In',
  //     onClick: () => {
  //       setIsDropdownOpen(false);
  //       setSignInModalIsOpen(true);
  //       // router.push('/login', '/login');
  //     },
  //   },
  //   {
  //     id: 'help',
  //     name: 'Help',
  //     onClick: () => {
  //       router.push('/help', '/help');
  //       setIsDropdownOpen(false);
  //     },
  //   },
  // ];

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
