const sum = require('./sum')
describe( "Sum", () => {
test('Given 1 and 2, should sums 3', () => {
  const given = {
    a: 1,
    b: 2
  }

  const expected = 3

  const actual = sum(given.a, given.b)

  expect(actual).toEqual(expected)
});
});
