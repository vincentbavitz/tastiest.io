import 'firebase/firestore'; // <- needed if using firestore
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // <- needed if using firestore
import { IFirestore } from '../../constants/firebase';
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
  firestore: IFirestore;
}

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  search: searchReducer,
  checkout: checkoutReducer,

  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});
