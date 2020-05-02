import React, { useState, useContext } from 'react';
import { EmailSuccess } from '../notifications/EmailSuccess';
import { GlobalContext } from '../../context/GlobalState';

export const ContactForm = () => {
  const [userFullName, setUserFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const { sendEmail, isEmailSent } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      userFullName,
      userEmail,
      userMessage,
    };

    sendEmail(newContact);
    setUserFullName('');
    setUserEmail('');
    setUserMessage('');
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
          className='user-message-textarea'
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        ></textarea>
        <input type='submit' value='SEND' className='submit-button' />
      </form>
      <div className='user-message'>{isEmailSent ? <EmailSuccess /> : ''}</div>
    </div>
  );
};
