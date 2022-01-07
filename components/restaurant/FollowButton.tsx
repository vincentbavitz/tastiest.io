import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from '@tastiest-io/tastiest-ui';
import { RestaurantContentful } from '@tastiest-io/tastiest-utils';
import useFollow from 'hooks/useFollow';
import React, { useState } from 'react';

interface Props {
  restaurant: RestaurantContentful;
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

  const [showExplanationModal, setShowExplanationModal] = useState(false);
  const toggleFollowRestaurant = (shouldFollow: boolean) => {
    setShowExplanationModal(false);

    if (shouldFollow) {
      follow();
    } else {
      unfollow();
    }
  };

  return (
    <>
      <Modal title="How Following Works" show={showExplanationModal}>
        <p className="mb-2">You'll be emailed when the restaurant...</p>
        <ol className="list-inside list-disc">
          <li>has a new experience, such as a new menu or dish</li>
          <li>has a last-minute cancellaton at a popular time</li>
          <li>sends out other updates</li>
        </ol>

        <div className="flex justify-end space-x-2">
          <Button color="light" onClick={() => setShowExplanationModal(false)}>
            Back
          </Button>

          <Button
            onClick={() => toggleFollowRestaurant(!following)}
            loading={followLoading}
          >
            {following ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      </Modal>

      <div className="flex items-center -mr-7 space-x-2">
        {following ? (
          <Button loading={followLoading} onClick={unfollow}>
            Following
          </Button>
        ) : (
          // <ButtonGroup>
          //   <Button loading={followLoading} onClick={unfollow}>
          //     Following
          //   </Button>

          //   <Button
          //     color={'secondary'}
          //     onClick={() => toggleNotifications(!notifications)}
          //     loading={notificationsLoading}
          //   >
          //     <div className="flex items-center">
          //       <BellOutlined
          //         className={clsx(
          //           'duration-300 text-lg',
          //           notifications ? 'text-white' : 'text-gray-200',
          //         )}
          //       />
          //     </div>
          //   </Button>
          // </ButtonGroup>
          <Button
            color={'light'}
            onClick={() => setShowExplanationModal(true)}
            prefix={<PlusOutlined />}
            loading={followLoading}
          >
            Follow
          </Button>
        )}

        <div
          onClick={() => setShowExplanationModal(true)}
          className="flex items-center justify-center w-5 h-5 rounded-full bg-white filter drop-shadow-md font-primary cursor-pointer"
        >
          i
        </div>
      </div>
    </>
  );
}
