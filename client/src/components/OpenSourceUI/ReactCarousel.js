import { Carousel } from 'react-carousel-minimal';
import './ReactCarousel.css';

function ReactCarousel(props) {
  const images = props.photos.map((photoSrc) => ({ image: photoSrc }));

  //Determine if it's a small screen for conditional styling
  const mobile = window.innerWidth <= 600;

  const carouselStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    objectFit: 'contain',
  };

  const imageOrCarousel =
    images.length === 1 ? (
      <img src={images[0].image} style={carouselStyle} alt="Route" />
    ) : (
      <Carousel
        data={images}
        time={10000}
        width="600px"
        height="400px"
        radius="0px"
        slideNumber={false}
        automatic={false}
        dots={mobile}
        slideBackgroundColor="rgb(239, 240, 232)"
        slideImageFit="contain"
        thumbnails={!mobile}
        thumbnailWidth="50px"
        showNavBtn={!mobile}
        style={carouselStyle}
      />
    );

  return imageOrCarousel;
}

export default ReactCarousel;
