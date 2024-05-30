import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

import LoginForm from "./LoginForm";

import "./style.css";

import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import useFocus from "./components/useFocus";
import useToggle from "./components/useToggle";
import useTimeout from "./components/useTimeout";
import useArray from "./components/useArray";
import itemsData from "./items.json";

const url = "https://jsonplaceholder.typicode.com/posts";

const UseStateBasics = () => {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const run = () => {
    ref.current = setInterval(() => {
      setCount(count + 1);
    }, 100);
  };

  useEffect(() => {
    run();

    return () => clearInterval(ref.current);
  }, [count]);

  return (
    <>
      <h4>time</h4>
      <p>{count}</p>
      <button onClick={() => clearInterval(ref.current)}>stop</button>
      <button onClick={run}>start</button>
    </>
  );
};

export default UseStateBasics;
