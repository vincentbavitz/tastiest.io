import { BellOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from '@tastiest-io/tastiest-ui';
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
        </InputGroup>
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
