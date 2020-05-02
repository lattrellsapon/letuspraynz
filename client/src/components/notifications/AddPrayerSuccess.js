import React, { useState, useEffect } from 'react';

export const AddPrayerSuccess = () => {
  const [message, setMessage] = useState('Your prayer has been added.');

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
