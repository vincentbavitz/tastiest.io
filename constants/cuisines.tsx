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
    popularity: 1,
  },
  [CuisineSymbol.FRENCH]: {
    name: 'French',
    href: '/french',
    svg: FrenchIcon,
    popularity: 1,
  },
  [CuisineSymbol.JAPANESE]: {
    name: 'Japanese',
    href: '/japanese',
    svg: JapaneseIcon,
    popularity: 1,
  },
  [CuisineSymbol.CHINESE]: {
    name: 'Chinese',
    href: '/chinese',
    svg: ChineseIcon,
    popularity: 1,
  },
  [CuisineSymbol.BRAZILIAN]: {
    name: 'Brazilian',
    href: '/brazilian',
    svg: IndianIcon,
    popularity: 8,
  },
  [CuisineSymbol.INDIAN]: {
    name: 'Indian',
    href: '/indian',
    svg: IndianIcon,
    popularity: 3,
  },
  [CuisineSymbol.SPANISH]: {
    name: 'Spanish',
    href: '/spanish',
    svg: SpanishIcon,
    popularity: 1,
  },
  [CuisineSymbol.BRITISH]: {
    name: 'British',
    href: '/british',
    svg: BritishIcon,
    popularity: 1,
  },
  [CuisineSymbol.AMERICAN]: {
    name: 'American',
    href: '/american',
    svg: AmericanIcon,
    popularity: 12,
  },
  [CuisineSymbol.MEXICAN]: {
    name: 'Mexican',
    href: '/mexican',
    svg: MexicanIcon,
    popularity: 1,
  },
  [CuisineSymbol.CARIBBEAN]: {
    name: 'Caribbean',
    href: '/caribbean',
    svg: CaribbeanIcon,
    popularity: 10,
  },
  [CuisineSymbol.MEDITERRANEAN]: {
    name: 'Mediterranean',
    href: '/mediterranean',
    svg: MediterraneanIcon,
    popularity: 1,
  },
} as { [name: string]: ICuisine };

export default CUISINES;
