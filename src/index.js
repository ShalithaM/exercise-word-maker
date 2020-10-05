const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

const fs = require('fs')

/* 
 * Print numbers 1 to 100 with random word
 */
function printNumber() {
    var file = fs.createWriteStream('../printNumber.txt');

    for (let index = 0; index < 100; index++) {
        try {
            file.write(`${index + 1}: ${getRandomWordSync({ withErrors: true })}\n`);
        }
        catch (err) {
            file.write(`${index + 1}: It shouldn't break anything!\n`);
        }
    }
}

/* 
 * Fizz Buzz program
 */
function fizzBuzz() {
    var file = fs.createWriteStream('../fizzBuzz.txt');

    for (let index = 1; index <= 100; index++) {
        try {
            var data = `${index}: ` + ((index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || getRandomWordSync({ withErrors: true }))
            file.write(`${data}\n`);
        }
        catch {
            file.write(`${index}: It shouldn't break anything!\n`);
        }
    }
}


/* 
 * Asyncronous function to print numbers 1 to 100 with random word
 */
async function asyncPrintNumber() {

    var file = fs.createWriteStream('../asyncPrintNumber.txt');

    for (let index = 0; index < 100; index++) {
        await getRandomWord({ withErrors: true, slow: false })
            .then((result) => {
                file.write(`${index + 1}: ${result}\n`);
            })
            .catch((error) => {
                file.write(`${index + 1}: It shouldn't break anything!\n`);
            })
    }
}


/* 
 * Asyncronous Fizz Buzz program
 */
async function asyncFizzBuzz() {

    var file = fs.createWriteStream('../asyncFizzBuzz.txt');

    for (let index = 1; index <= 100; index++) {
        await getRandomWord({ withErrors: true })
            .then((result) => {
                var data = `${index}: ` + ((index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || result)
                file.write(`${data}\n`);
            })
            .catch((error) => {
                file.write(`${index}: It shouldn't break anything!\n`);
            })
    }
}


/* 
 * Function calls
 */
printNumber()
asyncPrintNumber()

fizzBuzz()
asyncFizzBuzz()