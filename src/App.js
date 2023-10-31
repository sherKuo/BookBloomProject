import React from 'react';
import './App.css';
import Timer from './components/Timer';
import PomTimer from './components/PomTimer.js';
import Settings from './components/Settings.js';
import SettingsContext from './components/SettingsContext';
import { useState } from 'react';

// const [title, setTitle] = useState( {bookTitle: ""})

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    // <div className="App">
    //   {/* Display book title put {title} below */}
    //   {/* <h1>Book Title</h1> */}
    //   {/* <Timer /> */}

    // </div>

    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <PomTimer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
