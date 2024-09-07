import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    {contact.name}: {contact.number}
    <button
      onClick={() => onDeleteContact(contact.id)}
      className={styles.button}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
