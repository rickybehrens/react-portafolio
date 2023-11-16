const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..'); // Assuming the script is in the helpers folder
const srcPath = path.join(projectRoot, 'src');
const assetsPath = path.join(srcPath, 'assets');
const imagesPath = path.join(assetsPath, 'images');

function getAllImages(directory) {
  const files = fs.readdirSync(directory);
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|bmp)$/i.test(file));
  return imageFiles.map(file => path.join(directory, file));
}

const imagesList = getAllImages(imagesPath);

const jsonContent = JSON.stringify(imagesList, null, 2);

const jsonFilePath = path.join(assetsPath, 'images.json');
fs.writeFileSync(jsonFilePath, jsonContent);

console.log(`Image list JSON file generated successfully at: ${jsonFilePath}`);
