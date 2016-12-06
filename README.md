# is-leap-year

A simple utility function to check if a date is in a leap year.

## Usage

```js
var isLeapYear = require('is-leap-year');

isLeapYear(2016); // true
isLeapYear(new Date('December 5, 2017')); // false
```

## Tests

```
git clone https://github.com/kinetifex/is-leap-year.git
cd ./is-leap-year
npm install
npm test
```