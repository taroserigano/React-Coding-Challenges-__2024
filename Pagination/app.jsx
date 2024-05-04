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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPge, SetPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, [])

  // very last page would be "page 10" 
  const lastPageNumber = currentPage * postsPerPge;
  // first page is of course "page 1"
  const firstPageNumber = lastPageNumber - postsPerPge;

  const currentPosts = posts.slice(firstPageNumber, lastPageNumber);

  const lastPage = posts.length / postsPerPge

  console.log(lastPage, lastPageNumber)

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handlePrev = () => { 
    if(currentPage > 1 && currentPage <= lastPage) 
      setCurrentPage(currentPage-1) 
    else if(currentPage === 1){
      setCurrentPage(lastPage)
    }
  }

  const handleNext = () => { 
    if(currentPage >= 1 && currentPage < lastPage) 
      setCurrentPage(currentPage+1) 
    else if(currentPage === lastPage){
      setCurrentPage(1)
    }
  }



  return (
    <div className='container'>
      <Posts posts={currentPosts} loading={loading} />

      <Pagination 
      
      length={posts.length} 
      postsPerPage={postsPerPge} 
      handlePagination={handlePagination} 

      currentPage={currentPage} 
      handlePrev={handlePrev}
      handleNext={handleNext}

      />
    </div>
  )
}



export default UseStateBasics;
