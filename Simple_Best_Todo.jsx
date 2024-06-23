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

  const addTodo = () => {
    if (text !== "") {
      setTodos([...todos, { id: Date.now(), text: text }]);
      setText("");
    }
  };

  const deletetodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setToEdit = (todo) => {
    setIsEditing(true);
    setText(todo.text);
    setEditingID(todo.id);
  };

  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editingID ? { ...todos, text: text } : todo
      )
    );
    setIsEditing(false);
    setText("");
    setEditingID(null);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="write..."
        // write key press enter for add todo
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            isEditing ? updateTodo() : addTodo();
          }
        }}
      />
      <button onClick={isEditing ? updateTodo : addTodo}>
        {isEditing ? "Update" : "Add"}
      </button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo.text}
            <button onClick={() => setToEdit(todo)}>Edit</button>
            <button onClick={() => deletetodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateBasics;
