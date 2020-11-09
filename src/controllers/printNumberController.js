const { getRandomWordSync, getRandomWord } = require('word-maker');

const fs = require('fs')

/* 
 * Print numbers 1 to 100 with random word
 */
function printNumberFn() {
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
 * Asyncronous function to print numbers 1 to 100 with random word
 */
async function asyncPrintNumberFn() {

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

module.exports = {
    printNumberFn,
    asyncPrintNumberFn
}