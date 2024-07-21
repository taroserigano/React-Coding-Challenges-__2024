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
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [editingID, setEditingID] = useState(null);

  // write all usestates for pagination
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  let firstPage = page - 1;

  let lastPage = page * postsPerPage;

  console.log(firstPage, lastPage); // 0 10

  const currentPosts = posts.slice(firstPage, lastPage);

  const lastPost = posts.length / postsPerPage;

  const handleSelect = (pageNumber) => {
    setPage(pageNumber);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(lastPost);
    }
  };

  const handleNext = () => {
    if (page < lastPost) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  // fix any possible error of below code

  return (
    <>
      <Pagination
        length={posts.length}
        page={page}
        postsPerPage={postsPerPage}
        select={handleSelect}
        next={handleNext}
        prev={handlePrev}
      />
      <Posts posts={currentPosts} loading={loading} />
    </>
  );
};

export default UseStateBasics;
