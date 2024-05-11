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

  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debounceTimeoutRef = useRef(null);

  const debouncedSearch = () => { 
        // This useEffect hook will run whenever inputValue changes.
    // It clears the previous debounce timeout and sets a new one.
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout to fetch search results after 500 milliseconds.
    debounceTimeoutRef.current = setTimeout(() => {
        fetchSearchResults(inputValue);
      
    }, 100);

    // Clean up the timeout when the component unmounts or when inputValue changes.
    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }

  useEffect(() => {
    debouncedSearch()
  }, [inputValue]);

  const fetchSearchResults = async (query) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await response.json();
      // const searchedData = data.map((post)=> { 
      //   return post.title.toLowerCase().includes(inputValue.toLowerCase())
      // })
      const filtered = data.filter(post => post.title.toLowerCase().includes(inputValue.toLowerCase()))
      console.log(filtered)

      setSearchResults(filtered);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search posts..."
      />
      <ul>
        {searchResults.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

  




export default UseStateBasics;
