import React, {useState, useEffect, useRef} from 'react' 
import { data} from "../../../data" 
// const url = "https://api.github.com/users" 

import axios from "axios"

import Note from "./components/Note" 
import LoginForm from './LoginForm';

import "./style.css";

import Posts from './components/Posts';
import Pagination from './components/Pagination';
import useFocus from  "./components/useFocus"
import useToggle from "./components/useToggle"
import useTimeout from "./components/useTimeout"
// import SearchBar from "./SearchBar"

import itemsData from "./items.json"
const url = "https://jsonplaceholder.typicode.com/posts"


const UseStateBasics = () => {

  const [time,setTime] = useState(0)
  const [counting, setCounting] = useState(false)
  
  const ref = useRef(null) 

  useEffect(()=> { 

    if(counting){
    ref.current = setInterval(()=> { 
      setTime(prev => prev+1)
    }, 100)

    return ()=> clearInterval(ref.current)
  }
    
  }, [counting])

  return ( 
    <> 
    
    <p>{time}</p>
    <> 
    <button onClick={()=>setCounting(!counting)}>START</button>

    {counting ? (
    <button onClick={()=>setCounting(!counting)}>STOP</button>

    ) : (
      <button onClick={()=>setCounting(!counting)}>START</button>

    ) }
    </>
    </>
  )
  




  
};  
  




export default UseStateBasics;
