import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton.js';
import PauseButton from './PauseButton.js';
import SettingsButton from './SettingsButton.js';

const crystal = '#A9D8DE';
const gold = '#F2C464';
const blue = '#3576AE';

function PomTimer() {
  return (
    <div>
      <CircularProgressbar
        value={66}
        text={'66%'}
        styles={buildStyles({
          textColor: blue,
          pathColor: gold,
          trailColor: crystal,
        })}
      />
      <div style={{ marginTop: '20px' }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsButton />
      </div>
    </div>
  );
}

export default PomTimer;

// styles={buildStyles({
//   textColor: blue,
//   pathColor: crystal,
//   trailColor: gold
// })}
