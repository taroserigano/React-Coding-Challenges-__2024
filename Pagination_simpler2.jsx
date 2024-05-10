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

import itemsData from "./items.json"

import { ThemeProvider, useTheme } from '../../../ThemeContext';

const UseStateBasics = ({        
  apiUrl="https://jsonplaceholder.typicode.com/posts",
  itemsPerPage=10 }) => {
  
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}?_page=${currentPage}&_limit=${itemsPerPage}`

        );

        const posts = await axios.get(apiUrl) 
        const postsLength = posts.data
        console.log(postsLength, postsLength.length)
        // Assuming the API responds with JSON data
        const jsonData = await response.data;
        setData(response.data);
       
        const totalCount = jsonData.length
        setTotalPages(Math.ceil( postsLength.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li> // Assuming 'name' is the property to display
        ))}
      </ol>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
  
  




export default UseStateBasics;
