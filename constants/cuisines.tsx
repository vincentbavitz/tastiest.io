// Ensure SVGs dont have any width or height attrs.
import AmericaSVG from '../assets/svgs/cuisine-pages/america.svg';
import BritishPageSVG from '../assets/svgs/cuisine-pages/britain.svg';
import ChinaSVG from '../assets/svgs/cuisine-pages/china.svg';
import FranceSVG from '../assets/svgs/cuisine-pages/france.svg';
import IndiaSVG from '../assets/svgs/cuisine-pages/india.svg';
import ItalySVG from '../assets/svgs/cuisine-pages/italy.svg';
import JapanSVG from '../assets/svgs/cuisine-pages/japan.svg';
import MediterraneanPageSVG from '../assets/svgs/cuisine-pages/mediterranean.svg';
import MexicoSVG from '../assets/svgs/cuisine-pages/mexico.svg';
import SpainSVG from '../assets/svgs/cuisine-pages/spain.svg';
import AmericanSVG from '../assets/svgs/cuisines/american.svg';
import BritishSVG from '../assets/svgs/cuisines/british.svg';
import ChineseSVG from '../assets/svgs/cuisines/chinese.svg';
import FrenchSVG from '../assets/svgs/cuisines/french.svg';
import IndianSVG from '../assets/svgs/cuisines/indian.svg';
import ItalianSVG from '../assets/svgs/cuisines/italian.svg';
import JapaneseSVG from '../assets/svgs/cuisines/japanese.svg';
import MediterraneanSVG from '../assets/svgs/cuisines/mediterranean.svg';
import MexicanSVG from '../assets/svgs/cuisines/mexican.svg';
import SpanishSVG from '../assets/svgs/cuisines/spanish.svg';
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
    pageSvg: BritishPageSVG,
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
