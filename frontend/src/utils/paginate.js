import React from "react";
import "./paginate.css";
const Pagination = ({
  paginatePrevious,
  paginateNext,
  reachedFirstPage,
  reachedLastPage,
}) => {
  return (
    <nav className="pagination-tab">
      <ul className="pagination">
        <li className="page-item">
          <button
            disabled={reachedFirstPage}
            className="pagination-button"
            onClick={() => paginatePrevious(1)}
          >
            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          </button>
        </li>
        <li className="page-item">
          <button
            disabled={reachedLastPage}
            className="pagination-button"
            onClick={() => paginateNext(1)}
          >
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
