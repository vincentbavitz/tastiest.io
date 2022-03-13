import { ArrowUpOutlined } from '@ant-design/icons';
import { Avatar } from '@tastiest-io/tastiest-ui';
import { TastiestDish } from '@tastiest-io/tastiest-utils';
import DisplayCard from 'components/cards/DisplayCard';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { SectionTitle } from 'components/SectionTitle';
import React from 'react';
import { generateStaticURL } from 'utils/routing';

interface HomeAwardWinningDishesSectionProps {
  dishes: TastiestDish[];
}

export default function HomeAwardWinningDishesSection(
  props: HomeAwardWinningDishesSectionProps,
) {
  const { dishes } = props;

  return (
    <div className="relative pt-16">
      <div className="pb-10">
        <SectionTitle>Award Winning Dishes</SectionTitle>
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
