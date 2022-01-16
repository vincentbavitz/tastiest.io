import { RestaurantContentful, titleCase } from '@tastiest-io/tastiest-utils';
import DisplayCard from 'components/cards/DisplayCard';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { SectionTitle } from 'components/SectionTitle';
import React from 'react';
import { generateStaticURL } from 'utils/routing';

interface Props {
  restaurants: RestaurantContentful[];
}

export default function HomeFeaturedRestaurantsSection(props: Props) {
  const { restaurants } = props;

  return (
    <div className="relative pt-16">
      <div className="pb-10">
        <SectionTitle>Featured Restaurants</SectionTitle>
      </div>

      <div className="-mt-6">
        <HorizontalScrollable noPadding verticalBuffer={6} spacing={6}>
          {restaurants.map((restaurant, key) => {
            const link = generateStaticURL({
              city: restaurant.city,
              cuisine: restaurant.cuisine,
              restaurant: restaurant.uriName,
            });

            return (
              <div key={key} style={{ width: '350px' }}>
                <DisplayCard
                  header={restaurant.name}
                  headerFont="primary"
                  description={`${titleCase(
                    restaurant.cuisine.replace('_', ' '),
                  )} - ${restaurant.location.displayLocation}`}
                  image={restaurant.displayPhotograph}
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

{
  /* <div className="flex items-center space-x-4">
<Avatar
  size={10}
  imageSrc={restaurant.profilePicture.url}
/>
<span className="text-lg font-medium">
  {restaurant.name}
</span>
</div> */
}
