const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

//Copy the source file path here
const sourceDirPath =
  '/Users/kevinsheehy/Documents/code-projects/dc-run-routes/server/Assets/Images/TeddyRooseveltIsland/Originals';

function resizePhotoDirectory(sourceDirPath, width) {
  //Create the directory to put the resized photos in
  const destDirPath = path.join(sourceDirPath, '..', 'medium');
  if (!fs.existsSync(destDirPath)) fs.mkdirSync(destDirPath);

  const files = fs.readdirSync(sourceDirPath);
  files.forEach((file) => {
    const sourceFilePath = path.join(sourceDirPath, file);
    const destFilePath = path.join(destDirPath, file);

    //use sharp to resize the image
    sharp(sourceFilePath).resize({ width: width }).toFile(destFilePath);
  });

  //Return array of image file paths relative to the client (This is what will be stored in the db and consumed by the client)
  return files.map(
    (file) =>
      './' +
      path.relative(
        path.join(__dirname, 'Assets'),
        path.join(destDirPath, file)
      )
  );
}
const newFilePaths = resizePhotoDirectory(sourceDirPath, 533);
console.log(newFilePaths);
