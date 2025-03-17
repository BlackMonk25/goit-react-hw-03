// import React from 'react';
// import { FaUser, FaPhoneAlt } from 'react-icons/fa';
// import styles from './ContactList.module.css';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <div className={styles.listContainer}>
//       <ul className={styles.list}>
//         {contacts.map(({ id, name, number }) => (
//           <li key={id} className={styles.listItem}>
//             <div className={styles.contactInfo}>
//               <span className={styles.contactName}>
//                 <FaUser className={styles.icon} /> {name}
//               </span>
//               <span className={styles.contactNumber}>
//                 <FaPhoneAlt className={styles.icon} /> {number}
//               </span>
//             </div>
//             <button
//               onClick={() => onDeleteContact(id)}
//               className={styles.button}
//             >
//               Видалити
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactList;


import Contact from './Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;









