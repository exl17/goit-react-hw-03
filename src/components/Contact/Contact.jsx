import React from 'react';
import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  const handleDelete = () => {
    onDelete(id);
  };
  
  return (
    <li className={styles.contact}>
      <div className={styles.infoContainer}>
        <span className={styles.icon}>👤</span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.icon}>📞</span>
        <span className={styles.number}>{number}</span>
      </div>
      <div className={styles.buttonContainer}>
              <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
        </div>
    </li>
  );
};

export default Contact;
