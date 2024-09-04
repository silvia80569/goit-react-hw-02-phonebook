import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';


class App extends Component {
 
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

 addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };

   if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
   }
   
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
        <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
