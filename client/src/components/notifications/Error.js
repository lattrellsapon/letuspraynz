import React, { useContext, useState, useEffect } from 'react';

import { GlobalContext } from '../../context/GlobalState';

export const Error = () => {
  const { error } = useContext(GlobalContext);
  const [message, setMessage] = useState(`${error}. Please try again later.`);

  useEffect(() => {
    let timer = setTimeout(() => setMessage(''), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='notification'>
      <p className='danger'>{message}</p>
    </div>
  );
};
