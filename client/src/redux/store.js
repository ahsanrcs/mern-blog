import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import  toggleTheme  from './theme/themeSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  user:userReducer,
  theme:toggleTheme
});

const persistConfig = {
  key:root,
  storage,
  version:1
}
const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getdefaultMiddleware) =>
  getdefaultMiddleware({serializableCheck:false})
});

export const persister = persistStore(store);