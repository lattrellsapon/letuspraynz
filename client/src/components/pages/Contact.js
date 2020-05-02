import React from 'react';

import { ContactForm } from '../forms/ContactForm';

export const Contact = () => {
  return (
    <div className='min-height'>
      <div className='contact-header text-center'>
        <h1>Contact Us</h1>
        <p>Do you have any questions?</p>
        <p>Do you want to send us your personal prayers?</p>
        <p>Get in touch below.</p>
      </div>
      <ContactForm />
    </div>
  );
};
