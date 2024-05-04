import React, {useState, useEffect} from 'react' 
import { data} from "../../../data" 
const url = "https://api.github.com/users" 

import axios from "axios"

import Note from "./Note" 
import CreateArea from "./CreateArea" 
import LoginForm from './LoginForm';

// import SearchBar from "./SearchBar"

const UseStateBasics = () => {

  const[text,setText] = useState("")
  
  const [error,setError] =useState(false) 
  
  const [data, setData] = useState([]) 
  const [debouncedVal, setDebouncedVal] = useState("") 

  const questions = [
    {
      text: 'What is the capital of France?',
      options: [
        { text: 'London', isCorrect: false },
        { text: 'Paris', isCorrect: true },
        { text: 'Berlin', isCorrect: false },
        { text: 'Madrid', isCorrect: false },
      ],
    },
    {
      text: 'What is 2 + 2?',
      options: [
        { text: '4', isCorrect: true },
        { text: '5', isCorrect: false },
        { text: '6', isCorrect: false },
        { text: '7', isCorrect: false },
      ],
    },
    {
      text: 'Who is the CEO of Tesla Motors?',
      options: [
        { text: 'Bill Gates', isCorrect: false },
        { text: 'Steve Jobs', isCorrect: false },
        { text: 'Elon Musk', isCorrect: true },
        { text: 'Mark Zuckerberg', isCorrect: false },
      ],
    },
  ];

  const[cur,setCur] =useState(0) 
  const[score, setScore]=useState(0) 
  const[show, setShow]=useState(false) 

  const reset = () => { 
    setCur(0)
    setScore(0) 
    setShow(false) 
  } 

  const handleSelect = (isCorrect)=> { 
    if(isCorrect) setScore(score+1)

      // const nextIdx = cur+1 

      // if(nextIdx < questions.length){ 
      //   setCur(nextIdx)
      // }

      cur+1 < questions.length ? setCur(cur+1) : setShow(true)

  }

  return ( 
    <> 
    {show ? (
      <><p>hi</p>
      <p>Your score is {score} out of {questions.length}</p>

      </>
    ) :
     (<>
     <p>answer</p>
      {questions[cur].options.map((q, idx)=> (
        <button key={idx} onClick={handleSelect}>{q.text}</button>
      
      ))
    }
     </>
     )}
    
    </>
  )

  

};


export default UseStateBasics;
