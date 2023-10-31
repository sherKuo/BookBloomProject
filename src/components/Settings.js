import ReactSlider from 'react-slider';
import './Slider.css';
import SettingsContext from './SettingsContext'
import { useContext } from 'react';
import BackButton from './BackButton';

function Settings() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div style={{ textAlign: 'left' }}>
      <label>work:{settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        value={settingsInfo.workMinutes}
        min={1}
        max={120}
      />

      <label>break:{settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className="slider break"
        thumbClassName="thumb"
        trackClassName="track"
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        value={settingsInfo.breakMinutes}
        min={1}
        max={120}
      />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false) }/>
      </div>
    </div>
  );
}

export default Settings;
