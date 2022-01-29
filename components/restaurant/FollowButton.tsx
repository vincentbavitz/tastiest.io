import { BellOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  ButtonGroup,
  Modal,
  Switch,
  Tooltip,
} from '@tastiest-io/tastiest-ui';
import { RestaurantContentful } from '@tastiest-io/tastiest-utils';
import { AuthContext } from 'contexts/auth';
import useFollow from 'hooks/useFollow';
import React, { useContext, useState } from 'react';

interface Props {
  restaurant: RestaurantContentful;
}

export default function FollowButton(props: Props) {
  const { restaurant } = props;
  const { isSignedIn } = useContext(AuthContext);

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

  // Fetch from their profile also
  const [enableNewMenu, setenableNewMenu] = useState(true);
  const [enableSpecialExp, setEnableSpecialExp] = useState(true);
  const [enableLastMinute, setEnableLastMinute] = useState(true);
  const [enableLimitedTime, setEnableLimitedTime] = useState(true);
  const [enableGeneralInfo, setEnableGeneralInfo] = useState(true);

  return (
    <>
      <Modal show={showExplanationModal}>
        <div className="flex items-center space-x-2 -mt-10 pb-6">
          <Avatar size={10} imageSrc={restaurant.profilePicture.url} />
          <span className="font-medium font-primary text-2xl">
            {restaurant.name}
          </span>
        </div>

        <div className="text-base pr-6">
          Notification preferences for {restaurant.name}
        </div>

        <div className="flex flex-col space-y-2 mt-6">
          <div className="flex items-center text-base space-x-2">
            <Switch checked={enableSpecialExp} onChange={setEnableSpecialExp} />
            <span>Special experiences</span>
          </div>

          <div className="flex items-center text-base space-x-2">
            <Switch checked={enableNewMenu} onChange={setenableNewMenu} />
            <span>New menu</span>
          </div>

          <div className="flex items-center text-base space-x-2">
            <Switch
              checked={enableLimitedTime}
              onChange={setEnableLimitedTime}
            />
            <span>Limited time dishes</span>
          </div>

          <div className="flex items-center text-base space-x-2">
            <Switch checked={enableLastMinute} onChange={setEnableLastMinute} />
            <span>Last minute tables</span>
          </div>

          <div className="flex items-center text-base space-x-2">
            <Switch
              checked={enableGeneralInfo}
              onChange={setEnableGeneralInfo}
            />
            <span>General info</span>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <Button
            size="large"
            color="light"
            onClick={() => setShowExplanationModal(false)}
          >
            {isSignedIn === false ? 'Close' : 'Back'}
          </Button>

          <Button
            size="large"
            onClick={() => toggleFollowRestaurant(!following)}
            loading={followLoading}
          >
            {isSignedIn === false ? 'Next' : following ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      </Modal>

      <div className="flex items-center -mr-7 space-x-2">
        {following ? (
          // <Button loading={followLoading} onClick={unfollow}>
          // Following
          // </Button>
          <div className="filter drop-shadow-md">
            <ButtonGroup>
              <Button
                color={'secondary'}
                onClick={unfollow}
                loading={followLoading}
                size="large"
              >
                <span className="font-bold px-4 text-light font-secondary tracking-wide">
                  {/* {following ? 'Following' : 'Follow'} */}
                  Following
                </span>
              </Button>

              <Button color="light">
                <div className="flex items-center">
                  <BellOutlined className="text-secondary text-xl" />
                </div>
              </Button>
            </ButtonGroup>
          </div>
        ) : (
          <div className="flex space-x-1 items-center filter drop-shadow-md">
            <Button
              color={'light'}
              onClick={() => setShowExplanationModal(true)}
              loading={followLoading}
              size="large"
            >
              <span className="font-bold px-4 text-dark font-secondary tracking-wide">
                Follow
              </span>
            </Button>

            <Tooltip
              content={
                <>
                  Following restaurants gives you <br /> access to exclusive
                  experiences
                </>
              }
            >
              <div
                style={{ marginLeft: '0.45rem' }}
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
