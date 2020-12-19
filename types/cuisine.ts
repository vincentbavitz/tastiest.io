import { SVG } from '.';

export interface ICuisine {
  // Name is the cuisine as it's rendered. Don't forget capitalizations
  name: string;
  href: string;
  svg: SVG;
  pageSvg?: SVG;
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