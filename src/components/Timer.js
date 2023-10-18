import React from 'react';
import {useState, useEffect} from 'react';
import './Timer.css';

const Timer = () => {
   
    // Seting the timer values
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "October, 25, 2023";

    const getTimeRemaining = () => {
        const time = Date.parse(deadline)-Date.now();
        setSeconds((Math.floor(time/1000) % 60).toString().padStart(2, '0'));
        setMinutes((Math.floor(time/(1000*60) % 60)).toString().padStart(2, '0'));
        setHours(Math.floor((time/(1000*60*60)) % 24).toString().padStart(2, '0'))
        setDays((Math.floor(time/(1000*60*60*24))).toString().padStart(2, '0'))
        
    };

    useEffect(() => {
        const interval = setInterval(() => getTimeRemaining(deadline), 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
    <div className="timer-wrap">
      <div id="timer" className="timer">{hours}:{minutes}:{seconds}</div>
      <div>{days}<span> Days</span></div>
      <div id="buttons">
        <button className="start-pause" id="start">Start</button>
        <button className='reset' id='reset'>Reset</button>
      </div>
      
    </div>
    </>
  )
}

export default Timer