# FizzBuzz

Cool tool to dispatch fizzbuzz numbers for you.

It's simple and small. Try now:

Installing
---
````npm
$ npm i --save cool-fizz-buzz-numbers 
````

Working with:
---

`````javascript
// Import your nice tool!
import FIZZ_BUZZ from 'cool-fizz-buzz-numbers'

// Define your numbers interval between two 
// numbers inside of a array.

FIZZ_BUZZ.numbers = [1, 15];

// Now you can get your fizz and buzz numbers 
// with getter of numbers.
console.log(FIZZ_BUZZ.numbers);
// console output: [1, 2, 'lucky', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 'lucky', 14, 'fizzbuzz']

console.log(FIZZ_BUZZ.count);

/*
console output: 
  Object: {
    integers: 7,
    lucky: 2,
    fizz: 3,
    buzz: 2,
    fizzbuzz: 1
  }
*/
`````

### Using in cli with Node.js:

````
// Inside lib enter with
$ node ./src/server 1 3
// or instead
$ node ./node_modules/cool-fizz-buzz-numbers/src/server 1 3

// Reroduce output:
The fizz buzz numbers are: 1, 2, lucky.

See sum for each type: {
  "integers": 2,
  "lucky": 1,
  "fizz": 0,
  "buzz": 0,
  "fizzbuzz": 0
}
````
