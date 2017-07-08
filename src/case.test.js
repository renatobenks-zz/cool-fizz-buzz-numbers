import { FIZZ_BUZZ } from './case';

describe('case', () => {
  /*describe('getFizzBuzz()', () => {
    test('get the fizz return if number is multiple of 3', () => {
      expect(getFizzBuzz(6)).toBe('fizz');
    });

    test('get the buzz return if number is multiple of 5', () => {
      expect(getFizzBuzz(5)).toBe('buzz');
      expect(getFizzBuzz(10)).toBe('buzz');
    });

    test('get the fizzbuzz return if number is multiple of both', () => {
      expect(getFizzBuzz(15)).toBe('fizzbuzz');
    });

    test('get the lucky return if number has a digit 3', () => {
      expect(getFizzBuzz(3)).toBe('lucky');
      expect(getFizzBuzz(30)).toBe('lucky');
      expect(getFizzBuzz(13)).toBe('lucky');
    });

    test('get the number if number is not multiple of 3 or 5', () => {
      expect(getFizzBuzz(1)).toBe(1);
      expect(getFizzBuzz(2)).toBe(2);
      expect(getFizzBuzz(11)).toBe(11);
    });
  });*/

  describe('FIZZBUZZ', () => {
    describe('set numbers()', () => {
      test('define numbers to interval', () => {
        const interval = [1, 6];
        FIZZ_BUZZ.numbers = interval;
        expect(FIZZ_BUZZ.interval).toEqual(interval);
      });
    });

    describe('get numbers()', () => {
      test('get length over the interval between two numbers', () => {
        FIZZ_BUZZ.numbers = [1, 4];
        expect(FIZZ_BUZZ.numbers.length).toEqual(4);
      });

      test('to each number in interval between numbers get fizzbuzz numbers', () => {
        FIZZ_BUZZ.numbers = [1, 3];
        expect(FIZZ_BUZZ.numbers).toEqual([1, 2, 'lucky']);
        FIZZ_BUZZ.numbers = [1, 6];
        expect(FIZZ_BUZZ.numbers).toEqual([1, 2, 'lucky', 4, 'buzz', 'fizz']);
      });
    });

    describe('get count()', () => {
      test('get the count of integers in the fizz buzz numbers', () => {
        FIZZ_BUZZ.numbers = [1, 2];
        expect(FIZZ_BUZZ.count).toEqual(expect.objectContaining({
          integers: 2,
        }));
      });

      test('get the count of lucky numbers in the fizz buzz numbers', () => {
        FIZZ_BUZZ.numbers = [1, 3];
        expect(FIZZ_BUZZ.count).toEqual(expect.objectContaining({
          lucky: 1,
        }));
      });

      test('get the count of fizz in the fizz buzz numbers', () => {
        FIZZ_BUZZ.numbers = [1, 6];
        expect(FIZZ_BUZZ.count).toEqual(expect.objectContaining({
          fizz: 1,
        }));
      });

      test('get the count of buzz in the fizz buzz numbers', () => {
        FIZZ_BUZZ.numbers = [1, 5];
        expect(FIZZ_BUZZ.count).toEqual(expect.objectContaining({
          buzz: 1,
        }));
      });

      test('get the count of fizzbuzz in the fizz buzz numbers', () => {
        FIZZ_BUZZ.numbers = [1, 15];
        expect(FIZZ_BUZZ.count).toEqual(expect.objectContaining({
          fizzbuzz: 1,
        }));
      });
    });
  });
});
