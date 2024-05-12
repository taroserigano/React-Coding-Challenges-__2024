import { useState } from 'react';

const useArray = (initialArray) => {

    const [array, setArray] = useState(initialArray) 

    const addItem = (item) => { 
        setArray([...array, item])
    }

    const updateItem = (index, item) => {
        const newArray = [...array] 
        newArray[index] = item 
        setArray(newArray) 
     } 
    const removeItem = (index) => {
        const newArray = [...array] 
        newArray.splice(index, 1) 
        setArray(newArray) 
     }  

    const clearArray = ()=> {
        setArray([])
     }

     return {
        array, removeItem, updateItem, addItem, clearArray
     }
    
};

export default useArray;










// const UseStateBasics = () => {

//   const {array, addItem, removeItem, updateItem, clearArray } = useArray([1,2,3,4])

//   return ( 
//     <> 
//     <>
//     <button onClick={()=> addItem(99)}> Add Item</button>
//     <button onClick={()=> removeItem(0)}> Remove</button>
//     <button onClick={()=> updateItem(0, 777)}> Update</button>
//     <button onClick={clearArray}> Clear</button></>



// {array}
//     </>
//   )
 

// };

  




// export default UseStateBasics;
