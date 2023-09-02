const sharp = require('sharp');

async function resizeImage(original) {
  const newImage = await sharp(original)
    .resize({ width: 200 })
    .toFile('output.jpeg');
  console.log(`${original} resized`);
}

// resizeImage(
//   '/Users/kevinsheehy/Documents/code-projects/dc-run-routes/server/Assets/ArboretumPillars.jpeg'
// );
