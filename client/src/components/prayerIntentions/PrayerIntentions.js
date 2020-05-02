import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PrayerIntentionItem } from './PrayerIntentionItem';
import { GlobalContext } from '../../context/GlobalState';
import { Spinner } from '../layout/Spinner';

export const PrayerIntentions = () => {
  const { prayerIntentions, getPrayers } = useContext(GlobalContext);

  useEffect(() => {
    getPrayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (prayerIntentions.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className='three-grid'>
          {prayerIntentions.slice(0, 9).map((prayerIntentionItem) => (
            <PrayerIntentionItem
              key={prayerIntentionItem._id}
              prayerIntentionItem={prayerIntentionItem}
            />
          ))}
        </div>
        <div className='text-center view-all'>
          {prayerIntentions.length > 9 ? (
            <Link
              to='/all-prayer-intentions'
              className='view-all-prayers-button'
            >
              VIEW ALL PRAYERS ( {prayerIntentions.length} )
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
};
