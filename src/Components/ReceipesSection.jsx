import React, { useState } from 'react';
import '../Styles.scss';
import ReceipCard from './ReceipCard';

function ReceipesSection({ receipeResult }) {
  const [currentPage, setCurrentPage] = useState(0);
  const resultsPerPage = 10;

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = currentPage * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;

  return (
    <div className='result-section'>
      <div className='heading'>
        <h1 className='result-heading'>Results...</h1>
      </div>
      <div className='receipe-results'>
        {receipeResult.hits &&
          receipeResult.hits.slice(startIndex, endIndex).map((hit, index) => (
            <ReceipCard hit={hit} key={index} />
          ))}
      </div>
      <div className='pagination'>
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span>{currentPage + 1}</span>
        <button onClick={nextPage} disabled={endIndex >= receipeResult?.hits?.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ReceipesSection;

