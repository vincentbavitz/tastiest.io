import { ArrowUpOutlined } from '@ant-design/icons';
import { Avatar } from '@tastiest-io/tastiest-ui';
import { generateStaticURL, TastiestDish } from '@tastiest-io/tastiest-utils';
import DisplayCard from 'components/cards/DisplayCard';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import CreationHeading from 'components/text/CreationHeading';
import React from 'react';

interface HomeAwardWinningDishesSectionProps {
  dishes: TastiestDish[];
}

export default function HomeAwardWinningDishesSection(
  props: HomeAwardWinningDishesSectionProps,
) {
  const { dishes } = props;

  return (
    <div className="relative">
      <div className="flex justify-center">
        <CreationHeading>Award Winning Dishes</CreationHeading>
      </div>

      <div className="-mt-6">
        <HorizontalScrollable
          noPadding
          forceButtons
          verticalBuffer={6}
          spacing={6}
        >
          {dishes.map(dish => {
            const link = generateStaticURL({
              restaurant: dish.restaurant.uri_name,
              cuisine: dish.restaurant.cuisine,
              city: dish.restaurant.city,
            });

            return (
              <div key={dish.id} style={{ width: '250px' }}>
                <DisplayCard
                  header={dish.name}
                  description={dish.description}
                  image={dish.image}
                  isComingSoon={dish.restaurant.name.includes('Numa')}
                  {...link}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar
                        size={10}
                        imageSrc={dish.restaurant.profile_picture.url}
                      />
                      <span className="text-lg font-medium">
                        {dish.restaurant.name}
                      </span>
                    </div>

                    <ArrowUpOutlined className="ml-2 text-2xl opacity-75 transform rotate-45" />
                  </div>
                </DisplayCard>
              </div>
            );
          })}
        </HorizontalScrollable>
      </div>
    </div>
  );
}
