import React, { useState, useEffect } from 'react';

export const Countdown = () => {
  let dayOfEvent = new Date('May 09, 2020 19:00:00').getTime();

  const startTime = new Date('May 09, 2020 19:00:00').getTime();
  const endTime = new Date('May 09, 2020 22:00:00').getTime();

  const currentTime = new Date();

  //   const [dayOfEvent, sayDayOfEvent] = useState()
  const [days, setDays] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [seconds, setSeconds] = useState(undefined);
  const [isTimePassed, setIsTimePassed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date().getTime();

      let distance = dayOfEvent - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsTimePassed(true);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  }, []);

  if (currentTime >= startTime && currentTime <= endTime) {
    return (
      <div className='countdown-button'>
        <a href='' className='join-us-button'>
          JOIN US
        </a>
      </div>
    );
  } else {
    return (
      <div className='countdown'>
        <p>
          {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
        </p>
      </div>
    );
  }
};
