import React from 'react';
import spinner from './spinner.gif';

export const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={spinner} alt='spinner' className='spinner' />
    </div>
  );
};
