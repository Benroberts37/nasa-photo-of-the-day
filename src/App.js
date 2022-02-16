import React, {useState, useEffect} from "react";
import axios from "axios";

import "./App.css";
import styled from 'styled-components';

import NasaPhoto from './Components/NasaPhoto';

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res =>{
        setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const WrapperDiv = styled.div`
    text-align: center;
    font-family: sans-serif;
    color: green;
  `

  return (
    <WrapperDiv className="App">
       {data && <NasaPhoto photo={data} />}
    </WrapperDiv>
  );
}

export default App;


