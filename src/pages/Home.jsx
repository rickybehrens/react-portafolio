import React, { useState } from 'react';
import images from '../assets/images.json'

export default function Home() {
  const [imageList, setImageList] = useState(images);
  
  return (
    <div>
      <h1>Home Page</h1>
      <div className='image-grid'>
        {imageList.map((image) => <img src={image} alt={image.public_id}></img>)}
      </div>
  
    </div>
  );
}
