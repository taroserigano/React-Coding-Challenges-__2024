import { useState } from "react";

const useArray = (initialState) => {
  const [array, setArray] = useState(initialState);

  const addItem = (item) => {
    setArray([...array, item]);
  };

  const removeItem = (index) => {
    setArray(array.filter((_, i) => i !== index));
  };

  const updateItem = (index, newItem) => {
    setArray(array.map((item, i) => (i === index ? newItem : item)));
  };

  const clearArray = () => {
    setArray([]);
  };

  return { array, removeItem, updateItem, addItem, clearArray };
};

export default useArray;
