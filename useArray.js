
import { useState } from 'react';

function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  // Add an item to the array
  const addItem = (item) => {
    setArray([...array, item]);
  };

  // Remove an item from the array
  const removeItem = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  // Clear the array
  const clearArray = () => {
    setArray([]);
  };

  // Get the length of the array
  const length = array.length;

  // Get an item from the array by index
  const getItem = (index) => {
    return array[index];
  };

  return {
    array,
    addItem,
    removeItem,
    clearArray,
    length,
    getItem,
  };
}

// Example usage:
// const { array, addItem, removeItem, clearArray, length, getItem } = useArray([1, 2, 3]);

export default useArray;
