import React, {useState, useEffect, useRef} from 'react' 
import { data} from "../../../data" 
const url = "https://api.github.com/users" 

import axios from "axios"

import Note from "./Note" 
import CreateArea from "./CreateArea" 
import LoginForm from './LoginForm';

import "./style.css";

import Posts from './components/Posts';
import Pagination from './components/Pagination';
import useFocus from  "./components/useFocus"
import useToggle from "./components/useToggle"
import useTimeout from "./components/useTimeout"
// import SearchBar from "./SearchBar"

const UseStateBasics = () => {
  const [time, setTime] = useState(0) 
  const [isRunning, setIsRunning] = useState(false) 

  useEffect(()=> { 

    let timerId 
    
    if(isRunning){ 
      timerId = setInterval(()=> { 
        setTime(prev => prev+1) 
      }, 10) 

    }
    // else if(!isRunning ){
    //   clearInterval(timerId) 
    // } 

    return () => clearInterval(timerId)

  }, [isRunning]) 

  const handleStart = () => { 
    setIsRunning(true) 
  }
 
  const handleStop = () => { 
    setIsRunning(false) 
  }

  const toggle = () => { 
    setIsRunning(prev => !prev)
  }
  
  const handleReset = () => { 
    setTime(0)
  }

  return ( 
    <div> 
      <p>{time}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={toggle}>{isRunning? "Stop" : "Start"}</button>
      <button onClick={handleReset}>reset</button>

    </div>
  )

};


export default UseStateBasics;
