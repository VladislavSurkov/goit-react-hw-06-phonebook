import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from '../../redux/slice';
import { Form, Input, Btn } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.some(
      i =>
        i.name.toLowerCase() === contact.name.toLowerCase() ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact));
    
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};