import { CuisineSymbol } from './cuisine';

export enum UserData {
  DISPLAY_NAME = 'displayName',
  BOOKINGS = 'bookings',
  COVERS = 'covers',
  RECENT_SEARCHES = 'recentSearches',
  PROFILE_PICTURE_URL = 'profilePictureUrl',
  REFERRED_FROM = 'referredFrom',

  FAVOURITE_CUISINES = 'favouriteCuisines',
  FAVOURITE_RESTAURANTS = 'favouriteRestaurants',
  RESTAURANTS_VISITED = 'restaurantsVisited',
  SAVED_ARTICLES = 'savedArticles',

  USER_SESSIONS = 'userSessions',
  USER_DEVICE = 'userDevice',
}

export interface IUserSession {
  device: 'mobile' | 'tablet' | 'desktop';
  sessionStartTimestamp: number;
  sessionEndTimestamp: number;
}

export interface IBooking {
  never;
}

export interface ICover {
  never;
}

export interface IRecentSearch {
  query: string;
  timestamp: number;
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
    T extends UserData.FAVOURITE_CUISINES ? Array<CuisineSymbol> :
    T extends UserData.FAVOURITE_RESTAURANTS? Array<string> :

    // User orders
    T extends UserData.BOOKINGS ? Array<IBooking> :
    T extends UserData.COVERS ? Array<ICover> : 
    T extends UserData.RESTAURANTS_VISITED ? Array<string> :

    // User metadata
    T extends UserData.USER_SESSIONS ? Array<IUserSession> :

    never;

export type IUserData = {
  [key in UserData]: TUserData<key>;
};
