import React from 'react';
import mainvideo from '../../videos/mainvideo.mp4';

export const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <video
          src={mainvideo}
          className='worship-video'
          loop
          autoPlay
          controls
          muted
        ></video>
      </div>
    </div>
  );
};
