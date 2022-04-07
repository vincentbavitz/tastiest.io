import { BellOutlined, CheckOutlined } from '@ant-design/icons';
import { Avatar, Button, Modal, Tooltip } from '@tastiest-io/tastiest-ui';
import {
  ContentfulRestaurant,
  FollowerNotificationPreferences,
  FollowerNotificationType,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { AuthFlowStep } from 'components/modals/auth/AuthModal';
import { AuthContext } from 'contexts/auth';
import useFollow from 'hooks/useFollow';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openAuthModal, setAuthModalStep } from 'state/navigation';

interface Props {
  restaurant: ContentfulRestaurant;
}

export default function FollowButton(props: Props) {
  const { restaurant } = props;
  const { isSignedIn } = useContext(AuthContext);

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    follow,
    unfollow,
    following,
    setFollowing,
    notifications,
    toggleNotifications,
    followLoading,
    notificationsLoading,
  } = useFollow(restaurant.id);

  const [showFollowModal, setShowFollowModal] = useState(false);
  const toggleFollowRestaurant = (shouldFollow: boolean) => {
    setShowFollowModal(false);

    if (shouldFollow) {
      follow();
    } else {
      unfollow();
    }
  };

  // Popup modal when we've got the ?notifcations parameter
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const url = new URL(window.location.href);
    const notifcations = url.searchParams.get('notifications') === 'true';

    if (notifcations) {
      setShowFollowModal(true);
    }
  }, []);

  const followAsSignedOut = () => {
    setHasSignedInFromFlow(true);
    dispatch(setAuthModalStep(AuthFlowStep.REGISTER));
    dispatch(openAuthModal());
  };

  // Only available if signed in and already following.
  const saveNotifications = async () => {
    if (!isSignedIn) {
      return;
    }

    await follow(unsavedNotifications);
    setShowFollowModal(false);
  };

  // Post sign-in actions
  const [hasSignedInFromFlow, setHasSignedInFromFlow] = useState(false);
  useEffect(() => {
    if (hasSignedInFromFlow && isSignedIn) {
      setShowFollowModal(false);
      follow(unsavedNotifications);
    }
  }, [hasSignedInFromFlow, isSignedIn]);

  const [unsavedNotifications, setUnsavedNotifications] = useState<
    FollowerNotificationPreferences
  >(
    notifications ?? {
      [FollowerNotificationType.LIMITED_TIME_DISHES]: true,
      [FollowerNotificationType.SPECIAL_EXPERIENCES]: true,
      [FollowerNotificationType.LAST_MINUTE_TABLES]: true,
      [FollowerNotificationType.GENERAL_INFO]: true,
      [FollowerNotificationType.NEW_MENU]: true,
    },
  );

  return (
    <>
      <Modal show={showFollowModal}>
        <div className="flex items-center space-x-2 -mt-10 pb-6">
          <Avatar size={10} imageSrc={restaurant.profile_picture.url} />
          <span className="font-medium font-primary text-2xl">
            {restaurant.name}
          </span>
        </div>

        <div className="text-base pr-6">
          Notification preferences for {restaurant.name}
        </div>

        <div className="mt-6">
          <NotificationSelectItem
            label="General Info"
            sublabel="closed for Christmas, etc."
            checked={unsavedNotifications.GENERAL_INFO}
            onChange={on =>
              setUnsavedNotifications({
                ...unsavedNotifications,
                [FollowerNotificationType.GENERAL_INFO]: on,
              })
            }
          />

          <NotificationSelectItem
            label="Last minute tables available"
            sublabel="at a discount price"
            checked={unsavedNotifications.LAST_MINUTE_TABLES}
            onChange={on =>
              setUnsavedNotifications({
                ...unsavedNotifications,
                [FollowerNotificationType.LAST_MINUTE_TABLES]: on,
              })
            }
          />

          <NotificationSelectItem
            label="New menu"
            checked={unsavedNotifications.NEW_MENU}
            onChange={on =>
              setUnsavedNotifications({
                ...unsavedNotifications,
                [FollowerNotificationType.NEW_MENU]: on,
              })
            }
          />

          <NotificationSelectItem
            label="New limited time only dishes"
            checked={unsavedNotifications.LIMITED_TIME_DISHES}
            onChange={on =>
              setUnsavedNotifications({
                ...unsavedNotifications,
                [FollowerNotificationType.LIMITED_TIME_DISHES]: on,
              })
            }
          />

          <NotificationSelectItem
            label="Special experiences"
            sublabel="for loyal customers"
            checked={unsavedNotifications.SPECIAL_EXPERIENCES}
            onChange={on =>
              setUnsavedNotifications({
                ...unsavedNotifications,
                [FollowerNotificationType.SPECIAL_EXPERIENCES]: on,
              })
            }
          />
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <Button
            size="large"
            color="light"
            onClick={() => setShowFollowModal(false)}
          >
            {isSignedIn === false ? 'Close' : 'Back'}
          </Button>

          {isSignedIn ? (
            <Button
              size="large"
              onClick={() => {
                if (following) {
                  saveNotifications();
                } else {
                  follow();
                  setShowFollowModal(false);
                  setFollowing(true);
                }
              }}
              loading={followLoading}
            >
              {following ? 'Save' : 'Follow'}
            </Button>
          ) : (
            <Button
              size="large"
              onClick={followAsSignedOut}
              loading={followLoading}
            >
              Next
            </Button>
          )}
        </div>
      </Modal>

      <div className="flex items-center -mr-7 space-x-2">
        {following ? (
          <div className="filter drop-shadow-md">
            <div className="flex gap-2">
              <Button
                color={'secondary'}
                onClick={unfollow}
                loading={followLoading}
                size="large"
              >
                <span className="font-bold px-4 text-light font-secondary tracking-wide">
                  Following
                </span>
              </Button>

              <Button color="light" onClick={() => setShowFollowModal(true)}>
                <div className="flex items-center">
                  <BellOutlined className="text-secondary text-xl" />
                </div>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex space-x-1 items-center filter drop-shadow-md">
            <Button
              color={'light'}
              onClick={() => setShowFollowModal(true)}
              loading={followLoading}
              prefix={<BellOutlined />}
              size="large"
            >
              <span className="px-4 text-dark font-secondary tracking-wide">
                Follow
              </span>
            </Button>

            <Tooltip
              content={
                <>
                  Following restaurants gives you <br /> access to exclusive
                  experiences.
                </>
              }
            >
              <div
                style={{ marginLeft: '0.45rem', textTransform: 'lowercase' }}
                className="flex items-center justify-center w-5 h-5 rounded-full bg-white filter drop-shadow-md font-primary cursor-pointer"
              >
                i
              </div>
            </Tooltip>
          </div>
        )}
      </div>
    </>
  );
}

interface NotificationSelectItemProps {
  label: string;
  sublabel?: string;
  checked: boolean;
  onChange: (on: boolean) => void;
}

const NotificationSelectItem = (props: NotificationSelectItemProps) => {
  const { label, sublabel, checked, onChange } = props;

  return (
    <div onClick={() => onChange(!checked)} className="text-base">
      <div
        className={clsx(
          'flex items-center space-x-3 py-2 px-4 font-medium select-none cursor-pointer duration-150',
          checked ? 'bg-gray-100 text-dark' : 'bg-light text-gray-500',
        )}
      >
        <div className="flex items-center justify-center w-6 h-6 bg-white">
          <CheckOutlined
            className={clsx(
              'text-secondary text-lg duration-150',
              checked ? 'opacity-100' : 'opacity-0',
            )}
          />
        </div>

        <div className="flex flex-col">
          <span>{label}</span>
          {sublabel ? (
            <p className="text-sm font-light text-gray-600 leading-none italic">
              {sublabel}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
