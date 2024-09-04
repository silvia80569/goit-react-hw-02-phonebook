
import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map((contact) => (
      <ContactItem
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
