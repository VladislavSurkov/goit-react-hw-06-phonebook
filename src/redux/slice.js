import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.playload);
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.playload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter, addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export default contactsSlice.reducer;