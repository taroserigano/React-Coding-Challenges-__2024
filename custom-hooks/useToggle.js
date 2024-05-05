import {useState} from "react" 

const useToggle = (val) => {

    const [value, setValue] = useState(val) 

    const toggle = () => { 
        setValue(prev => 1value) 
    } 

    return [value, toggle]

 }


export default useToggle


// const UseStateBasics = () => {

//   const [value, toggle] = useToggle(false) 

//   return ( 
//     <> 
//     <button onClick={toggle}>Toggle</button> 
//     {value && <p>showing</p>}
//     </>
//   )
  

// };


// export default UseStateBasics;



