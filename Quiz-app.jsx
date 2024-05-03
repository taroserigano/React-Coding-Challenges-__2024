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
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
      ],
    },
    {
      questionText: 'What is 2 + 2?',
      answerOptions: [
        { answerText: '4', isCorrect: true },
        { answerText: '5', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the CEO of Tesla Motors?',
      answerOptions: [
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Steve Jobs', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Mark Zuckerberg', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='quiz-app'>
      
      {/* show score?  */}
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (

        // show quiz 
        <>
          <div className='question-section'>
            <div className='question-count'>
              Question {currentQuestion + 1} / {questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => 
                handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
</div>
  ) 
  

};


export default UseStateBasics;
