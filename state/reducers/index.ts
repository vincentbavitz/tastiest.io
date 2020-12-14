import { combineReducers } from 'redux';
import { IArticle } from '../../types/article';
import { INavigation } from '../navigation';
import { ISearch } from '../search';
import { articleReducer } from './article';
import { navigationReducer } from './navigation';
import { searchReducer } from './search';

export interface IState {
  navigation: INavigation;
  search: ISearch;
  article: IArticle;
}

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  search: searchReducer,
  article: articleReducer,
});
