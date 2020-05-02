import React, { useState } from 'react';
import axios from 'axios';

export const ContactForm = () => {
  const [userFullName, setUserFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      userFullName,
      userEmail,
      userMessage,
    };

    try {
      await axios.post('/send-email', newContact);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className='contact-form' onSubmit={onSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          className='user-fullname'
          value={userFullName}
          onChange={(e) => {
            setUserFullName(e.target.value);
          }}
        />
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          className='user-email'
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <label htmlFor='message'>Message: </label>
        <textarea
          name=''
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        ></textarea>
        <input type='submit' value='SEND' className='submit-button' />
      </form>
    </div>
  );
};
