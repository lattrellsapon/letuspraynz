import React from 'react';
import { Link } from 'react-router-dom';

import worship from '../../videos/worship.mp4';

export const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <video
          src={worship}
          className='worship-video'
          loop
          autoPlay
          muted
        ></video>
        <div className='home-message text-center'>
          <h1 className='event-name'>LET US PRAY</h1>
          <h3 className='online-worship'>ONLINE WORSHIP</h3>
          <h3>SATURDAY MAY 09 2020</h3>
          <h3>07:00 PM</h3>
          <h3 className='join-us'>
            <Link className='join-us-button' to='/'>
              JOIN US
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
