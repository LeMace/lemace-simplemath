import calculateArea from './calculateArea.js';
import printStringWidth from './printStringWidth.js';
import {sqrt} from 'mathjs';

// Use the calculateArea function to calculate the area of a rectangle
const width = 4;
const height = 5;
const area = calculateArea(width, height);

console.log(`The area of the rectangle is: ${area}`);

// Use the mathjs library to calculate the square root of the area
const sqrtArea = sqrt(area);
console.log(`The square root of the area is: ${sqrtArea}`);

// print string width
const stringWidth = printStringWidth("╩")
console.log(`The string-width of ╩ is: ${stringWidth}`)