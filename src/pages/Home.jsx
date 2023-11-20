import React, { useState, useEffect } from 'react';

const IMAGES_PER_PAGE = 3;
const TRANSITION_INTERVAL = 2000; // 3 seconds

export default function Home() {
  const [imageList, setImageList] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/images.json');
        const data = await response.json();
        setImageList(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    setVisibleImages(imageList.slice(startIndex, endIndex));
  }, [currentPage, imageList]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage * IMAGES_PER_PAGE >= imageList.length ? 1 : prevPage + 1));
    }, TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, [imageList]);

  return (
    <div>
      <h1>Home Page</h1>
      <h4>A picture is worth a thousand words!</h4>
      <div className='image-grid'>
        {visibleImages.map((image, index) => (
          <img key={index} src={`${image}`} alt={`image-${index}`} />
        ))}
      </div>
    </div>
  );
}
