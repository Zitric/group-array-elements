/**
 * This function divides an array into N equally sized arrays
 * If there is remainder will be added one per array since the first array
 * @param {array} arrayIn - any array of elements
 * @param {number} divisor - any integer number
 * @returns {array} A final array with N equally arrays.
 */
const groupArrayElements = (arrayIn: number[], divisor: number) => {
  const finalArray = [];
  const array = [...arrayIn];
  const dividend = array.length;

  if (dividend >= divisor) {
    const groupedArrayLength = Math.floor(dividend / divisor) + 1;

    while (array.length > 0) {
      finalArray.push(array.splice(0, groupedArrayLength));
    }
  }

  return finalArray;
};

export { groupArrayElements };
