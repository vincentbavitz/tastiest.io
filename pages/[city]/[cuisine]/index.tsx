import {
  CmsApi,
  CuisineSymbol,
  ITastiestDish,
  titleCase,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import TastiestDishCard from 'components/cards/TastiestDishCard';
import { SuggestRestaurant } from 'components/SuggestRestaurant';
import { usePageLoader } from 'hooks/usePageLoader';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { LookingIllustration } from 'public/assets/illustrations';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsContentLoading } from 'state/navigation';
import { CardGrid } from '../../../components/cards/CardGrid';
import { Contained } from '../../../components/Contained';
import { CUISINES } from '../../../constants';
import { generateTitle } from '../../../utils/metadata';
import AmericanHeroDesktop from '/public/assets/cuisine-pages/american-hero-desktop.svg';
import AmericanHeroMobile from '/public/assets/cuisine-pages/american-hero-mobile.svg';
import BrazilianHeroDesktop from '/public/assets/cuisine-pages/brazilian-hero-desktop.svg';
import BrazilianHeroMobile from '/public/assets/cuisine-pages/brazilian-hero-mobile.svg';
import BritishHeroDesktop from '/public/assets/cuisine-pages/british-hero-desktop.svg';
import BritishHeroMobile from '/public/assets/cuisine-pages/british-hero-mobile.svg';
import CaribbeanHeroDesktop from '/public/assets/cuisine-pages/caribbean-hero-desktop.svg';
import CaribbeanHeroMobile from '/public/assets/cuisine-pages/caribbean-hero-mobile.svg';
import ChineseHeroDesktop from '/public/assets/cuisine-pages/chinese-hero-desktop.svg';
import ChineseHeroMobile from '/public/assets/cuisine-pages/chinese-hero-mobile.svg';
import FrenchHeroDesktop from '/public/assets/cuisine-pages/french-hero-desktop.svg';
import FrenchHeroMobile from '/public/assets/cuisine-pages/french-hero-mobile.svg';
import IndianHeroDesktop from '/public/assets/cuisine-pages/indian-hero-desktop.svg';
import IndianHeroMobile from '/public/assets/cuisine-pages/indian-hero-mobile.svg';
import ItalianHeroDesktop from '/public/assets/cuisine-pages/italian-hero-desktop.svg';
import ItalianHeroMobile from '/public/assets/cuisine-pages/italian-hero-mobile.svg';
import JapaneseHeroDesktop from '/public/assets/cuisine-pages/japanese-hero-desktop.svg';
import JapaneseHeroMobile from '/public/assets/cuisine-pages/japanese-hero-mobile.svg';
import MediterraneanHeroDesktop from '/public/assets/cuisine-pages/mediterranean-hero-desktop.svg';
import MediterraneanHeroMobile from '/public/assets/cuisine-pages/mediterranean-hero-mobile.svg';
import MexicanHeroDesktop from '/public/assets/cuisine-pages/mexican-hero-desktop.svg';
import MexicanHeroMobile from '/public/assets/cuisine-pages/mexican-hero-mobile.svg';
import SpanishHeroDesktop from '/public/assets/cuisine-pages/spanish-hero-desktop.svg';
import SpanishHeroMobile from '/public/assets/cuisine-pages/spanish-hero-mobile.svg';

interface IPath {
  params: { city: string; cuisine: string };
}

interface Props {
  heroMobileSrc: string;
  heroDesktopSrc: string;
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

  const cuisine = CUISINES[cuisineSymbol];
  const cuisinePathName = cuisine.name.toLowerCase().replace('-', '');
  const heroMobileSrc = `/assets/cuisine-pages/${cuisinePathName}-hero-mobile.svg`;
  const heroDesktopSrc = `/assets/cuisine-pages/${cuisinePathName}-hero-desktop.svg`;

  return {
    props: {
      heroMobileSrc,
      heroDesktopSrc,
      cuisineSymbol,
      tastiestDishes,
    },
    revalidate: 360,
  };
};

export default function CuisinePage(props: Props) {
  const {
    heroMobileSrc,
    heroDesktopSrc,
    tastiestDishes = [],
    cuisineSymbol,
  } = props;

  const cuisine = CUISINES[cuisineSymbol];
  const cuisineName = titleCase(String(cuisine?.name));
  const cards = tastiestDishes.map(dish => (
    <TastiestDishCard key={dish.id} compact {...dish} />
  ));

  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <>
      <Head>
        <title>{generateTitle(cuisineName)}</title>
      </Head>

      <div>
        <div className="flex flex-col w-full space-y-10">
          <div className="relative mt-6 tablet:mt-6">
            <CuisineHero cuisineSymbol={cuisineSymbol} />

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
  cuisineSymbol: CuisineSymbol;
}

const CuisineImage = (props: CuisineHeroProps) => {
  const { cuisineSymbol } = props;
  const { isMobile, isTablet } = useScreenSize();

  const desktopH = 713;
  const desktopW = 1450;
  const desktopHPc = 100 * (desktopH / desktopW);

  const mobileH = 713;
  const mobileW = 1300;
  const mobileHPc = 100 * (mobileH / mobileW);

  const sizeMultipler = useMemo(() => (isMobile ? 1.33 : isTablet ? 1.5 : 1), [
    isMobile,
    isTablet,
  ]);

  const style = useMemo(
    () => ({
      width: `${100 * sizeMultipler}%`,
      minWidth: isMobile ? '325px' : 'auto',
      transform: `translate(${sizeMultipler > 1 ? '-15%' : '0%'}, -10%)`,
      paddingBottom: `${(isMobile ? mobileHPc : desktopHPc) * sizeMultipler}%`,
    }),
    [isMobile, isTablet],
  );

  // Manual trigger for isPageLoading
  const dispatch = useDispatch();

  AmericanHeroMobile;
  BrazilianHeroDesktop;
  BrazilianHeroMobile;
  BritishHeroDesktop;
  BritishHeroMobile;
  CaribbeanHeroDesktop;
  CaribbeanHeroMobile;
  ChineseHeroDesktop;
  ChineseHeroMobile;
  FrenchHeroDesktop;
  FrenchHeroMobile;
  IndianHeroDesktop;
  IndianHeroMobile;
  ItalianHeroDesktop;
  ItalianHeroMobile;
  JapaneseHeroDesktop;
  JapaneseHeroMobile;
  MediterraneanHeroDesktop;
  MediterraneanHeroMobile;
  MexicanHeroDesktop;
  MexicanHeroMobile;
  SpanishHeroDesktop;
  SpanishHeroMobile;

  const { isRouteLoading, isPageLoading } = usePageLoader();
  const [hasFiredLoadingEvent, setHasFiredLoadingEvent] = useState(false);

  const manageLoadingComplete = useCallback(() => {
    console.log('GOOD: manageLoadingComplete fires');
    if (!isRouteLoading && !isPageLoading && !hasFiredLoadingEvent) {
      dispatch(setIsContentLoading(false));
      setHasFiredLoadingEvent(true);
      console.log('GOOD: I"M IN');
    }
  }, [isRouteLoading, isPageLoading, hasFiredLoadingEvent]);

  // Reset hasFiredLoadingEvent on route change
  useEffect(() => {
    setHasFiredLoadingEvent(false);
  }, [cuisineSymbol]);

  const source = useMemo(() => {
    switch (cuisineSymbol) {
      case CuisineSymbol.AMERICAN: {
        return {
          desktopSrc: AmericanHeroDesktop,
          mobileSrc: AmericanHeroMobile,
        };
      }
      case CuisineSymbol.BRAZILIAN: {
        return {
          desktopSrc: BrazilianHeroDesktop,
          mobileSrc: BrazilianHeroMobile,
        };
      }
      case CuisineSymbol.BRITISH: {
        return {
          desktopSrc: BritishHeroDesktop,
          mobileSrc: BritishHeroMobile,
        };
      }
      case CuisineSymbol.CARIBBEAN: {
        return {
          desktopSrc: CaribbeanHeroDesktop,
          mobileSrc: CaribbeanHeroMobile,
        };
      }
      case CuisineSymbol.CHINESE: {
        return {
          desktopSrc: ChineseHeroDesktop,
          mobileSrc: ChineseHeroMobile,
        };
      }
      case CuisineSymbol.FRENCH: {
        return {
          desktopSrc: FrenchHeroDesktop,
          mobileSrc: FrenchHeroMobile,
        };
      }
      case CuisineSymbol.INDIAN: {
        return {
          desktopSrc: IndianHeroDesktop,
          mobileSrc: IndianHeroMobile,
        };
      }
      case CuisineSymbol.ITALIAN: {
        return {
          desktopSrc: ItalianHeroDesktop,
          mobileSrc: ItalianHeroMobile,
        };
      }
      case CuisineSymbol.JAPANESE: {
        return {
          desktopSrc: JapaneseHeroDesktop,
          mobileSrc: JapaneseHeroMobile,
        };
      }
      case CuisineSymbol.MEDITERRANEAN: {
        return {
          desktopSrc: MediterraneanHeroDesktop,
          mobileSrc: MediterraneanHeroMobile,
        };
      }
      case CuisineSymbol.MEXICAN: {
        return {
          desktopSrc: MexicanHeroDesktop,
          mobileSrc: MexicanHeroMobile,
        };
      }
      case CuisineSymbol.SPANISH: {
        return {
          desktopSrc: SpanishHeroDesktop,
          mobileSrc: SpanishHeroMobile,
        };
      }
      default: {
        return {
          desktopSrc: null,
          mobileSrc: null,
        };
      }
    }
  }, [cuisineSymbol]);

  return (
    <div className="relative h-px mobile:mt-10" style={style}>
      {isMobile && (
        <Image
          src={source.mobileSrc}
          layout="fill"
          objectFit="cover"
          priority
          className="block w-full mobile:hidden"
          onLoadingComplete={() => manageLoadingComplete()}
        />
      )}

      {!isMobile && (
        <Image
          src={source.desktopSrc}
          layout="fill"
          objectFit="cover"
          priority
          className="hidden w-full mobile:block"
          onLoadingComplete={() => manageLoadingComplete()}
        />
      )}
    </div>
  );
};

const CuisineHero = (props: CuisineHeroProps) => {
  const { isHuge } = useScreenSize();

  return (
    <div>
      {isHuge ? (
        <Contained maxWidth={933}>
          <CuisineImage {...props} />
        </Contained>
      ) : (
        <CuisineImage {...props} />
      )}
    </div>
  );
};
