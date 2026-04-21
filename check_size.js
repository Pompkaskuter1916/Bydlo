const sizeOf = require('image-size');
const dimensions = sizeOf('public/logobeztla.webp');
console.log(dimensions.width, dimensions.height);
