const fs = require('fs');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const imagesPath = path.join(publicPath, 'images');

function getAllImages(directory) {
  const files = fs.readdirSync(directory);
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|bmp)$/i.test(file));
  return imageFiles.map(file => path.join(directory, file));
}

const imagesList = getAllImages(imagesPath);

const jsonContent = JSON.stringify(imagesList, null, 2);

fs.writeFileSync(path.join(publicPath, 'images.json'), jsonContent);

console.log('Image list JSON file generated successfully.');
