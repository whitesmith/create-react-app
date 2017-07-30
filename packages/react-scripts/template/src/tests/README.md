# Tests

Create React App uses `Jest` as its test runner

    npm test // launch in watch mode

## Writting Tests

`Jest` provides a built-in `expect()` global function for making assertions.
All `expect()` matchers supported by Jest are extensively documented [here](http://facebook.github.io/jest/docs/expect.html).

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3)
  expect(sum(2, 2)).toEqual(4)
})
```
