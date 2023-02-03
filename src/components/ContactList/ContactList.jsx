import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';
import { Btn, Contacts, ContactsItem, User } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onfilter = useSelector(getFilter);

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(onfilter.toLowerCase())
    );
  };

  const filteredContacts = findContacts();

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <User>
              {name}: {number}
            </User>
            <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Btn>
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};
