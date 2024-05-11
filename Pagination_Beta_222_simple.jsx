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

  const [currentPage, setCurrentPage] = useState(1) 
  const [posts, setPosts] = useState([])
  const postsPerPage = 10 

  useEffect(() => { 
    const fetchData = async() => { 
      const response = await axios.get(url) 
      setPosts(response.data) 
    }
    fetchData() 
  }, [])

  const lastPageIndex = currentPage * postsPerPage

  const currentPosts = posts.slice(lastPageIndex -10, lastPageIndex)
  
  let totalPages = [] 
  for(let i=1; i <= Math.ceil(posts.length / postsPerPage); i++){
      totalPages.push(i)
  }

  console.log(totalPages)

  return ( 
    <> 
    <ul>
    {currentPosts.map((post, idx)=> { 
        return <li key={idx}>{post.title.substring(0, 50)} {post.title.length > 50 ? "..." : "" }</li>
    })}
    <p>Current Page : {currentPage} </p>
    </ul>
    <button onClick={()=>setCurrentPage(1)} 
        disabled={currentPage === 1} 
        >First</button>
    <button onClick={()=>setCurrentPage(currentPage-1)} 
        disabled={currentPage === 1} 
        >Prev</button>
    {totalPages.map((page, idx) => (
      <button key={idx}
      onClick={() => setCurrentPage(page)}
      >{page}</button>
    ))}
        <button onClick={()=>setCurrentPage(currentPage+1)} 
        disabled={currentPage === 10}
        >Next</button>
            <button onClick={()=>setCurrentPage(posts.length / postsPerPage)} 
        disabled={currentPage === 10} 
        >Last</button>

    </>
  )


};  
  




export default UseStateBasics;
