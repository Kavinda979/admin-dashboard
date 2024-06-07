import React, { useState } from 'react';

function MyComponent({ data, itemsPerPage }) {

  const [currentPage, setCurrentPage] = useState(1);

  
  const totalPages = Math.ceil(data.length / itemsPerPage);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div>
   
      {currentPageData.map((item, index) => (
        <div key={index}>{}</div>
      ))}

   
      <div>
    
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
