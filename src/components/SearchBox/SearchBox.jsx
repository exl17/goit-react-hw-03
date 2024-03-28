import React from 'react';
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div>
      <p className={styles.paragraphe}>Find contacts by name</p>
      <input className={styles.inputForm}
        type="text"
        placeholder="Search by name..."
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default SearchBox;
