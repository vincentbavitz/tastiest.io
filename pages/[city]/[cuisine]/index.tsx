import {
  CmsApi,
  CuisineSymbol,
  ITastiestDish,
  titleCase,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import TastiestDishCard from 'components/cards/TastiestDishCard';
import { SuggestRestaurant } from 'components/SuggestRestaurant';
import { CuisineItem } from 'constants/cuisines';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { LookingIllustration } from 'public/assets/illustrations';
import React, { useCallback } from 'react';
import { CardGrid } from '../../../components/cards/CardGrid';
import { Contained } from '../../../components/Contained';
import { CUISINES } from '../../../constants';
import { generateTitle } from '../../../utils/metadata';

interface IPath {
  params: { city: string; cuisine: string };
}

interface Props {
  cuisineSymbol: CuisineSymbol;
  tastiestDishes: ITastiestDish[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: IPath[] = Object.values(CUISINES).map(item => ({
    params: {
      city: 'london',
      cuisine: item.name.replace(' ', '-').toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cuisineSymbol = String(params.cuisine).toUpperCase() as CuisineSymbol;
  const cuisineExists = Boolean(CUISINES[cuisineSymbol]);

  // Redirect to 404 for nonexistent page
  if (!cuisineExists) {
    return {
      notFound: true,
    };
  }

  const cmsApi = new CmsApi();
  const {
    dishes: tastiestDishes = [],
  } = await cmsApi.getTastiestDishesOfCuisine(cuisineSymbol);

  return {
    props: {
      cuisineSymbol,
      tastiestDishes,
    },
    revalidate: 360,
  };
};

export default function CuisinePage(props: Props) {
  const { tastiestDishes = [], cuisineSymbol } = props;

  const cuisine = CUISINES[cuisineSymbol];
  const cuisineName = titleCase(String(cuisine?.name));
  const cards = tastiestDishes.map(dish => (
    <TastiestDishCard key={dish.id} compact {...dish} />
  ));

  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <>
      <div>
        <Head>
          <title>{generateTitle(cuisineName)}</title>
        </Head>

        <div className="flex flex-col w-full space-y-10">
          <div className="relative mt-6 tablet:mt-6">
            <CuisineHero cuisine={cuisine} />

            <div className="absolute inset-0">
              <div
                style={{
                  marginTop: isDesktop ? '2rem' : isTablet ? '1rem' : '0.5rem',
                }}
                className="flex justify-center w-full"
              >
                <span className="text-4xl font-somatic text-primary">
                  {cuisineName}
                </span>
              </div>
            </div>
          </div>

          {cards.length ? (
            <div className="pt-10 pb-20">
              <CardGrid horizontalScroll rowLimit={2}>
                {cards}
              </CardGrid>
            </div>
          ) : (
            <Contained>
              <NoPostsForCuisine
                isMobile={isMobile}
                cuisineName={cuisine?.name}
              />
            </Contained>
          )}
        </div>
      </div>

      <div className="pt-16">
        <SuggestRestaurant />
      </div>
    </>
  );
}

interface NoPostsForCuisineProps {
  isMobile: boolean;
  cuisineName: string;
}

const NoPostsForCuisine = ({
  isMobile,
  cuisineName,
}: NoPostsForCuisineProps) => (
  <div className="pt-10 tablet:pt-16 tablet:flex tablet:justify-center tablet:w-full">
    <div
      style={{ minWidth: isMobile ? 'unset' : '600px', maxWidth: '1100px' }}
      className={clsx(
        isMobile
          ? 'flex flex-col space-y-10 w-full'
          : 'grid grid-cols-12 place-items-center pl-10',
      )}
    >
      <div className="col-span-4">
        <h4 className="mb-4 text-lg text-center mobile:text-left">
          Sorry! There are no offers {!isMobile && <br />} for {cuisineName}{' '}
          yet.
        </h4>
        <h2 className="text-3xl leading-tight text-center mobile:text-left font-somatic text-primary">
          We are still {!isMobile && <br />}
          on the lookout {!isMobile && <br />} for the best dishes
          {!isMobile && <br />} near you!
        </h2>
      </div>

      <div className="col-span-8">
        <LookingIllustration
          style={{ minWidth: isMobile ? 'unset' : '500px' }}
        />
      </div>
    </div>
  </div>
);

interface CuisineHeroProps {
  cuisine: CuisineItem;
}

const CuisineHero = (props: CuisineHeroProps) => {
  const { cuisine } = props;
  const { isMobile, isTablet, isHuge } = useScreenSize();

  const desktopH = 713;
  const desktopW = 1450;
  const desktopHPc = 100 * (desktopH / desktopW);

  const mobileH = 713;
  const mobileW = 1300;
  const mobileHPc = 100 * (mobileH / mobileW);

  const CuisineImage = useCallback(() => {
    const sizeMultipler = isMobile ? 1.33 : isTablet ? 1.5 : 1;
    const width = `${100 * sizeMultipler}%`;
    const minWidth = isMobile ? '325px' : 'auto';
    const transform = `translate(${sizeMultipler > 1 ? '-15%' : '0%'}, -10%)`;
    const paddingBottom = `${
      (isMobile ? mobileHPc : desktopHPc) * sizeMultipler
    }%`;

    return isMobile ? (
      <div
        className="relative h-px"
        style={{ width, minWidth, paddingBottom, transform }}
      >
        <Image
          src={cuisine.mobileHero}
          layout="fill"
          objectFit="cover"
          loading="eager"
          unoptimized
          priority
          // onLoad={() => triggerPageIsLoaded()}
          className="block w-full mobile:hidden"
        />
      </div>
    ) : (
      <div
        className="relative h-px mobile:mt-10"
        style={{ width, minWidth, paddingBottom, transform }}
      >
        <Image
          src={cuisine.desktopHero}
          layout="fill"
          objectFit="cover"
          loading="eager"
          unoptimized
          priority
          // onLoad={() => triggerPageIsLoaded()}
          className="hidden w-full mobile:block"
        />
      </div>
    );
  }, [isMobile, isTablet, isHuge]);

  return (
    <div>
      {isHuge ? (
        <Contained maxWidth={933}>
          <CuisineImage />
        </Contained>
      ) : (
        <CuisineImage />
      )}
    </div>
  );
};
