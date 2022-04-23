import React, { useState, useEffect } from 'react';
import { onValue, ref, set } from 'firebase/database';

import database from 'firebase.js';

import Button from 'components/elements/button/Button';
import InputGroup from 'components/elements/input-group/InputGroup';
import styles from './App.module.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [personInputValue, setPersonInputValue] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');

  useEffect(() => {
    onValue(ref(database, '/'), (snapshot) => {
      const data = snapshot.val();
      setMessages(Object.values(data ?? {}));
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessageId = Date.now();

    set(ref(database, `/${newMessageId}`), {
      id: newMessageId,
      person: personInputValue,
      message: messageInputValue,
    });

    setPersonInputValue('');
    setMessageInputValue('');
  };

  const handlePersonChange = (event) => {
    setPersonInputValue(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessageInputValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Chat</h1>
      <div className={styles.chatBox}>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              {message.person} wrote: {message.message}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <InputGroup
          id="person"
          type="text"
          label="Person"
          handleChange={handlePersonChange}
          inputValue={personInputValue}
        />
        <InputGroup
          id="message"
          type="text"
          label="Message"
          handleChange={handleMessageChange}
          inputValue={messageInputValue}
        />
        {/* Napis send jest specjalnym propsem children */}
        <Button btnType="submit">
          <i>&#9829;</i>
          &nbsp; Send
        </Button>
      </form>
    </div>
  );
}

export default App;
