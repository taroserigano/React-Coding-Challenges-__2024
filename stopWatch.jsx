import React, {useState, useEffect} from 'react' 
import { data} from "../../../data" 
const url = "https://api.github.com/users" 

import axios from "axios"

import Note from "./Note" 
import CreateArea from "./CreateArea" 
import LoginForm from './LoginForm';

import "./style.css";

import Posts from './components/Posts';
import Pagination from './components/Pagination';
// import SearchBar from "./SearchBar"

const UseStateBasics = () => {

  const [time, setTime] = useState(0) 
  const [isRunning, setIsRunning] = useState(false) 

  useEffect(() => { 
    let intervalId 

    if(isRunning){ 
      intervalId = setInterval(()=> { 
        setTime(prev => prev+1)
      }, 10) 
    } 

    return ()=> clearInterval(intervalId)
    
  }, [isRunning]) 

  const hours = Math.floor(time / 360000)
  const minutes = Math.floor((time % 360000) / 6000) 
  const seconds = Math.floor((time % 6000) / 100) 
  const milliseconds = time % 100 

  const startAndStop = () => { 
    setIsRunning((prev)=> !prev) 
  } 

  const reset = () => { 
    setTime(0) 
  }

  return ( 
    <> 
    <p>
    {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
    </p>
    <div> 
      <button onClick={startAndStop}> 
      {isRunning ? "Stop" : "Start"} 
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
    
    </>
  )



};


export default UseStateBasics;
