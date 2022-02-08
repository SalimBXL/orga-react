import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API_CONSTANT } from "./helpers/helpers";
import SpinWheel from "./helpers/SpinWheel";
import TimeOutExceededWarning from "./helpers/TimeOutExceededWarning";
import Routing from "./Routing";
import Navbar from "./Navbar";
import './App.css';

function App() {
  const [fetchingData, setFetchingData] = useState(false);
  const [serverIsAlive, setServerIsAlive] = useState(false);
  const [errors, setErrors] = useState();

  async function getData() {    
    setFetchingData(true);
    const api_url = API_CONSTANT.BASE_URL + "/ping";
    try {
      await axios({
        method: 'get',
        url: api_url,
        params: {},
        timeout: API_CONSTANT.TIMEOUT
      });
    } catch (err) {
      setServerIsAlive(false);
      setFetchingData(false);
      setErrors(err.message);
      return err;
    }
    setServerIsAlive(true);
    setFetchingData(false);
  }

  useEffect(() => {
      getData();
  }, []);


  


  return (
    fetchingData 
      ? <SpinWheel what="/ Contacting server" />
      : !serverIsAlive
        ? <TimeOutExceededWarning errors={errors}/>
        : <div className="App">
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
