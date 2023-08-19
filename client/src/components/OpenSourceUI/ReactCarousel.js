import { Carousel } from 'react-carousel-minimal';

function ReactCarousel() {
  const images = [
    {
      image: 'http://localhost:3006/dc-run-routes/KeyBridgeEast.jpg',
    },
    {
      image:
        'http://localhost:3006/dc-run-routes/TeddyRooseveltInteriorLushDeer.jpeg',
    },
    {
      image:
        'http://localhost:3006/dc-run-routes/WindyRunPotomacEastSunriseFinn.jpeg',
    },
    {
      image: 'http://localhost:3006/dc-run-routes/HainsPointSWSunset.jpeg',
    },
    {
      image:
        'http://localhost:3006/dc-run-routes/OldTownWaterfrontTownhouses.jpeg',
    },
  ];
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
