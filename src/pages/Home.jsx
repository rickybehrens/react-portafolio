import React, { useState, useEffect } from 'react';

export default function Home() {
  const [imageList, setImageList] = useState([]);

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

  return (
    <div>
      <h1>Home Page</h1>
      <h4>A picture is worth a thousand words!</h4>
      <div className='image-grid'>
        {imageList.map((image, index) => (
          <img key={index} src={`${image}`} alt={`image-${index}`} />
        ))}
      </div>
    </div>
  );
}
