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
  const [width,setWidth] = useState(0)

  return ( 
    <> 
    <input type="number" onChange={(e)=>setWidth(e.target.value)} />
    
    <div className="container"
    style={{ width: `100%`, color: "green", backgroundColor: "green", borderRadius: "20px",}}>

    <div className="container"
    style={{ width: `${width}%`, color: "red", backgroundColor: "red", borderRadius: "20px",}}>
    {width} %
    </div>


    </div>
    </>
  )
  

};


export default UseStateBasics;
