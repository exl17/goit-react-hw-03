import React from 'react';

const Contact = ({ contact }) => {
  const { name, number } = contact;
  
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
};

export default Contact;
