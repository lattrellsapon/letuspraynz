import React from 'react';
import prayimg from '../../images/letuspray2.png';

export const PrayerIntentionItem = ({ prayerIntentionItem }) => {
  return (
    <div className='prayer-item'>
      <div className='right'>
        <img src={prayimg} alt='prayforuslogo' className='logo' />
      </div>
      <div className='prayer-item-content'>
        <h3>{prayerIntentionItem.name}</h3>
        <p>{prayerIntentionItem.prayerIntention}</p>
      </div>
    </div>
  );
};
