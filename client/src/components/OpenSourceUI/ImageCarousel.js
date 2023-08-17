import React from 'react';
import Slider from 'react-touch-drag-slider';
import { useState } from 'react';

// here we are importing some images
// but the Slider children can be an array of any element nodes, or your own components
//import images from './images'

function App() {
  const [images, setImages] = useState([]);
  async function fetchImages() {
    const response = await fetch(
      `http://localhost:3006/dc-run-routes/api/route`
    );

    const fetchedImages = await response.json();
    setImages(fetchedImages);
  }

  fetchImages();
  return (
    <Slider
      onSlideComplete={(i) => {
        console.log('finished dragging, current slide is', i);
      }}
      onSlideStart={(i) => {
        console.log('started dragging on slide', i);
      }}
      activeIndex={0}
      threshHold={100}
      transition={0.5}
      scaleOnDrag={true}
    >
      {images.map(({ url, title }, index) => (
        <img src={url} key={index} alt={title} />
      ))}
    </Slider>
  );
}

export default App;
