const myLib = require('../src/my-lib')
test('counter 1 -> 2', () => {
  expect(myLib.counter(1)).toBe(2)
});

test('add 1, 2 -> 3', () => {
  expect(myLib.add(1, 2)).toBe(3)
});

test('subtract 1, 2 -> -1', () => {
  expect(myLib.substract(1, 2)).toBe(-1)
});

test('divide 1, 2 -> 0.5', () => {
  expect(myLib.divide(1, 2)).toBe(0.5)
});

test('divide 1, 0 -> 0', () => {
  expect(myLib.divide(1, 0)).toBe(0)
});
