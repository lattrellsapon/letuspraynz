import React from 'react';
import { Link } from 'react-router-dom';

import { PrayerIntentions } from '../prayerIntentions/PrayerIntentions';
import { AddPrayerIntention } from '../forms/AddPrayerIntention';

export const PrayerIntentionsPage = () => {
  return (
    <div className='min-height'>
      <div className='prayer-intentions-header text-center'>
        <h1>Prayer Intentions</h1>
        <p>
          We encourage you to post any personal prayers so that visitors of this
          website can also pray for you.
        </p>
        <p>
          You can submit entries as anonymous or you can{' '}
          <Link to='/contact' className='highlight-green'>
            send us
          </Link>{' '}
          your personal prayers.
        </p>
      </div>
      <AddPrayerIntention />
      <PrayerIntentions />
    </div>
  );
};
