import React from "react";

const Pagination = ({ UserPerPage, totalUser, onPaginate, CurrentPage }) => {
  const pageNumber = [];

  for (let index = 1; index <= Math.ceil(totalUser / UserPerPage); index++) {
    pageNumber.push(index);
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumber.map((number, i) => (
            <li
              className={
                CurrentPage === number ? "page-item active" : "page-item "
              }
              key={i}
            >
              <a
                className="page-link"
                href='##'
                onClick={() => onPaginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
