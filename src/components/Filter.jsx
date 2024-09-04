import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  <input
    type="text"
    placeholder="Search contacts..."
    value={value}
    onChange={onChange}
    className={styles.input}
  />;
};

export default Filter;
