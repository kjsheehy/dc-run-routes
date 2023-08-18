import React from 'react';
import Carousel from 'better-react-carousel';
import './BetterReactCarousel.css';

const BetterReactCarousel = () => {
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

  const carouselContent = images.map((image) => (
    <Carousel.Item>
      <div className="carousel-item">
        <img src={image.url} className="carousel-image" />
      </div>
    </Carousel.Item>
  ));

  return (
    <Carousel
      className="image-carousel"
      cols={1}
      rows={1}
      gap={0}
      loop={true}
      autoplay={5000}
      mobileBreakpoint={600}
    >
      {carouselContent}
    </Carousel>
  );
};

export default BetterReactCarousel;
