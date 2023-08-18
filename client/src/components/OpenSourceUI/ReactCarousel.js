import { Carousel } from 'react-carousel-minimal';

function ReactCarousel() {
  const data = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
      caption: 'San Francisco',
    },
    {
      image:
        'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
      caption: 'San Francisco',
    },
    {
      image:
        'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx',
      caption: 'San Francisco',
    },
    {
      image:
        'https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg',
      caption: 'Darjeeling',
    },
  ];

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
      image: 'http://localhost:3006/dc-run-routes/ArboretumCreek.jpeg',
    },
    {
      image:
        'http://localhost:3006/dc-run-routes/OldTownWaterfrontTownhouses.jpeg',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <Carousel
      data={images}
      time={4000}
      width="100%"
      height="max-content"
      captionStyle={captionStyle}
      radius="0px"
      slideNumber={false}
      slideNumberStyle={slideNumberStyle}
      captionPosition="bottom"
      automatic={false}
      dots={true}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideBackgroundColor="white"
      slideImageFit="contain"
      thumbnails={false}
      thumbnailWidth="50vw"
      style={{
        textAlign: 'center',
        maxWidth: '100%',
        maxHeight: '60%',
        margin: '50px auto',
      }}
    />
  );
}

export default ReactCarousel;
