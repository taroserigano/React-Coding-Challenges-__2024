










import {useState, useEffect, useRef} from "react" 

const useTimeout =(callback, delay) => { 

    const savedCallback = useRef() 

    // update callback 
    useEffect(()=> { 
        savedCallback.current = callback
    }, [callback])

    useEffect(()=> { 
        // const func = () => savedCallback.current() 

        if(delay){ 

            let timeoutId = setTimeout(savedCallback.current, delay) 
            return ()=> clearTimeout(timeoutId)
        }
    }, [delay]) 

}

export default useTimeout






// const UseStateBasics = () => {

//   const [val, setVal] = useState(false) 

//   useTimeout(()=> { 
//     setVal("hello")
//   }, 1000)

//   return ( 
//     <> 
//     {val && <p>Hello</p>}
//     </>
//   )
  

// };


// export default UseStateBasics;




