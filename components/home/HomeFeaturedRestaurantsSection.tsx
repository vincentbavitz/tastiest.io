import { ContentfulRestaurant, titleCase } from '@tastiest-io/tastiest-utils';
import DisplayCard from 'components/cards/DisplayCard';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { SectionTitle } from 'components/SectionTitle';
import React from 'react';
import { generateStaticURL } from 'utils/routing';

interface Props {
  restaurants: ContentfulRestaurant[];
}

export default function HomeFeaturedRestaurantsSection(props: Props) {
  const { restaurants } = props;

  return (
    <div className="relative">
      <div className="pb-10">
        <SectionTitle>Featured Restaurants</SectionTitle>
      </div>

      <div className="-mt-6">
        <HorizontalScrollable
          noPadding
          forceButtons
          verticalBuffer={6}
          spacing={6}
        >
          {restaurants.map((restaurant, key) => {
            const link = generateStaticURL({
              city: restaurant.city,
              cuisine: restaurant.cuisine,
              restaurant: restaurant.uri_name,
            });

            return (
              <div key={key} style={{ width: '350px', maxWidth: '80vw' }}>
                <DisplayCard
                  header={restaurant.name}
                  headerFont="primary"
                  description={`${titleCase(
                    restaurant.cuisine.replace('_', ' '),
                  )} - ${restaurant.location_display}`}
                  image={restaurant.display_photograph}
                  {...link}
                />
              </div>
            );
          })}
        </HorizontalScrollable>
      </div>
    </div>
  );
}
