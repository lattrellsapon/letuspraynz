import React from 'react';

export const PrayerIntentionItem = ({ prayerIntentionItem }) => {
  return (
    <div className='prayer-item'>
      <h3>{prayerIntentionItem.name}</h3>
      <p>{prayerIntentionItem.prayerIntention}</p>
    </div>
  );
};
