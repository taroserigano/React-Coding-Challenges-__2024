import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Note from "./components/Note";
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

const initialState = {
  userName: "",
  fullName: "",
  age: "",
};

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const ref = useRef(null);

  useEffect(() => {
    if (timeLeft > 0) {
      ref.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 100);
    }

    return () => clearInterval(ref.current);
  }, [timeLeft]);

  const reset = () => {
    setTimeLeft(10);
    setCount(0);
    ref.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 100);
  };

  return (
    <div>
      <h2>{count}</h2>
      <h3>{timeLeft} seconds left</h3>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        disabled={timeLeft === 0}
      >
        +
      </button>
      <button onClick={reset} disabled={timeLeft !== 0}>
        Reset
      </button>
    </div>
  );
};

export default UseStateBasics;
