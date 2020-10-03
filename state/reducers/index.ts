import { combineReducers } from 'redux';
import { ISearch } from '../search';
import { searchReducer } from './search';

export interface IState {
  search: ISearch;
}

export const rootReducer = combineReducers({
  search: searchReducer,
});
