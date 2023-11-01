import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton.js';
import PauseButton from './PauseButton.js';
import SettingsButton from './SettingsButton.js';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext.js';

const white = 'rgba(256,256,256)'
const crystal = '#A9D8DE';
const gold = '#F2C464';
const blue = '#3576AE';

function PomTimer() {
  // used to switch between timer and settings page
  const settingsInfo = useContext(SettingsContext);

  //used to operate timer
  const [isPause, setIsPaused] = useState(false);
  const [mode, setMode] = useState('work'); //work break or null (pause)
  const [seconds, setSeconds] = useState(0);

  //References for the following (otherwise it will keep updating from the initial 45 min)
  const secondsRef = useRef(seconds);
  const isPausedRef = useRef(isPause);
  const modeRef = useRef(mode);

  //initialize timer function
  function initTimer() {
    setSeconds(settingsInfo.workMinutes * 60);
  }
  // funciton to switch between modes and updating the timer values
  function switchMode() {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    setMode(nextMode);
    modeRef.current = nextMode;

    const nextSeconds =
      nextMode === 'work'
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60;
    setSeconds(nextSeconds);
    secondsRef.current = nextSeconds;
  }

  // function to tick every second
  function tick() {
    secondsRef.current--;
    setSeconds(secondsRef.current);
  }

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === 'work'
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((seconds / totalSeconds) * 100);

  const min = Math.floor(seconds / 60);
  let sec = (seconds % 60).toString().padStart(2, '0');

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={min + ':' + sec}
        styles={buildStyles({
          textColor: white,
          pathColor: mode === 'work' ? blue : gold,
          trailColor: crystal,
      })}
      >
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>66%</strong> mate
        </div>
      </CircularProgressbar>

      <div style={{ marginTop: '20px' }}>
        {isPause ? (
          <PlayButton onClick={() => {setIsPaused(false); isPausedRef.current = false;}} />
        ) : (
          <PauseButton onClick={() => {setIsPaused(true); isPausedRef.current = true;}} />
        )}
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsButton
          onClick={() => settingsInfo.setShowSettings(true)}
        />
      </div>
    </div>
  );
}

export default PomTimer;
