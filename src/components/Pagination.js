import React, { useContext } from 'react';
import { CompanyContext } from '../context/CompanyContext';

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useContext(CompanyContext);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="pagination">
      {pages.map(num => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className={num === currentPage ? 'active' : ''}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
