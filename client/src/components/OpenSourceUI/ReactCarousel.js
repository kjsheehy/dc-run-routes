import { Carousel } from 'react-carousel-minimal';
import { useEffect, useState } from 'react';

function ReactCarousel() {
  const [images, setImages] = useState([
    {
      image:
        'http://localhost:3006/dc-run-routes/OldTownWaterfrontTownhouses.jpeg',
    },
  ]);

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(
        `http://localhost:3006/dc-run-routes/api/route`
      );
      const returnedPhotos = await response.json();
      setImages(returnedPhotos.map((photo) => ({ image: photo })));
    }
    fetchPhotos();

    return () => {};
  }, []);

  //Determine if it's a small screen for conditional styling
  const mobile = window.innerWidth <= 600;
  return (
    <Carousel
      data={images}
      time={4000}
      width="600px"
      height="400px"
      radius="0px"
      slideNumber={false}
      automatic={false}
      dots={mobile}
      slideBackgroundColor="white"
      slideImageFit="contain"
      thumbnails={!mobile}
      thumbnailWidth="80px"
      showNavBtn={!mobile}
      style={{
        textAlign: 'center',
        marginTop: '0',
        marginBottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    />
  );
}

export default ReactCarousel;
