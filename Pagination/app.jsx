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

const UseStateBasics = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  const url = "https://jsonplaceholder.typicode.com/posts"

  useEffect(()=> { 

    const fetchData = async() => { 
    setLoading(true)
      try{
      const res = await axios.get(url) 
      setPosts(res.data) 
      setLoading(false)

      } catch(err) { 
        console.log(err)
    }
    }
    fetchData()
    console.log(posts)
  }, [])

  let lastPage  = page * postsPerPage
  let firstPage = lastPage - postsPerPage

  console.log(firstPage, lastPage)

  const currentPosts = posts.slice(firstPage, lastPage) 

  const lastPost = posts.length / postsPerPage 

  const handleSelect = (pageNum) => { 
    setPage(pageNum) 
  }  

  const handlePrev = () => { 
    if(page > 1 && page <= lastPage) { 
      setPage(page-1) 
    } else if(page === 1){ 
      setPage(lastPage)
    }
  }

  const handleNext = () => { 
    console.log(page)
    if(page >= 1 && page < lastPost){
      setPage(page+1)
    } else if(page === lastPost){ 
      setPage(1)
    }
  } 

  return ( 
    <> 
    
     <Posts posts={currentPosts} loading={loading} />
    
    <Pagination 
      length = {posts.length} 
      page={page} 
      postsPerPage={postsPerPage}

      handleSelect={handleSelect} 
      handlePrev={handlePrev} 
      handleNext={handleNext}
    />
    </>
  )




  




}



export default UseStateBasics;
