import SuggestDishDesktopSVG from '@svg/illustrations/suggest-dish-desktop.svg';
import { Button, Input } from '@tastiest-io/tastiest-components';
import { useFeedback } from 'hooks/useFeedback';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useState } from 'react';
import { Contained } from './Contained';

interface Props {
  dish: string;
  city: string;
}

// Use klaviyo for emails

export function RecommendForm(props: Props) {
  const { isDesktop } = useScreenSize();

  return (
    <Contained>
      {isDesktop ? (
        <div className="flex items-center justify-start mt-10 space-x-6">
          <div className="flex-1 w-7/12">
            <RecommendFormContent {...props} />
          </div>

          <div className="w-4/12">
            <SuggestDishDesktopSVG
              style={{ height: '16rem', transform: 'rotateY(180deg)' }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10 space-y-6">
          <SuggestDishDesktopSVG style={{ maxHeight: '22rem' }} />

          <div className="pb-8 pl-3">
            <RecommendFormContent {...props} />
          </div>
        </div>
      )}
    </Contained>
  );
}

const RecommendFormContent = ({ dish, city }: Props) => {
  const { suggestRestaurant } = useFeedback();

  const { isDesktop } = useScreenSize();
  const [recommendedName, setRecommendedName] = useState('');
  const [requestRecieved, setRequestRecieved] = useState(false);

  const submit = async () => {
    if (requestRecieved) return;

    const { success } = await suggestRestaurant(recommendedName);
    setRequestRecieved(success);
  };

  return (
    <>
      <div className="mb-4 desktop:w-9/12">
        <span className="text-3xl leading-tight font-somatic text-primary">
          Do you know a better {dish} in {city}?
        </span>
      </div>
      <Input
        value={recommendedName}
        onValueChange={setRecommendedName}
        disabled={requestRecieved}
        maxLength={80}
        size="large"
        placeholder="Name of Restaurant"
      />

      <Button
        size={isDesktop ? 'small' : 'medium'}
        className="w-32 mt-6 text-xl font-somatic"
        onClick={submit}
      >
        {requestRecieved ? 'Thanks!' : 'Recommend'}
      </Button>
    </>
  );
};
