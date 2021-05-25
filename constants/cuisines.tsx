import {
  AmericanIcon,
  BritishIcon,
  CaribbeanIcon,
  ChineseIcon,
  FrenchIcon,
  IndianIcon,
  ItalianIcon,
  JapaneseIcon,
  MediterraneanIcon,
  MexicanIcon,
  SpanishIcon,
} from '@tastiest-io/tastiest-icons';
import { CuisineSymbol, ICuisine } from '@tastiest-io/tastiest-utils';

const CUISINES = {
  [CuisineSymbol.ITALIAN]: {
    name: 'Italian',
    href: '/italian',
    svg: ItalianIcon,
    popularity: 1103,
  },
  [CuisineSymbol.FRENCH]: {
    name: 'French',
    href: '/french',
    svg: FrenchIcon,
    popularity: 1337,
  },
  [CuisineSymbol.JAPANESE]: {
    name: 'Japanese',
    href: '/japanese',
    svg: JapaneseIcon,
    popularity: 2147,
  },
  [CuisineSymbol.CHINESE]: {
    name: 'Chinese',
    href: '/chinese',
    svg: ChineseIcon,
    popularity: 3333,
  },
  [CuisineSymbol.BRAZILIAN]: {
    name: 'Brazilian',
    href: '/brazilian',
    svg: IndianIcon,
    popularity: 33,
  },
  [CuisineSymbol.INDIAN]: {
    name: 'Indian',
    href: '/indian',
    svg: IndianIcon,
    popularity: 4096,
  },
  [CuisineSymbol.SPANISH]: {
    name: 'Spanish',
    href: '/spanish',
    svg: SpanishIcon,
    popularity: 13,
  },
  [CuisineSymbol.BRITISH]: {
    name: 'British',
    href: '/british',
    svg: BritishIcon,
    popularity: 11,
  },
  [CuisineSymbol.AMERICAN]: {
    name: 'American',
    href: '/america',
    svg: AmericanIcon,
    popularity: 400,
  },
  [CuisineSymbol.MEXICAN]: {
    name: 'Mexican',
    href: '/mexican',
    svg: MexicanIcon,
    popularity: 903,
  },
  [CuisineSymbol.CARIBBEAN]: {
    name: 'Caribbean',
    href: '/caribbean',
    svg: CaribbeanIcon,
    popularity: 903,
  },
  [CuisineSymbol.MEDITERRANEAN]: {
    name: 'Mediterranean',
    href: '/mediterranean',
    svg: MediterraneanIcon,
    popularity: 543,
  },
} as { [name: string]: ICuisine };

export default CUISINES;
