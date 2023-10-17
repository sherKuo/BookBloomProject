import React from 'react';
import './App.css';
import './components/Timer.css'
import Timer from './components/Timer';

// const [title, setTitle] = useState( {bookTitle: ""})


function App() {
  return (
    <div className="App">
      {/* Display book title put {title} below */}
      <h1>Book Title</h1>
      <Timer />
      
    </div>
  );
}

export default App;
