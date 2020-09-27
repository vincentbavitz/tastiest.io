import { combineReducers } from 'redux';
import { INavigation } from '../navigation';
import { ISearch } from '../search';
import { navigationReducer } from './navigation';
import { searchReducer } from './search';

export interface IState {
  search: ISearch;
  navigation: INavigation;
}

export const rootReducer = combineReducers({
  search: searchReducer,
  navigation: navigationReducer,
});
