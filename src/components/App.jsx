import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, SubTitle, Container } from './App.styled';


export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm/>
      <SubTitle>Contacts</SubTitle>
      <Filter/>
      <ContactList/>
    </Container>
  );
};
