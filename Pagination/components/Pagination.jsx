import React, {useState} from "react"

const Pagination = ({ length, page, postsPerPage, handleSelect, handlePrev, handleNext}) => {  

    let pageNumbers = [] 
    for(let i=1; i <= Math.ceil(length / postsPerPage); i++){ 
        pageNumbers.push(i)
    } 
    console.log(pageNumbers)

    return ( 
        <div className="pagination"> 
        <button onClick={handlePrev}>PREV</button>
        <button onClick={()=>handleSelect(1)}>...</button>

        {pageNumbers.map((post, idx)=> ( 
            <button className={post === page ? "active": ""} 
            onClick={()=>handleSelect(post)}
            >{post}</button>
        ))}
        <button onClick={()=>handleSelect(10)}>...</button>
        <button onClick={handleNext}>NEXT</button>

        </div>
    )

}




export default Pagination;
