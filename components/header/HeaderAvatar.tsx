import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown } from '@tastiest-io/tastiest-ui';
import { titleCase } from '@tastiest-io/tastiest-utils';
import { useSignOut } from 'hooks/auth/useSignOut';
import { usePageLoader } from 'hooks/usePageLoader';
import { useUserData } from 'hooks/useUserData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/auth/useAuth';
import { openAuthModal } from '../../state/navigation';
import { UserAvatar } from '../avatar/UserAvatar';

export function HeaderAvatar() {
  const { user, isSignedIn } = useAuth();
  const { signOut } = useSignOut();
  const { userData } = useUserData(user);

  const dispatch = useDispatch();
  const router = useRouter();

  const displayName = titleCase(userData?.details?.firstName);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Don't display dropdown on route change
  const { isPageLoading } = usePageLoader();

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [router.pathname]);

  const onAvatarClick = () => {
    if (isSignedIn) {
      setIsDropdownOpen(!isDropdownOpen);
      return;
    }

    setIsDropdownOpen(false);
    dispatch(openAuthModal());
  };

  return (
    <div className="relative w-8">
      {isSignedIn ? (
        <Dropdown offset={25}>
          <Dropdown.Trigger>
            <UserAvatar onClick={() => dispatch(openAuthModal())} />
          </Dropdown.Trigger>

          <Dropdown.Item href="/account/preferences" icon={<SettingOutlined />}>
            Preferences
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item
            icon={<LogoutOutlined />}
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown>
      ) : (
        <UserAvatar initial="T" onClick={() => dispatch(openAuthModal())} />
      )}
    </div>
  );
}
