const sharp = require('sharp');

async function resizeImage(original, output) {
  const newImage = await sharp(original).resize({ width: 533 }).toFile(output);
  console.log(`${original} resized`);
}

resizeImage(
  '/Users/kevinsheehy/Documents/code-projects/dc-run-routes/server/Assets/Originals/WindyRunPotomacEastSunriseFinn.jpeg',
  '/Users/kevinsheehy/Documents/code-projects/dc-run-routes/server/Assets/WindyRunPotomacEastSunriseFinn.jpeg'
);
