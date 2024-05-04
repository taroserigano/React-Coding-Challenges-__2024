import "./style.css";
import classNames from "classnames";

const Pagination = ({ 
    postsPerPage, length, handlePagination, currentPage,handlePrev, handleNext  }) => {
  let paginationNumber = []
  
  // run for the page number
  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
      paginationNumber.push(i);
  }

  return ( 
      <div className='pagination'>

        <button onClick={handlePrev}>Prev</button>

        <button onClick={()=>handlePagination(1)}>...</button>
          {
              paginationNumber.map((post, idx) => (
                  <button key={idx} 
                  
                  onClick={() => handlePagination(post)} 
                  
                  className={currentPage === post ? 'active' : ''}>
                      {post}
                  </button>
              ))
          }
                  <button onClick={()=>handlePagination(Math.ceil(length / postsPerPage))}>...</button>

          <button onClick={handleNext}>Next</button>
      </div>
  )
}




export default Pagination;
