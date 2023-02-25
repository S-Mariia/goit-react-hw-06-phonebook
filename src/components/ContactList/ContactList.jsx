import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ConcactItem/ConcactItem';
import { Table } from './ContactList.styled';

const LS_KEY = 'contacts';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts =
    filter !== ''
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        )
      : contacts;

  return (
    <Table>
      <tbody>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} item={contact} />
        ))}
      </tbody>
    </Table>
  );
};
