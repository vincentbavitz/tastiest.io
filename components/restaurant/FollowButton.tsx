import { BellOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, ButtonGroup } from '@tastiest-io/tastiest-ui';
import { dlog, IRestaurant } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import useFollow from 'hooks/useFollow';
import React from 'react';

interface Props {
  restaurant: IRestaurant;
}

export default function FollowButton(props: Props) {
  const { restaurant } = props;

  const {
    follow,
    unfollow,
    following,
    notifications,
    toggleNotifications,
    followLoading,
    notificationsLoading,
  } = useFollow(restaurant.id);

  dlog('FollowButton ➡️ restaurant.id:', restaurant.id);

  return (
    <div className="">
      {following ? (
        <ButtonGroup>
          <Button loading={followLoading} onClick={unfollow}>
            Following
          </Button>

          <Button
            color={'secondary'}
            onClick={() => toggleNotifications(!notifications)}
            loading={notificationsLoading}
          >
            <div className="flex items-center">
              <BellOutlined
                className={clsx(
                  'duration-300 text-lg',
                  notifications ? 'text-white' : 'text-gray-200',
                )}
              />
            </div>
          </Button>
        </ButtonGroup>
      ) : (
        <Button
          color={'light'}
          onClick={follow}
          prefix={<PlusOutlined />}
          loading={followLoading}
        >
          Follow
        </Button>
      )}
    </div>
  );
}
