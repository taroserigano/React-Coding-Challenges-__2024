
import {useState, useEffect, useRef} from "react" 

const useTimeout =(callback,delay) => { 

    const ref = useRef(null) 

    useEffect(()=> { 
        ref.current = callback 
    }, [callback]) 

    useEffect(()=> { 

        let timer = setTimeout(() => { 
            ref.current() 
        }, delay) 

        return  () => clearTimeout(timer)

    }, [delay]) 
 
}

export default useTimeout



// const UseStateBasics = () => {

//   const [search, setSearch] = useState("") 
//   const [data, setData] = useState([]) 
//   const [show, setShow] = useState(false)

//   const display = () => { 
//     setSearch("Helloooo") 
//     setShow(prev => !prev)  
//   } 

//   useTimeout(display, 1000)
  
//   return ( 
//     <> 
//     {show && <p>{search}</p>}
//     </>
//   )






