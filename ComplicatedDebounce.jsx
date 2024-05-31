import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import LoginForm from "./LoginForm";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import useFocus from "./components/useFocus";
import useToggle from "./components/useToggle";
import useTimeout from "./components/useTimeout";
import useArray from "./components/useArray";
import itemsData from "./items.json";

import "./style.css";

const url = "https://jsonplaceholder.typicode.com/posts";

const UseStateBasics = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [term, setTerm] = useState("");
  const ref = useRef(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setFilteredData(response.data); // Set both data and filteredData initially
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchTerm = () => {
    const filtered = data.filter((r) =>
      r.title.toLowerCase().includes(term.toLowerCase())
    );
    console.log(filtered);
    console.log(term);
    setFilteredData(filtered);
  };

  const debounced = () => {
    clearTimeout(ref.current);

    ref.current = setTimeout(() => {
      searchTerm();
    }, 300);
  };

  useEffect(() => {
    if (term) {
      debounced();
    } else {
      setFilteredData(data); // If term is empty, reset filteredData to original data
    }
  }, [term, data]);

  return (
    <>
      <h4>{term}</h4>
      <input
        type="text"
        value={term}
        name="term"
        onChange={(e) => setTerm(e.target.value)}
      />
      {filteredData.map((d) => (
        <div key={d.id}>
          <p>{d.title}</p>
        </div>
      ))}
    </>
  );
};

export default UseStateBasics;
