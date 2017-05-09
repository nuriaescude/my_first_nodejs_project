// // // app.js
// // 

// // console.log("hola");
// //
// // var sayHi = require('./sayHi.js')
// // sayHi()

// var sum = require('./calculator.js').sum
// var multiplication = require('./calculator.js').multiplication
// sum(3, 4)
// multiplication(3, 4)

var sum = require('./operations/sum.js').sum
var multiplication = require('./operations/multiplication.js').multiplication
var substraction = require('./operations/substraction.js').substraction
var division = require('./operations/division.js').division

sum(4,5)
multiplication(4,5)
division(4,5)
substraction(4,5)

var today = require('moment')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))