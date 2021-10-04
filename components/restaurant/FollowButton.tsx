import { BellOutlined } from '@ant-design/icons';
import { Button, Tooltip } from '@tastiest-io/tastiest-components';
import { IRestaurant } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { InputGroup } from 'components/inputs/InputGroup';
import useFollow from 'hooks/useFollow';
import React, { useRef } from 'react';
import { useHoverDirty } from 'react-use';

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

  const ref = useRef(null);
  const isHoveringFollowButton = useHoverDirty(ref);

  return (
    <div className="">
      {following ? (
        <InputGroup>
          <Button loading={followLoading} onClick={unfollow}>
            <Tooltip
              theme="alt"
              placement="top-right"
              content={`Unfollow ${restaurant.name}`}
            >
              Following
            </Tooltip>
          </Button>

          <Button
            color={notifications ? 'secondary' : 'neutral'}
            onClick={() => toggleNotifications(!notifications)}
            loading={notificationsLoading}
          >
            <Tooltip theme="alt" placement="top-right" content="Get updates">
              <div className="flex items-center h-full">
                <BellOutlined
                  className={clsx(
                    'duration-300 text-lg',
                    notifications ? 'text-white' : 'text-gray-200',
                  )}
                />
              </div>
            </Tooltip>
          </Button>
        </InputGroup>
      ) : (
        <Button
          type="text"
          color={following ? 'primary' : 'neutral'}
          onClick={following ? unfollow : follow}
          loading={followLoading}
        >
          <Tooltip
            theme="alt"
            placement="top-right"
            content={`Follow ${restaurant.name}`}
          >
            Follow
          </Tooltip>
        </Button>
      )}
    </div>
  );
}
