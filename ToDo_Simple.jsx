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

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const handleAddTask = () => { 

    setTasks([...tasks, text]) 
    setText("")
  }

  const handleRemove = (id) => { 
    const newTasks = tasks.filter((task, idx)=> id !== idx) 
    setTasks(newTasks)
  }

  return ( 
    <> 
    <input 
    value={text} 
    onChange={(e)=> setText(e.target.value)} 
    type="text"
    /> 
<button onClick={handleAddTask}>Add</button>

    {tasks.map((task, idx)=> {
      return (
        <div key={idx}>
    {task}
    <button onClick={()=> handleRemove(idx)}>remove</button>
    </div>
      )
   }   )}
    
    </>
  )

}
export default UseStateBasics;
