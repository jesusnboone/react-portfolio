import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Works from './Works';
import About from './About';
import Resume from './Resume';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Works':
        return <Works />;
      case 'Resume':
        return <Resume />;
        default:
          return <About />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Portfolio;
