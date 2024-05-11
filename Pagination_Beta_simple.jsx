import React, {useState, useEffect, useRef} from 'react' 
import { data} from "../../../data" 
const url = "https://api.github.com/users" 

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

const UseStateBasics = () => {
  
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const lastPostsIndex = currentPage * postsPerPage;
  
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(lastPostsIndex - postsPerPage, lastPostsIndex);


  let pageNumbers = [] 
  for(let i=1; i <= Math.ceil(posts.length / postsPerPage); i++){ 
    pageNumbers.push(i)
  } 

  return (
    <div>
      <h1>Pagination</h1>
      <ul>
        {currentPosts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      <nav>
        <ul>
          {pageNumbers.map((_, index) => (
              <button key={index} onClick={() => setCurrentPage(index + 1)} className="page-link">
                {index + 1}
              </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};  
  




export default UseStateBasics;
