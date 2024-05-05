
import { useEffect, useRef } from 'react';

const useFocus = () => { 

    const ref = useRef(null) 

    useEffect(()=>{ 
        ref.current.focus() 
    }, []) 

    return ref 

}

export default useFocus
