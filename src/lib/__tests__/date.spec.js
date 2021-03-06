/* eslint-env mocha, jest */

import {
  parse,
  dayStart,
  dayEnd,
  addDays,
} from '../date';

const sampleUnixDate = 1511100000000;

it('should parse date correctly', () => {
  const expected = sampleUnixDate;
  const actual = parse(new Date(sampleUnixDate));
  expect(actual).toBe(expected);
});
it('should return day start correctly', () => {
  const expected = (new Date(sampleUnixDate)).setHours(0, 0, 0, 0);
  const actual = dayStart(sampleUnixDate);
  expect(actual).toBe(expected);
});
it('should return day end correctly', () => {
  const expected = (new Date(sampleUnixDate)).setHours(23, 59, 59, 999);
  const actual = dayEnd(sampleUnixDate);
  expect(actual).toBe(expected);
});
it('should add days to a date correctly', () => {
  const expected = 1511359200000;
  const actual = addDays(3, sampleUnixDate);
  expect(actual).toBe(expected);
});
