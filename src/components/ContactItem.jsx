import React from 'react';
import styles from './ContactList.module.css'

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    {contact.name}: {contact.number}
    <button onClick={() => onDeleteContact(contact.id)}className={styles.button}>Delete</button>
  </li>
);

export default ContactItem;