const { getRandomWordSync, getRandomWord } = require('word-maker');

const fs = require('fs')


/* 
 * Fizz Buzz program
 */
function fizzBuzzFn() {
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
 * Asyncronous Fizz Buzz program
 */
async function asyncFizzBuzzFn() {

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

module.exports = {
    fizzBuzzFn,
    asyncFizzBuzzFn
}