import { Document } from '@contentful/rich-text-types';
import { CuisineSymbol } from './cuisine';

export type IAuthor = {
  name: string;
  bio: string;
  email: string;
  profileImage?: IFigureImage;
  // Eg. Marketing, Researcher
  position: string | null;
};

export type ValidHead = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export const valdHeads: ValidHead[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export type IFigureImage = {
  title: string | null;
  description: string | null;
  imageUrl: string;
};

// Articles link to IDeal
export interface IDeal {
  id: string;
  tagline: string; // Experience the best porterhouse steak in London
  includes: Array<string>; // ['300g Porterhouse', 'Fries', ...]
  pricePerHeadGBP: number; // 25 (25 pounds)s
  restaurant: IRestaurant;
  image: IFigureImage;
}

export interface ILocation {
  address: string;
  postalCode?: string;
  lat: number;
  lon: number;
}

export interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
}

export interface IOrganisation {
  id: string;
  name: string;
  website: string;
  contact: IContact;
  // Restaurant IDs
  restaurants: Array<string>;
}

export interface IRestaurant {
  id: string;
  name: string;
  website: string;
  businessType: 'restaurant' | 'take-away' | 'cafe';
  location: ILocation;
  cuisines: CuisineSymbol[];
  // Contentful has a contact, but we don't want to
  // share that with the user.
  contact?: IContact;
}

export interface IPost {
  id: string;
  title: string;
  description: string;
  body: Document;
  author: IAuthor;
  date: string;
  city: string;
  dishName: string;
  video: string;
  cuisine: string;
  deal: IDeal;
  restaurant: IRestaurant;
  featureImage: IFigureImage;
  tags: Array<string>;
  slug: string;
  abstractDivider: IFigureImage;
  offerDivider: IFigureImage;
}

export type BodyDocument = {
  nodeType: 'document';
  content: any;
};
