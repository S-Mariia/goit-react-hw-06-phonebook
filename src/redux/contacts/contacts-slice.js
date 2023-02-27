import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => [...state, action.payload],
      prepare: ({ name, number }) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
