import React, { useState, useEffect } from 'react';

export const EmailSuccess = () => {
  const [message, setMessage] = useState('Your email has been sent.');

  useEffect(() => {
    let timer = setTimeout(() => setMessage(''), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='notification'>
      <p className='highlight-green'>{message}</p>
    </div>
  );
};
