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

  const fetchData = async(text) => { 
    const res = await axios.get(`https://api.datamuse.com/words?rel_syn=${text}`)  
console.log(res.data)
    setData(res.data) 
    console.log(data, res)
  }


  const useDebounce = (value, delay) => { 

    useEffect(()=> { 
      const timer = setTimeout(()=> { 
        setDebouncedVal(value) 
      }, delay) 

      return ()=> { 
        clearTimeout(timer)
      }
    }, [value, delay])

    return debouncedVal
  }
  
  const debouncedSearch = useDebounce(text, 500)

  useEffect(()=> { 

    fetchData(debouncedSearch)
  }, [debouncedSearch])


  return ( <> 

  <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
  
  {data.map((d, idx) => { 
    return ( 
      <div key={idx}>
      <p>{d.word}</p>
      </div>
    )
  })}
  
  </>)


 
  

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
