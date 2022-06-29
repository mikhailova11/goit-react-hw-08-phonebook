
import {  configureStore, combineReducers, createReducer, createAction } from '@reduxjs/toolkit';
import {  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';

import logger from 'redux-logger';
import { addContact, deleteContact, fetchContacts, updateContact } from './operaitions';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authSlice from "../redux/slice";


export const filterChange = createAction('filterChange');


const items = createReducer({}, {
  [fetchContacts.fulfilled]: (_, {payload}) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
  [updateContact.fulfilled]: (state, { payload }) => state,
});

const filter = createReducer('', {
  [filterChange]: (_, { payload }) =>  payload,
});


const  contactsReducer = combineReducers({
  items,
  filter,
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist:['token']

}

const  authReducer = combineReducers({
  auth: persistReducer(authPersistConfig,authSlice.reducer),
});



export const store = configureStore({
reducer: { auth: authReducer,
  contacts: contactsReducer },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
  
  
  
  

