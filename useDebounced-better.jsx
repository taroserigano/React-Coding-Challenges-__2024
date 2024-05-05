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

const useDebounce = (value, delay) => { 
  const[debouncedValue, setDebouncedValue] = useState(value) 

  useEffect(()=> { 

    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay) 

    return () => clearTimeout(timeoutId) 

  }, [value, delay]) 

  return debouncedValue
  
}

const UseStateBasics = () => {
  const [value, setValue] = useState("")
  const debouncedValue = useDebounce(value, 1000) 
  
  

  return ( 
    <div> 
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} /> 
      <p>Debounced : {debouncedValue}</p>
      
    </div>
  )

};


export default UseStateBasics;
