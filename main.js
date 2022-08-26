import { grid } from './drawing.js' ;

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

grid(canvas, context, 'red', 'yellow');