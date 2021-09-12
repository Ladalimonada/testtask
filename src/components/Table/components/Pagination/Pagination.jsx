import React, { useState, useEffect } from 'react'
import styles from './styles.css'

export function Pagination({ data, RenderComponent, dataLimit, setActiveItem }) {

  const maxPages =  Math.round(data.length / dataLimit);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data.length) {
      setCurrentPage(1)}
  }, [data.length] )


  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);

  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / maxPages) * maxPages;
    return new Array(maxPages).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {getPaginatedData().map((item) => (
        <RenderComponent key={item.phone} data={item} onClick={() => setActiveItem(item)} />
      ))}
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev 
          ${currentPage === 1 ? 'disabled' : ''}
          ${maxPages <= 1 ? 'nonvisible' : ''}
          `}
        >
          prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`next 
        ${currentPage === maxPages  ? 'disabled' : ''}
        ${maxPages <= 1 ? 'nonvisible' : ''}
        `}
        >
          next
        </button>
      </div>
    </>
  );
}

