import { CuisineSymbol } from './cuisine';

export enum USER_DATA {
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
export type TUserData<T extends USER_DATA> =
    // User profile
    T extends USER_DATA.DISPLAY_NAME ? string :
    T extends USER_DATA.PROFILE_PICTURE_URL ? string :
    T extends USER_DATA.REFERRED_FROM ? string :

    // User actions
    T extends USER_DATA.RECENT_SEARCHES ? Array<IRecentSearch> :

    // User favourites
    T extends USER_DATA.SAVED_ARTICLES ? Array<string> :
    T extends USER_DATA.FAVOURITE_CUISINES ? Array<CuisineSymbol> :
    T extends USER_DATA.FAVOURITE_RESTAURANTS? Array<string> :

    // User orders
    T extends USER_DATA.BOOKINGS ? Array<IBooking> :
    T extends USER_DATA.COVERS ? Array<ICover> : 
    T extends USER_DATA.RESTAURANTS_VISITED ? Array<string> :

    // User metadata
    T extends USER_DATA.USER_SESSIONS ? Array<IUserSession> :

    never;

export type IUserData = {
  [key in USER_DATA]: TUserData<key>;
};
