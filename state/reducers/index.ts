import { combineReducers } from 'redux';
import { INavigation } from '../navigation';
import { ISearch } from '../search';
import { navigationReducer } from './navigation';
import { searchReducer } from './search';

export interface IState {
  navigation: INavigation;
  search: ISearch;
}

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  search: searchReducer,
});
