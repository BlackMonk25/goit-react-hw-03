


// import React from 'react';

// function Contact({ id, name, number, onDelete }) {
//   return (
//     <li>
//       <p>{name}</p>
//       <p>{number}</p>
//       <button onClick={() => onDelete(id)}>Delete</button>
//     </li>
//   );
// }

// export default Contact;

import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';  // Імпортуємо іконки
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <div className={styles.contactInfo}>
        <div className={styles.iconWrapper}>
          <FaUserAlt className={styles.icon} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.iconWrapper}>
          <FaPhoneAlt className={styles.icon} />
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;







