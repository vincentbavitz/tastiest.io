// Ensure SVGs dont have any width or height attrs.
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
  popularity: number;
}

export const CUISINES: Array<ICuisine> = [
  { name: 'Italian', href: '/italian', svg: <ItalianSVG />, popularity: 1103 },
  { name: 'French', href: '/french', svg: <FrenchSVG />, popularity: 1337 },
  {
    name: 'Japanese',
    href: '/japanese',
    svg: <JapaneseSVG />,
    popularity: 2147,
  },
  { name: 'Chinese', href: '/chinese', svg: <ChineseSVG />, popularity: 3333 },
  { name: 'Indian', href: '/indian', svg: <IndianSVG />, popularity: 4096 },
  { name: 'Spanish', href: '/spanish', svg: <SpanishSVG />, popularity: 13 },
  { name: 'English', href: '/english', svg: <EnglishSVG />, popularity: 11 },
  {
    name: 'American',
    href: '/american',
    svg: <AmericanSVG />,
    popularity: 400,
  },
  { name: 'Mexican', href: '/mexican', svg: <MexicanSVG />, popularity: 903 },
  {
    name: 'Mediterranean',
    href: '/mediterranean',
    svg: <MediterraneanSVG />,
    popularity: 543,
  },
];

export const METADATA = {
  TITLE_SUFFIX: 'Tastiest: Discover. Eat. Smile',
};

export const UI = {
  MOBILE_BREAKPOINT: 500,
  TABLET_BREAKPOINT: 715,
  DESKTOP_BREAKPOINT: 1100,
  MAX_CONTENT_WIDTH: 1300,

  USER_QUERY_404_MAX_LEN: 500,
};

export const SEARCH = {
  // SEARCH_ITEMS_PER_PAGE: 20
  SEARCH_ITEMS_PER_PAGE: 1,
  SOFT_LIMIT_SEARCH_RESULTS_OVERLAY: 4,
};
