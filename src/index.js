

console.log('It works!');

// YOUR CODE HERE

/* 
 * Import controllers
 */
var print = require('./controllers/printNumberController')
var fizzBuzz = require('./controllers/fizzBuzzController')

/* 
 * Function calls
 */
print.printNumberFn()
print.asyncPrintNumberFn()

fizzBuzz.fizzBuzzFn()
fizzBuzz.asyncFizzBuzzFn()

console.log('Process complete');