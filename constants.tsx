// Ensure SVGs dont have any width or height attrs.
import ChineseSVG from './assets/svgs/cuisines/chinese.svg';
import FrenchSVG from './assets/svgs/cuisines/french.svg';
import IndianSVG from './assets/svgs/cuisines/indian.svg';
import ItalianSVG from './assets/svgs/cuisines/italian.svg';
import JapaneseSVG from './assets/svgs/cuisines/japanese.svg';

export interface ICuisine {
  // Name is the cuisine as it's rendered. Don't forget capitalisations
  name: string;
  href: string;
  svg: JSX.Element;
}

export const cuisines: Array<ICuisine> = [
  { name: 'Italian', href: '/italian', svg: <ItalianSVG /> },
  { name: 'French', href: '/french', svg: <FrenchSVG /> },
  { name: 'Japanese', href: '/japanese', svg: <JapaneseSVG /> },
  { name: 'Chinese', href: '/chinese', svg: <ChineseSVG /> },
  { name: 'Indian', href: '/indian', svg: <IndianSVG /> },
];

export const UI = {
  MOBILE_BREAKPOINT: 500,
};

export const postsUriPrefix = '';
