// Import the mathjs library from npm
import {multiply} from 'mathjs';

// This is a simple JavaScript module that calculates the area of a rectangle
// It takes two arguments: width and height

function calculateArea(width, height) {
  // Use mathjs to calculate the area of the rectangle
  const area = multiply(width, height);
  return area;
}

export default calculateArea;