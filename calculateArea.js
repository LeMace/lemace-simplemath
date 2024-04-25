// Import the mathjs library from npm
const math = require('mathjs');

// This is a simple JavaScript module that calculates the area of a rectangle
// It takes two arguments: width and height

function calculateArea(width, height) {
  // Use mathjs to calculate the area of the rectangle
  const area = math.multiply(width, height);
  return area;
}

// Export the calculateArea function so it can be used by other modules
module.exports = calculateArea;