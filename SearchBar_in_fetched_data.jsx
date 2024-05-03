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

  useEffect(()=>{ 
    const fetchData = async() => { 
      const res = await axios.get("https://jsonplaceholder.typicode.com/users") 
      setData(res.data) 
    }
    fetchData()
    console.log(data)
  },[]) 

 // useEffect(()=> { 
    const newData = data.filter((d) => d.name.toLowerCase().includes(text.toLowerCase()))
  //   setData(newData)
  // }, [text])

  return ( 
<>

<input type="text" value={text} onChange={(e)=>setText(e.target.value)} />



{data && newData.map((u)=> { 
  return<div key={u.id}>
  <p>{u.name}</p>
  </div>
})}
</>


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
