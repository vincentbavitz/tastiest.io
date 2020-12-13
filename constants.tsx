// Ensure SVGs dont have any width or height attrs.
import AmericaSVG from './assets/svgs/cuisine-pages/america.svg';
import ChinaSVG from './assets/svgs/cuisine-pages/china.svg';
import FranceSVG from './assets/svgs/cuisine-pages/france.svg';
import IndiaSVG from './assets/svgs/cuisine-pages/india.svg';
import JapanSVG from './assets/svgs/cuisine-pages/japan.svg';
import MexicoSVG from './assets/svgs/cuisine-pages/mexico.svg';
import AmericanSVG from './assets/svgs/cuisines/american.svg';
import ChineseSVG from './assets/svgs/cuisines/chinese.svg';
import EnglishSVG from './assets/svgs/cuisines/english.svg';
import FrenchSVG from './assets/svgs/cuisines/french.svg';
import IndianSVG from './assets/svgs/cuisines/indian.svg';
import ItalianSVG from './assets/svgs/cuisines/italian.svg';
import JapaneseSVG from './assets/svgs/cuisines/japanese.svg';
import MediterraneanSVG from './assets/svgs/cuisines/mediterranean.svg';
import MexicanSVG from './assets/svgs/cuisines/mexican.svg';
import SpanishSVG from './assets/svgs/cuisines/spanish.svg';

export interface ICuisine {
  // Name is the cuisine as it's rendered. Don't forget capitalizations
  name: string;
  href: string;
  svg: JSX.Element;
  pageSvg?: JSX.Element;
  popularity: number;
}

export enum CuisineSymbol {
  ITALIAN = 'ITALIAN',
  FRENCH = 'FRENCH',
  JAPANESE = 'JAPANESE',
  CHINESE = 'CHINESE',
  INDIAN = 'INDIAN',
  SPANISH = 'SPANISH',
  ENGLISH = 'ENGLISH',
  AMERICAN = 'AMERICAN',
  MEXICAN = 'MEXICAN',
  MEDITERRANEAN = 'MEDITERRANEAN',
}

export const CUISINES = {
  [CuisineSymbol.ITALIAN]: {
    name: 'Italian',
    href: '/italian',
    svg: <ItalianSVG />,
    pageSvg: undefined,
    popularity: 1103,
  },
  [CuisineSymbol.FRENCH]: {
    name: 'French',
    href: '/french',
    svg: <FrenchSVG />,
    pageSvg: <FranceSVG />,
    popularity: 1337,
  },
  [CuisineSymbol.JAPANESE]: {
    name: 'Japanese',
    href: '/japanese',
    svg: <JapaneseSVG />,
    pageSvg: <JapanSVG />,
    popularity: 2147,
  },
  [CuisineSymbol.CHINESE]: {
    name: 'Chinese',
    href: '/chinese',
    svg: <ChineseSVG />,
    pageSvg: <ChinaSVG />,
    popularity: 3333,
  },
  [CuisineSymbol.INDIAN]: {
    name: 'Indian',
    href: '/indian',
    svg: <IndianSVG />,
    pageSvg: <IndiaSVG />,
    popularity: 4096,
  },
  [CuisineSymbol.SPANISH]: {
    name: 'Spanish',
    href: '/spanish',
    svg: <SpanishSVG />,
    pageSvg: <MexicoSVG />,
    popularity: 13,
  },
  [CuisineSymbol.ENGLISH]: {
    name: 'English',
    href: '/english',
    svg: <EnglishSVG />,
    pageSvg: undefined,
    popularity: 11,
  },
  [CuisineSymbol.AMERICAN]: {
    name: 'American',
    href: '/american',
    svg: <AmericanSVG />,
    pageSvg: <AmericaSVG />,
    popularity: 400,
  },
  [CuisineSymbol.MEXICAN]: {
    name: 'Mexican',
    href: '/mexican',
    svg: <MexicanSVG />,
    pageSvg: <MexicoSVG />,
    popularity: 903,
  },
  [CuisineSymbol.MEDITERRANEAN]: {
    name: 'Mediterranean',
    href: '/mediterranean',
    svg: <MediterraneanSVG />,
    popularity: 543,
  },
} as { [name: string]: ICuisine };

export const METADATA = {
  TITLE_SUFFIX: 'Tastiest: Discover. Eat. Smile',
};

export const UI = {
  MOBILE_BREAKPOINT: 500,
  TABLET_BREAKPOINT: 715,
  DESKTOP_BREAKPOINT: 1100,
  MAX_CONTENT_WIDTH: 1300,

  USER_QUERY_404_MAX_LEN: 500,

  ARTICLE: {
    TITLE_MAX_WIDTH_REM: 29,
    EATING_CHARACTER_SIZE_REM: 22,
  },
};

export const SEARCH = {
  // SEARCH_ITEMS_PER_PAGE: 20
  SEARCH_ITEMS_PER_PAGE: 1,
  SOFT_LIMIT_SEARCH_RESULTS_OVERLAY: 4,
};
