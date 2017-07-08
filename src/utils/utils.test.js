import {
  create_array,
  get_digits_number,
  get_intervals_between_numbers,
} from './utils'

describe('utils', () => {
  describe('create_array()', () => {
    test('create new array with right size', () => {
      expect(create_array(2).length).toBe(2);
    });
  });

  describe('get_digits_number()', () => {
    test('get each digit from a number', () => {
      expect(...get_digits_number(20)).toBe('2', '0');
    });
  });

  describe('get_intervals_between_numbers()', () => {
    expect(...get_intervals_between_numbers(1, 5)()).toBe(1, 2, 3, 4, 5);
  });
});
