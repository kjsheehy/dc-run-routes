import { Carousel } from 'react-carousel-minimal';

function ReactCarousel(props) {
  const images = props.photos.map((photoSrc) => ({ image: photoSrc }));

  //Determine if it's a small screen for conditional styling
  const mobile = window.innerWidth <= 600;

  const carouselStyle = {
    maxWidth: '110vw',
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
        thumbnailWidth="50px"
        showNavBtn={!mobile}
        style={carouselStyle}
      />
    );

  return imageOrCarousel;
}

export default ReactCarousel;
