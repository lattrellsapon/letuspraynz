import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PrayerIntentionItem } from '../prayerIntentions/PrayerIntentionItem';
import { GlobalContext } from '../../context/GlobalState';
import { Spinner } from '../layout/Spinner';

export const AllPrayerIntentions = () => {
  const { prayerIntentions, getPrayers } = useContext(GlobalContext);

  useEffect(() => {
    getPrayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (prayerIntentions.length === 0) {
    return (
      <div className='min-height'>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className='min-height'>
        <div>
          <Link to='/prayer-intentions' className='back-button'>
            <i class='fas fa-chevron-left'></i> BACK
          </Link>
        </div>
        <div className='prayer-intentions-header text-center'>
          <h1>All Prayer Intentions</h1>
          <p>Total: {prayerIntentions.length}</p>
        </div>
        <div className='three-grid'>
          {prayerIntentions.map((prayerIntentionItem) => (
            <PrayerIntentionItem
              key={prayerIntentionItem._id}
              prayerIntentionItem={prayerIntentionItem}
            />
          ))}
        </div>
      </div>
    );
  }
};
