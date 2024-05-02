import React, {useState, useEffect} from 'react' 
import { data} from "../../../data" 
const url = "https://api.github.com/users" 


import Note from "./Note" 
import CreateArea from "./CreateArea" 
import LoginForm from './LoginForm';

// import SearchBar from "./SearchBar"

const UseStateBasics = () => {

  const [data,setData]=useState([])
  const [term, setTerm] = useState("") 

  // useEffect(()=> { 
    
  //   const fetchData = async() => { 
  //     const res = await fetch(`https://api.datamuse.com/words?rel_syn=${term}`)
  //     const data = await res.json() 

  //     console.log(data)
  //     console.log("hi")

  //     setData(data)
  //   }
  //   fetchData()

  // }, [term])

  const handleSubmit = async(e) => { 
    e.preventDefault() 
    const res = await fetch(`https://api.datamuse.com/words?rel_syn=${term}`)
    const data = await res.json() 

    console.log(data)
    console.log("hi")

    setData(data)
  }
  

  return ( 
    <div> 
       
      <input type="text" name="search" value={term} 
      onChange={(e)=> setTerm(e.target.value)} 
      />
      <button onClick={handleSubmit}>Search</button>
      
      {data.map((d)=> { 
        return (
          <>
          <p>{d.word} {d.score}</p>
          </>
        )
      })}

      </div>
  )

};

// const SearchBar = () => { 



//   return (
//       <> 
//       <input type="text" name="search" value={term} 
//       onChange={(e)=> setTerm(e.target.value)} 
//       />
//       {/* <button onClick={}>search</button> */}
      
//       </>
//   )

// }

export default UseStateBasics;
