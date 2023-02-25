import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const LS_KEY = 'contacts';
let initContacts = null;
const savedContacts = localStorage.getItem(LS_KEY);
if (savedContacts !== null) {
  initContacts = JSON.parse(savedContacts);
}

const initialState = {
  contacts: initContacts === null ? [] : initContacts,
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== action.payload.id),
      };
    case 'filter/setFilter':
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};
// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
