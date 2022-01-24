import React from 'react';
import Routing from "./Routing";
import Navbar from "./Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <div className='container'>
        <Routing />
      </div>

      <footer className="footer">
        <small>(c) 2022 Salim A. JOLY - PET Scan ULB Erasme</small>
      </footer>
    </div>
  );
}

export default App;
