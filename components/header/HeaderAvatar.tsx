import { Dropdown, DropdownItem } from '@tastiest-io/tastiest-components';
import { dlog, titleCase } from '@tastiest-io/tastiest-utils';
import { useUserData } from 'hooks/useUserData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/auth/useAuth';
import { openAuthModal } from '../../state/navigation';
import { UserAvatar } from '../avatar/UserAvatar';

type SVGIcon = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

interface IProfileDropdownItems {
  id: string;
  name: string;
  hide?: boolean;
  icon?: SVGIcon;
  isSelected?: boolean;
  href?: string;
  onClick?: () => void;
}

export function HeaderAvatar() {
  const { user, isSignedIn, signOut } = useAuth();
  const { userData } = useUserData(user);

  const dispatch = useDispatch();
  const router = useRouter();

  dlog('HeaderAvatar ➡️ userData:', userData);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const displayName = titleCase(userData?.details?.firstName);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [router.pathname]);

  const signedInDropdownItems: Array<IProfileDropdownItems> = [
    {
      id: 'preferences',
      name: 'Preferences',
      href: '/preferences',
      isSelected: false,
      // icon: UserIcon,
    },
    {
      id: 'saved-places',
      name: 'Favourites',
      href: '/favourites',
      isSelected: false,
      // icon: HeartIcon,
    },
    {
      id: 'sign-out',
      name: 'Sign Out',
      onClick: () => {
        signOut();
        setIsDropdownOpen(false);
      },
      // icon: RightIcon,
    },
  ];

  const dropdownItems = signedInDropdownItems;

  const onAvatarClick = () => {
    if (isSignedIn) {
      setIsDropdownOpen(!isDropdownOpen);
      return;
    }

    setIsDropdownOpen(false);
    dispatch(openAuthModal());
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
        {dropdownItems.map(item => {
          const DropdownItemInner = () => (
            <div className="flex space-x-2">
              {item.icon && (
                <item.icon className="h-4 text-black fill-current" />
              )}
              <p>{item.name}</p>
            </div>
          );

          return (
            <DropdownItem
              id={item.id}
              key={item.id}
              style="outline"
              selected={item.isSelected}
              onSelect={item?.onClick}
            >
              {item.href ? (
                <Link href={item.href}>
                  <a>
                    <DropdownItemInner />
                  </a>
                </Link>
              ) : (
                <DropdownItemInner />
              )}
            </DropdownItem>
          );
        })}
      </Dropdown>
    </div>
  );
}
