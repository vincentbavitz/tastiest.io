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
}

export const CUISINES: Array<ICuisine> = [
  { name: 'Italian', href: '/italian', svg: <ItalianSVG /> },
  { name: 'French', href: '/french', svg: <FrenchSVG /> },
  { name: 'Japanese', href: '/japanese', svg: <JapaneseSVG /> },
  { name: 'Chinese', href: '/chinese', svg: <ChineseSVG /> },
  { name: 'Indian', href: '/indian', svg: <IndianSVG /> },
  { name: 'Spanish', href: '/spanish', svg: <SpanishSVG /> },
  { name: 'English', href: '/english', svg: <EnglishSVG /> },
  { name: 'American', href: '/american', svg: <AmericanSVG /> },
  { name: 'Mexican', href: '/mexican', svg: <MexicanSVG /> },
  { name: 'Mediterranean', href: '/mediterranean', svg: <MediterraneanSVG /> },
];

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
