import React, { useState, useEffect } from 'react';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from 'nanoid';

function App() {
  const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleAddContact = (newContact) => {
    const id = nanoid();
    setContacts([...contacts, { ...newContact, id }]);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
