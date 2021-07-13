import { Dropdown, DropdownItem } from '@tastiest-io/tastiest-components';
import {
  BookmarkIcon,
  CalendarIcon,
  HeartIcon,
  RightArrowIcon,
} from '@tastiest-io/tastiest-icons';
import { dlog, SVG, titleCase } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useSignOut } from 'hooks/auth/useSignOut';
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
  icon?: SVG;
  isSelected?: boolean;
  href?: string;
  divider?: boolean;
  onClick?: () => void;
}

export function HeaderAvatar() {
  const { user, isSignedIn } = useAuth();
  const { signOut } = useSignOut();
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
      id: 'saved-places',
      name: 'Saved Places',
      href: '/favourites',
      isSelected: false,
      icon: HeartIcon,
    },
    {
      id: 'preferences',
      name: 'Preferences',
      href: '/preferences',
      isSelected: false,
      icon: BookmarkIcon,
    },
    {
      id: 'bookings',
      name: 'Bookings',
      href: '/bookings',
      isSelected: false,
      icon: CalendarIcon,
    },
    {
      id: 'sign-out',
      name: 'Sign Out',
      icon: RightArrowIcon,
      divider: true,
      onClick: () => {
        signOut();
        setIsDropdownOpen(false);
      },
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
        pull="left"
        onClickAway={() => setIsDropdownOpen(false)}
      >
        <p className="pb-1 pl-4 pr-6 mb-1 text-sm text-gray-900 border-b border-gray-200">
          Eat well, {displayName}
        </p>
        {dropdownItems.map(item => {
          const DropdownItemInner = () => (
            <div className={clsx('flex space-x-2 items-center')}>
              {item.icon && (
                <item.icon className="h-4 -mt-1 fill-current text-primary" />
              )}
              <p className="text-alt-1 hover:underline">{item.name}</p>
            </div>
          );

          return (
            <div key={item.id} style={{ minWidth: '150px' }}>
              <div
                className={clsx(
                  item.divider &&
                    'border-t border-gray-200 border-opacity-75 w-full pt-1',
                )}
              ></div>
              <DropdownItem
                id={item.id}
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
            </div>
          );
        })}
      </Dropdown>
    </div>
  );
}
