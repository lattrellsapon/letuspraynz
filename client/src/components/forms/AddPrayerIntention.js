import React, { useContext, useState } from 'react';

import { AddPrayerSuccess } from '../notifications/AddPrayerSuccess';
import { Error } from '../notifications/Error';

import { GlobalContext } from '../../context/GlobalState';

export const AddPrayerIntention = () => {
  const [name, setName] = useState('Anonymous');
  const [prayerIntention, setPrayerIntention] = useState('');

  const { addPrayer, isPrayerAdded, error } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newPrayer = {
      name,
      prayerIntention,
    };

    addPrayer(newPrayer);
    setName('Anonymous');
    setPrayerIntention('');
  };

  return (
    <div className='form-container text-center add-prayer-form'>
      <form className='prayer' onSubmit={onSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          className='username'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor='prayer-intention'>Prayer Intention: </label>
        <textarea
          required
          name=''
          value={prayerIntention}
          onChange={(e) => {
            setPrayerIntention(e.target.value);
          }}
        ></textarea>
        <input type='submit' className='add-button' value='ADD' />
      </form>
      <div className='user-message'>
        {isPrayerAdded ? <AddPrayerSuccess /> : ''}
        {error !== null ? <Error /> : ''}
      </div>
    </div>
  );
};
