import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = { //JSON object configuration that we want Redux to use
  key: 'root', // key is the point in our reducer object do we want to store everything
  storage, //local storage 
  whitelist: ['cart'] //array containing any of the string names of the reducers we want to store
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer) //calls persistReducer and passes in persistConfig and rootReducer to return a modified version of rootReducer with persistance capabilities and persistConfig on top of it