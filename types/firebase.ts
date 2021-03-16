import { IPaymentDetails } from './checkout';
import { ILocation } from './cms';
import { CuisineSymbol } from './cuisine';
import { IDateObject } from './various';

export enum UserData {
  DISPLAY_NAME = 'displayName',
  BOOKINGS = 'bookings',
  COVERS = 'covers',
  RECENT_SEARCHES = 'recentSearches',
  PROFILE_PICTURE_URL = 'profilePictureUrl',
  REFERRED_FROM = 'referredFrom',

  RESTAURANTS_VISITED = 'restaurantsVisited',
  SAVED_ARTICLES = 'savedArticles',

  DETAILS = 'details',
  PAYMENT_DETAILS = 'paymentDetails',
  PREFERENCES = 'preferences',

  USER_SESSIONS = 'userSessions',
  USER_DEVICE = 'userDevice',
}

export enum FirebaseAuthError {
  INVALID_EMAIL = 'auth/invalid-email',
  INVALID_PASSWORD = 'auth/invalid-password',
  EMAIL_ALREADY_EXISTS = 'auth/email-already-exists',
  WRONG_PASSWORD = 'auth/wrong-password',
  USER_NOT_FOUND = 'auth/user-not-found',
  OTHER = 'other',
}

export interface IUserSession {
  device: 'mobile' | 'tablet' | 'desktop';
  sessionStartTimestamp: number;
  sessionEndTimestamp: number;
}

// Order type in the raw DB form
// We don't want the IDeal etc stored here directly,
// as the user generates this  information client side.
// We get the actual deal informatiuon server-side from Contentful
export interface IOrderRequest {
  dealId?: string;
  userId?: string;
  heads?: number;
  fromSlug?: string;
  timestamp?: number;
}

export interface ICover {
  never;
}

export interface IRecentSearch {
  query: string;
  timestamp: number;
}

export type TFavouriteCuisine = {
  existing: CuisineSymbol | 'ALL_FOOD' | null;
  other: string | null;
};

export interface IUserDetails {
  // Lookup latitude and longitude using Mapbox API to search by location
  // with contentful
  firstName: string | null;
  lastName: string | null;
  address: ILocation | null;
  birthday: IDateObject | null;
  mobile: string | null;
}

export interface IUserPreferences {
  // In order of decreasing proference. Max of three.
  favouriteCuisines:
    | [TFavouriteCuisine?, TFavouriteCuisine?, TFavouriteCuisine?]
    | null;
}

// prettier-ignore
export type TUserData<T extends UserData> =
    // User profile
    T extends UserData.DISPLAY_NAME ? string :
    T extends UserData.PROFILE_PICTURE_URL ? string :
    T extends UserData.REFERRED_FROM ? string :

    // User actions
    T extends UserData.RECENT_SEARCHES ? Array<IRecentSearch> :

    // User favourites
    T extends UserData.SAVED_ARTICLES ? Array<string> :

    // User metadata
    T extends UserData.USER_SESSIONS ? Array<IUserSession> :
        
    // User details and preferences
    T extends UserData.DETAILS ? Partial<IUserDetails> :
    T extends UserData.PAYMENT_DETAILS ? Partial<IPaymentDetails> :
    T extends UserData.PREFERENCES ? Partial<IUserPreferences> :

    // User orders
    T extends UserData.COVERS ? Array<ICover> : 
    T extends UserData.RESTAURANTS_VISITED ? Array<string> :

    never;

export type IUserData = {
  [key in UserData]: TUserData<key>;
};
