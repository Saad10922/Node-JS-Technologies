console.log("Hello, Node.js!")
const Square = require('./square')
console.log(Square(8));

const lodash = require('lodash')
const arr = [10,20,30,40,50]
const double = lodash.map(arr, num => num * 2)
console.log(double);

const Read = require('./Read_Dir_Names')
Read('../NodeJS_Basics')