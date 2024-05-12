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
  const [count, setCount] = React.useState(0)
  const [timeLeft, setTimeLeft] = React.useState(10)

  const id = useRef(null)
  
  useEffect(()=> { 
    id.current = setInterval(()=> { 
      setTimeLeft(prev => prev-1)
    },10)

    return ()=>clearInterval(id.current)

  }, [])

  useEffect(()=> { 
    if(timeLeft === 0){ 
      clearInterval(id.current)
    }
  }, [timeLeft])
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <h3>Time left: {timeLeft} seconds</h3>
      {timeLeft === 0 ? null : 
        <button onClick={() => setCount((c) => c + 1)}>
          +
        </button>}
    </div>
  );
}
export default UseStateBasics;
