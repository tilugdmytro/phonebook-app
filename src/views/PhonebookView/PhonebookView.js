import Form from "../../components/Form/Form";
import Filter from "../../components/Filter/Filter";
import Container from "../../components/Container/Container";
import ContactList from "../../components/Contacts/ContactList/ContactList";

function App() {
  return (
    <Container>
      <h2 className="title">Phonebook</h2>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
