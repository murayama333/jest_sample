const myLib = require('../src/my-lib')
test('counter 1 -> 2', () => {
  expect(myLib.counter(1)).toBe(2)
});

test('add 1, 2 -> 3', () => {
  expect(myLib.add(1, 2)).toBe(3)
});

// test('divide 1, 2 -> -1', () => {
//   expect(myLib.divide(1, 2)).toBe(-1)
// });