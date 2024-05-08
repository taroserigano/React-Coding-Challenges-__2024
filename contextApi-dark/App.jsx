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

import { ThemeProvider, useTheme } from '../../../ThemeContext';

const UseStateBasics = ({toggleTheme}) => {
  

  return (
    <div >
<h1>hi</h1>
<button onClick={toggleTheme}>
         toggle
        </button>
    </div>
  );
}


export default UseStateBasics;
