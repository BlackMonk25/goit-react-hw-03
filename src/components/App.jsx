// import React, { useState, useEffect } from 'react';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import SearchBox from './SearchBox';

// function App() {
//   // Початкові контакти
//   const initialContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];

//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   // Завантаження контактів з локального сховища при завантаженні застосунку
//   useEffect(() => {
//     const savedContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (savedContacts) {
//       setContacts(savedContacts);
//     } else {
//       setContacts(initialContacts); // Якщо контактів немає в локальному сховищі, використовуємо початкові.
//     }
//   }, []);

//   // Збереження контактів у локальному сховищі при зміні списку контактів
//   useEffect(() => {
//     if (contacts.length > 0) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }, [contacts]);

//   const handleFilterChange = event => {
//     setFilter(event.target.value);
//   };

//   const handleAddContact = newContact => {
//     setContacts(prevContacts => [...prevContacts, newContact]);
//   };

//   const handleDeleteContact = contactId => {
//     setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
//   };

//   const handleReset = () => {
//     setContacts(initialContacts); // Скидаємо контакти до початкових значень
//     localStorage.setItem('contacts', JSON.stringify(initialContacts)); // Оновлюємо локальне сховище
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAddContact={handleAddContact} />
//       <SearchBox value={filter} onChange={handleFilterChange} />
//       <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
//       <button onClick={handleReset}>Reset Contacts</button> {/* Кнопка для скидання контактів */}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBox from './SearchBox';

function App() {
  // Початкові контакти
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // Завантаження контактів з локального сховища при старті
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(savedContacts ?? initialContacts);
  }, []);

  // Збереження контактів у локальному сховищі при зміні списку контактів
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Додавання контакту
  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  // Видалення контакту
  const handleDeleteContact = contactId => {
    setContacts(prevContacts => {
      const updatedContacts = prevContacts.filter(contact => contact.id !== contactId);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Оновлення localStorage
      return updatedContacts;
    });
  };

  // Скидання контактів до початкового стану
  const handleReset = () => {
    setContacts(initialContacts);
    setFilter(''); // Очищаємо фільтр
    localStorage.setItem('contacts', JSON.stringify(initialContacts));
  };

  // Фільтр контактів
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={e => setFilter(e.target.value)} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
      <button onClick={handleReset}>Reset Contacts</button>
    </div>
  );
}

export default App;






















