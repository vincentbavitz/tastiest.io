import { combineReducers } from 'redux';
import { ICheckout } from '../checkout';
import { INavigation } from '../navigation';
import { ISearch } from '../search';
import { checkoutReducer } from './checkout';
import { navigationReducer } from './navigation';
import { searchReducer } from './search';

export interface IState {
  navigation: INavigation;
  search: ISearch;
  checkout: ICheckout;
}

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  search: searchReducer,
  checkout: checkoutReducer,
});
