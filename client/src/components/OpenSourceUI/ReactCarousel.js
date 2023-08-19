import { Carousel } from 'react-carousel-minimal';
import { useEffect, useState } from 'react';

function ReactCarousel(props) {
  const [images, setImages] = useState([
    {
      image: props.thumbnailSrc,
    },
  ]);
  console.log(props);

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

  const carouselStyle = {
    textAlign: 'center',
    maxWidth: '95%',
    maxHeight: '70%',
    marginTop: '0',
    marginBottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const singleImageStyle = {
    height: '400px',
    width: '600px',
    maxWidth: '95%',
    maxHeight: '70%',
    marginTop: '0',
    marginBottom: '0',
    objectFit: 'contain',
  };

  return images.length === 1 ? (
    <img src={images[0].image} style={singleImageStyle} />
  ) : (
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
      thumbnailWidth="60px"
      showNavBtn={!mobile}
      style={carouselStyle}
    />
  );
}

export default ReactCarousel;
