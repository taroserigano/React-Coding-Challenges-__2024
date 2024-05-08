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
  const [data,setData] = useState([])
  const [search, setSearch] = useState("")

  const url = "https://jsonplaceholder.typicode.com/users" 

  const filteredUsers = data.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase())
  )
  
  const handleAscendingSort= () => { 

    const users = [...data].sort((a,b)=> 
    {
      return (a.name > b.name ? 1 : -1)
    }
    )
    
    setData(users)
  }

  const handleDescending = () => { 

    const users = [...data].sort((a,b)=> 
      (a.name > b.name ? -1 : 1)
    
  )
    setData(users)
  }

  useEffect(()=> { 
    const fetchData = async()=> { 
      try{      
        const res = await axios.get(url) 
        console.log(res.data)
        setData(res.data)  
      } catch(err){ 
        console.log(err)
      } 
    }

      fetchData()
      console.log(data)
      console.log("hi")

    
  }, []) 


  return ( 
    <> 
    <h1>Hi</h1> 
    <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
    {search}
    <><p>
    <button onClick={handleAscendingSort}>Ascdeing</button>
    <button onClick={handleDescending}>Decdeing</button>

    </p>
</>
    {filteredUsers.map((d, idx)=> { 
      return (
        <p key={idx}>{d.id} {d.name} {d.email.split("@")[0]} </p>
      )
    })}
    </>
  )
  


};


export default UseStateBasics;
