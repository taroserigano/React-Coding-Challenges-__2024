import { useEffect, useRef, useState } from "react";

function useTimeout(initialTime = 0, delay = 100) {
  const [time, setTime] = useState(initialTime);
  const ref = useRef(null);

  const start = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, delay);
    }
  };

  const stop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return { reset, time, stop, start };
}

export default useTimeout;


// const UseStateBasics = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [term, setTerm] = useState("");
//   const ref = useRef(null);
//   const [search, setSearch] = useState("");
//   const [show, setShow] = useState(false);
//   const [count, setCount] = useState(0);

//   const { reset, start, stop, time } = useTimeout(0, 100);

//   return (
//     <div>
//       <p>Timer: {time} seconds</p>
//       <button onClick={start}>Start Timer</button>
//       <button onClick={stop}>Stop Timer</button>
//       <button onClick={reset}>Reset Timer</button>
//     </div>
//   );
// };

// export default UseStateBasics;
