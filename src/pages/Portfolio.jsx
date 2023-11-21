import React from 'react';

export default function Portfolio() {
  const handleItemClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div className='portfolio-container'>
        <div className='portfolio-item'>
        <a href='https://brochb.github.io/group-project1/' target='_blank' rel='noopener noreferrer' onClick={(e) => {
              e.preventDefault();
              handleItemClick('https://brochb.github.io/group-project1/');
            }}>
          <img className="portfolio-image" src="/book.jpeg" alt="The Book Search Extraordinare!" />
          <div className='portfolio-info' alt='Project 1'>
            The Book Search Extraordinaire
            </div>
          </a>
        </div>
        <div className='portfolio-item'>
          <a href='https://github.com/Ali-Aldawoodi/Tutor-Ratings' target='_blank' rel='noopener noreferrer' onClick={(e) => {
              e.preventDefault();
              handleItemClick('https://github.com/Ali-Aldawoodi/Tutor-Ratings');
            }}>
            <img className="portfolio-image" src="/db_logo.png" alt="" />
            <div className='portfolio-info' alt='Project 2'>
              The Tuttor Datty
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
