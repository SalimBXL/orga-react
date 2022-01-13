import React from 'react';
import Routing from "./Routing";
import Navbar from "./Navbar";import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routing />
      </div>
    </div>
  );
}

export default App;
