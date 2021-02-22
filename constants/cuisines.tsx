// Ensure SVGs dont have any width or height attrs.
import AmericaSVG from '@svg/cuisine-pages/america.svg';
import BritianSVG from '@svg/cuisine-pages/britain.svg';
import ChinaSVG from '@svg/cuisine-pages/china.svg';
import FranceSVG from '@svg/cuisine-pages/france.svg';
import IndiaSVG from '@svg/cuisine-pages/india.svg';
import ItalySVG from '@svg/cuisine-pages/italy.svg';
import JapanSVG from '@svg/cuisine-pages/japan.svg';
import MediterraneanPageSVG from '@svg/cuisine-pages/mediterranean.svg';
import MexicoSVG from '@svg/cuisine-pages/mexico.svg';
import SpainSVG from '@svg/cuisine-pages/spain.svg';
import AmericanSVG from '@svg/cuisines/american.svg';
import BritishSVG from '@svg/cuisines/british.svg';
import ChineseSVG from '@svg/cuisines/chinese.svg';
import FrenchSVG from '@svg/cuisines/french.svg';
import IndianSVG from '@svg/cuisines/indian.svg';
import ItalianSVG from '@svg/cuisines/italian.svg';
import JapaneseSVG from '@svg/cuisines/japanese.svg';
import MediterraneanSVG from '@svg/cuisines/mediterranean.svg';
import MexicanSVG from '@svg/cuisines/mexican.svg';
import SpanishSVG from '@svg/cuisines/spanish.svg';
import { CuisineSymbol, ICuisine } from '../types/cuisine';

const CUISINES = {
  [CuisineSymbol.ITALIAN]: {
    name: 'Italian',
    href: '/italian',
    svg: ItalianSVG,
    pageSvg: ItalySVG,
    popularity: 1103,
  },
  [CuisineSymbol.FRENCH]: {
    name: 'French',
    href: '/french',
    svg: FrenchSVG,
    pageSvg: FranceSVG,
    popularity: 1337,
  },
  [CuisineSymbol.JAPANESE]: {
    name: 'Japanese',
    href: '/japanese',
    svg: JapaneseSVG,
    pageSvg: JapanSVG,
    popularity: 2147,
  },
  [CuisineSymbol.CHINESE]: {
    name: 'Chinese',
    href: '/chinese',
    svg: ChineseSVG,
    pageSvg: ChinaSVG,
    popularity: 3333,
  },
  [CuisineSymbol.INDIAN]: {
    name: 'Indian',
    href: '/indian',
    svg: IndianSVG,
    pageSvg: IndiaSVG,
    popularity: 4096,
  },
  [CuisineSymbol.SPANISH]: {
    name: 'Spanish',
    href: '/spanish',
    svg: SpanishSVG,
    pageSvg: SpainSVG,
    popularity: 13,
  },
  [CuisineSymbol.BRITISH]: {
    name: 'British',
    href: '/british',
    svg: BritishSVG,
    pageSvg: BritianSVG,
    popularity: 11,
  },
  [CuisineSymbol.AMERICAN]: {
    name: 'American',
    href: '/america',
    svg: AmericanSVG,
    pageSvg: AmericaSVG,
    popularity: 400,
  },
  [CuisineSymbol.MEXICAN]: {
    name: 'Mexican',
    href: '/mexican',
    svg: MexicanSVG,
    pageSvg: MexicoSVG,
    popularity: 903,
  },
  [CuisineSymbol.MEDITERRANEAN]: {
    name: 'Mediterranean',
    href: '/mediterranean',
    svg: MediterraneanSVG,
    pageSvg: MediterraneanPageSVG,
    popularity: 543,
  },
} as { [name: string]: ICuisine };

export default CUISINES;
