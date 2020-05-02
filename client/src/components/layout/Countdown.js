import React, { useState, useEffect } from 'react';

export const Countdown = () => {
  let dayOfEvent = new Date('May 09, 2020').getTime();

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

  return (
    <div className='countdown-container '>
      <div className='countdownitem'>
        <p>{days}</p>
      </div>
      <div className='countdownitem'>
        <p>{hours}</p>
      </div>
      <div className='countdownitem'>
        <p>{minutes}</p>
      </div>
      <div className='countdownitem'>
        <p>{seconds}</p>
      </div>
      <div className='countdownitem'>
        <p>DAYS</p>
      </div>
      <div className='countdownitem'>
        <p>HOURS</p>
      </div>
      <div className='countdownitem'>
        <p>MINUTES</p>
      </div>
      <div className='countdownitem'>
        <p>SECONDS</p>
      </div>
    </div>
  );
};
