import React from 'react';
import './App.css';
import Timer from './components/Timer';
import PomTimer from './components/PomTimer.js';
import Settings from './components/Settings.js';
import { useState } from 'react';

// const [title, setTitle] = useState( {bookTitle: ""})

function App() {
  const [showSettings, setShowSettings] = useState(true);

  return (
    // <div className="App">
    //   {/* Display book title put {title} below */}
    //   {/* <h1>Book Title</h1> */}
    //   {/* <Timer /> */}

    // </div>

    <main>{showSettings ? <Settings /> : <PomTimer />}</main>
  );
}

export default App;
