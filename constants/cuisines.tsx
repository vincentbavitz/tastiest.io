import {
  AmericanIcon,
  BrazilianIcon,
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

export interface CuisineItem extends ICuisine {
  mobileHero: any; // static imported file
  desktopHero: any; // static imported file
}

const CUISINES = {
  [CuisineSymbol.ITALIAN]: {
    name: 'Italian',
    href: '/italian',
    svg: ItalianIcon,
    mobileHero: ItalianHeroMobile,
    desktopHero: ItalianHeroDesktop,
    popularity: 1,
  },
  [CuisineSymbol.FRENCH]: {
    name: 'French',
    href: '/french',
    svg: FrenchIcon,
    mobileHero: FrenchHeroMobile,
    desktopHero: FrenchHeroDesktop,
    popularity: 1,
  },
  [CuisineSymbol.JAPANESE]: {
    name: 'Japanese',
    href: '/japanese',
    svg: JapaneseIcon,
    mobileHero: JapaneseHeroMobile,
    desktopHero: JapaneseHeroDesktop,
    popularity: 1,
  },
  [CuisineSymbol.CHINESE]: {
    name: 'Chinese',
    href: '/chinese',
    svg: ChineseIcon,
    mobileHero: ChineseHeroMobile,
    desktopHero: ChineseHeroDesktop,
    popularity: 1,
  },
  [CuisineSymbol.BRAZILIAN]: {
    name: 'Brazilian',
    href: '/brazilian',
    svg: BrazilianIcon,
    mobileHero: BrazilianHeroMobile,
    desktopHero: BrazilianHeroDesktop,
    popularity: 8,
  },
  [CuisineSymbol.INDIAN]: {
    name: 'Indian',
    href: '/indian',
    svg: IndianIcon,
    mobileHero: IndianHeroMobile,
    desktopHero: IndianHeroDesktop,
    popularity: 3,
  },
  [CuisineSymbol.SPANISH]: {
    name: 'Spanish',
    href: '/spanish',
    svg: SpanishIcon,
    mobileHero: SpanishHeroMobile,
    desktopHero: SpanishHeroDesktop,
    popularity: 1,
  },
  [CuisineSymbol.BRITISH]: {
    name: 'British',
    href: '/british',
    svg: BritishIcon,
    mobileHero: BritishHeroMobile,
    desktopHero: BritishHeroDesktop,
    popularity: 1,
  },
  [CuisineSymbol.AMERICAN]: {
    name: 'American',
    href: '/american',
    svg: AmericanIcon,
    mobileHero: AmericanHeroMobile,
    desktopHero: AmericanHeroDesktop,
    popularity: 12,
  },
  [CuisineSymbol.MEXICAN]: {
    name: 'Mexican',
    href: '/mexican',
    svg: MexicanIcon,
    mobileHero: MexicanHeroMobile,
    desktopHero: MexicanHeroDesktop,
    popularity: 1,
  },
  [CuisineSymbol.CARIBBEAN]: {
    name: 'Caribbean',
    href: '/caribbean',
    svg: CaribbeanIcon,
    mobileHero: CaribbeanHeroMobile,
    desktopHero: CaribbeanHeroDesktop,
    popularity: 10,
  },
  [CuisineSymbol.MEDITERRANEAN]: {
    name: 'Mediterranean',
    href: '/mediterranean',
    svg: MediterraneanIcon,
    mobileHero: MediterraneanHeroMobile,
    desktopHero: MediterraneanHeroDesktop,
    popularity: 1,
  },
} as { [name: string]: CuisineItem };

export default CUISINES;
