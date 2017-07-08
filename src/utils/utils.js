// create array with specific size
export const create_array = size => [ ...new Array(size) ];

// get digits from a number
export const get_digits_number = number => String(number).split('');

// get interval between 2 numbers
export const get_intervals_between_numbers = (number, number1) =>
  ((interval) => () => create_array(interval).map((n, i) => i + number))(number1 - number + 1);
