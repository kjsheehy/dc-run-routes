import React from 'react';
import Slider from 'react-touch-drag-slider';
import { useState } from 'react';
import './ImageCarousel.css';

// here we are importing some images
// but the Slider children can be an array of any element nodes, or your own components
//import images from './images'

function App() {
  const images = [
    {
      url: 'http://localhost:3006/dc-run-routes/KeyBridgeEast.jpg',
      title: 'Georgetown Waterfront Bridges',
      index: 0,
    },
    {
      url: 'http://localhost:3006/dc-run-routes/TeddyRooseveltInteriorLushDeer.jpeg',
      title: 'Teddy Roosevelt Island',
      index: 1,
    },
    {
      url: 'http://localhost:3006/dc-run-routes/WindyRunPotomacEastSunriseFinn.jpeg',
      title: 'Windy Run',
      index: 2,
    },
    {
      url: 'http://localhost:3006/dc-run-routes/HainsPointSWSunset.jpeg',
      title: 'Hains Point',
      index: 3,
    },
    {
      url: 'http://localhost:3006/dc-run-routes/ArboretumCreek.jpeg',
      title: 'National Arboretum',
      index: 4,
    },
    {
      url: 'http://localhost:3006/dc-run-routes/OldTownWaterfrontTownhouses.jpeg',
      title: 'Old Town Waterfront',
      index: 5,
    },
  ];
  // async function fetchImages() {
  //   console.log('about to fetch route');
  //   const response = await fetch(
  //     `http://localhost:3006/dc-run-routes/api/route`
  //   );

  //   const fetchedImages = await response.json();
  //   console.log(fetchedImages);
  //   //setImages(fetchedImages);
  // }

  //fetchImages();
  return (
    <div className="image-carousel">
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
      {/* <img src={images[0].url} /> */}
    </div>
  );
}

export default App;
