import { useState } from "react";
// create a Pagination component

const Pagination = ({ paginate, pageNumbers, currentPage, totalPages }) => {
    // set the state variable
    const [page, setPage] = useState(1);
    
  <div className="pagination">
    {pageNumbers.map((number) => (
      <li key={number} className="page-item">
        <a onClick={() => paginate(number)} href="!#" className="page-link">
          {number}
        </a>
      </li>
    ))}
    <button
      className="active__btn"
      // disable the previous button if the current page is 1
      disabled={currentPage <= 1}
      onClick={() => setPage((prevPage) => prevPage - 1)}
    >
      Previous
    </button>
    
    {Array.from(Array(totalPages), (e, i) => {
        return (
            <button
            className="active__btn"
            key={i}
            onClick={() => setPage(i + 1)}
            // disable the next button if the current page is the last page
            disabled={currentPage >= totalPages}
            >
            Next
            </button>
        );
    }
    )}
    </div>
    
    };


    // {Array.from({ length: totalPages }, (value, i) => i + 1).map((page) => (
    //   <button className="array__active__btn" onClick={() => setPage(page)}>
    //     {page}
    //   </button>
    // ))}

    // <button
    //   className="active__btn"
    //   // disable the next button if the current page is the last page
    //   disabled={currentPage >= totalPages}
    //   onClick={() => setPage((prevPage) => prevPage + 1)}
    // >
    //   Next
    // </button>

export default Pagination;
