import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input } from '@tastiest-io/tastiest-ui';
import { IPost } from '@tastiest-io/tastiest-utils';
import { useFeedback } from 'hooks/useFeedback';
import { useScreenSize } from 'hooks/useScreenSize';
import { SuggestRestaurantArticleIllustrationDesktop } from 'public/assets/illustrations';
import React, { useState } from 'react';
import { Contained } from '../Contained';

// Use klaviyo for emails

export function ArticleSuggestRestaurant(props: IPost) {
  const { isDesktop } = useScreenSize();

  return (
    <Contained>
      {isDesktop ? (
        <div className="flex items-center justify-start mt-10 space-x-6">
          <div className="flex-1 w-7/12">
            <ArticleSuggestRestaurantContent {...props} />
          </div>

          <div className="w-4/12">
            <SuggestRestaurantArticleIllustrationDesktop
              style={{ height: '18rem', transform: 'rotateY(180deg)' }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start mt-10 space-y-6">
          <SuggestRestaurantArticleIllustrationDesktop
            style={{ maxHeight: '10rem' }}
          />

          <div className="pb-8 pl-3">
            <ArticleSuggestRestaurantContent {...props} />
          </div>
        </div>
      )}
    </Contained>
  );
}

const ArticleSuggestRestaurantContent = ({
  city,
  cuisine,
  restaurant,
  deal: { dishName },
}: IPost) => {
  const { makeRecommendation, isSubmitting } = useFeedback();

  const { isDesktop } = useScreenSize();
  const [recommendedName, setRecommendedName] = useState('');
  const [requestRecieved, setRequestRecieved] = useState(false);

  const submit = async () => {
    if (requestRecieved) return;

    const { success } = await makeRecommendation(true, {
      dish: dishName,
      cuisine,
      location: restaurant.location,
      restaurantName: restaurant.name,
    });

    setRequestRecieved(success);
  };

  return (
    <div>
      <div className="mb-4 xl:w-9/12">
        <span className="text-xl leading-tight font-primary text-primary">
          {/* Ensure the plural case makes sense. */}
          {/* Eg. Do you know of better fries in London? */}
          {/* Eg. Do you know a better steak in London? */}
          Do you know {dishName.includes('*') ? 'of' : 'a'} better{' '}
          {dishName.replace('*', '')} in {city}?
        </span>
      </div>
      <Input
        value={recommendedName}
        onValueChange={setRecommendedName}
        disabled={requestRecieved}
        maxLength={80}
        size="large"
        label="Name of Restaurant"
      />

      <div className="w-32 mt-3">
        <Button wide onClick={submit}>
          {isSubmitting ? (
            <LoadingOutlined className="px-10 text-2xl" />
          ) : requestRecieved ? (
            'Thanks!'
          ) : (
            'Recommend'
          )}
        </Button>
      </div>
    </div>
  );
};
