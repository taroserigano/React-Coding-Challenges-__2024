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

  const [search, setSearch] = useState("") 
  const [data, setData] = useState([]) 

  const ref = useRef(null)

  const searchData = async() => { 

    try{ 
      const response = await axios.get(url) 
      const res = await response.data 
      
      const filtered = res.filter( r => r.title.toLowerCase().includes(search.toLowerCase())) 
      console.log(filtered)

      setData(filtered)

    } catch(err) { 
      console.log(err)
    } 
  } 

  const debounced = () => { 

    if(ref.current){
      clearTimeout(ref.current) 
    } 

    ref.current = setTimeout(() => {
      searchData() 
    }, 500); 

    return ()=> clearTimeout(ref.current)

  }

  useEffect(() => { 
    debounced()
  },[search]) 

  return (
    <> 
    <input 
    type="text"
    value={search} 
    onChange={e => setSearch(e.target.value)}
    /> 

    {data.map((d, idx)=> 
      <p key={idx}>{d.title}</p>
    )}
    </>
  )


};

  




export default UseStateBasics;
