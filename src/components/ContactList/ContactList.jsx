import PropTypes from 'prop-types';
import { Btn, Contacts, ContactsItem, User } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => (
  <Contacts>
    {contacts.map(({ id, name, number }) => {
      return (
        <ContactsItem key={id}>
          <User>
            {name}: {number}
          </User>
          <Btn type="button" onClick={() => deleteContact(id)}>
            Delete
          </Btn>
        </ContactsItem>
      );
    })}
  </Contacts>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  deleteContact: PropTypes.func.isRequired,
};
