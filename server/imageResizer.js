const { MongoClient, ServerApiVersion } = require('mongodb');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

//Template for route creation:

// const routeData = {
//   id: 0,
//   name: '',
//   distance: 0,
//   location: '',
//   surface: [''],
//   features: [''],
//   type: '',
//   description: '',
//   photos: newFilePaths,
//   links: {
//     maps: '',
//     strava: '',
//     mapMyRun: '',
//     garmin: '',
//   },
//   routeMap: '',
// };

const routeData = {
  id: 0,
  name: 'Teddy Roosevelt Island',
  distance: 0,
  location: '',
  surface: [''],
  features: [''],
  type: '',
  description: '',
  photos: [],
  links: {
    maps: '',
    strava: '',
    mapMyRun: '',
    garmin: '',
  },
  routeMap: '',
};

//Copy the route directory path here:

function resizePhotos(routeData, width) {
  const routeDir = path.join(
    '/Users/kevinsheehy/Documents/code-projects/dc-run-routes/server/Assets/Images/',
    routeData.name.split(' ').join('')
  );

  //get the Originals directory path
  const originalsPath = path.join(routeDir, 'Originals');

  //Path for directory to put resized photos in
  const destDirPath = path.join(routeDir, 'Medium');
  //Create the 'Medium' photo directory if it doesn't exist
  if (!fs.existsSync(destDirPath)) fs.mkdirSync(destDirPath);

  //get all files in Originals
  const files = fs.readdirSync(originalsPath);

  //Resize each file and place in the Medium folder
  files.forEach((file) => {
    const sourceFilePath = path.join(originalsPath, file);
    const destFilePath = path.join(destDirPath, file);

    sharp(sourceFilePath).resize({ width: width }).toFile(destFilePath);
  });

  //Add the array of route paths relative to the client to the routeData object
  routeData.photos = files.map(
    (file) =>
      './' +
      path.relative(
        path.join(__dirname, 'Assets'),
        path.join(destDirPath, file)
      )
  );

  return routeData;
}

//function resizeRouteMap(source, destination, width)

const finalRouteData = resizePhotos(routeData, 533);
console.log(finalRouteData);

const mongoURI =
  'mongodb+srv://kjsheehy:Ghost92hero@dc-run-routes.jp0qhli.mongodb.net/?retryWrites=true&w=majority';

const mongoClient = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function insertRoute(route) {
  try {
    await mongoClient.connect();
    const result = await mongoClient
      .db('dc-run-routes')
      .collection('routes')
      .insertOne(route);
    console.log('MongoDB result ', result);
  } catch (err) {
    console.log('Mongo DB error ', err);
  }
}

insertRoute(finalRouteData);

//Template for route creation:

// const routeData = {
//   id: 0,
//   Name: '',
//   distance: 0,
//   location: '',
//   surface: [''],
//   features: [''],
//   type: '',
//   description: '',
//   photos: newFilePaths,
//   links: {
//     maps: '',
//     strava: '',
//     mapMyRun: '',
//     garmin: '',
//   },
//   routeMap: '',
// };
