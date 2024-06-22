// src/hooks/useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);

        const result = await response.data;
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;


// ------------------------------------------------------------

import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { data } from "../../../data";

import axios from "axios";

import "./style.css";

import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import useFocus from "./components/useFocus";
import useToggle from "./components/useToggle";
import useTimeout from "./components/useTimeout";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";

import useFetch from "./components/useFetch";

import useArray from "./useArray";
// import SearchBar from "./SearchBar"
// const url = "https://jsonplaceholder.typicode.com/users";
const posts = "https://jsonplaceholder.typicode.com/posts";

const url = "https://jsonplaceholder.typicode.com/posts";

const UseStateBasics = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const postsPerPage = 10;

  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n, idx) => idx !== id));
  };

  const { data, loading, error } = useFetch(url);

  if (loading) return <h2>Loading</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <div>
      <h1>React App with Custom useFetch Hook</h1>
      <h2>Fetched Data</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateBasics;


