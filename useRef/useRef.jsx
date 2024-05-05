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
// import SearchBar from "./SearchBar"

const UseStateBasics = () => {
 
  const inputRef = useRef() 

  useEffect(()=> { 
    inputRef.current.focus()
  }, [])

  return ( 
    <> 
    <input ref={inputRef} type="text" />
    </>
  )
  

};


export default UseStateBasics;
