/**
 * @description The function generates a random string of alphabetic characters with a specified
 * length.
 * @param [length=4] - The `length` parameter in the `getRandomAlphabets` function specifies the number
 * of random alphabets to generate. By default, if no length is provided, it generates a string of 4
 * random alphabets. You can also pass a custom length as an argument to generate
 * @returns The function `getRandomAlphabets` returns a random string of alphabetic characters with a
 * default length of 4.
 */
export const getRandomAlphabets = (length = 4) => {
  const alphabets = "ABCDEFGHIJKLMNPQRSTUVWXYZ".split("");
  let result = "";
  if (!alphabets || alphabets.length < length) {
    throw new Error(
      "Input string does not contain enough alphabetic characters."
    );
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    result += alphabets.splice(randomIndex, 1)[0];
  }
  return result;
};

/**
 * @description The function generates a unique reference ID by combining random alphabets
 * with a hexadecimal timestamp.
 * @returns The function `createReferenceId` returns a string that consists of a hexadecimal
 * timestamp followed by a random sequence of alphabets.
 */
export const createReferenceId = () => {
  const alpha = getRandomAlphabets();
  const hexaTimestamp = Math.floor(Date.now() / 1000)
    .toString(16)
    .toUpperCase();

  return `${hexaTimestamp}${alpha}`;
};

/**
 * The function `isNumber` in TypeScript checks if a value is a valid number.
 * @param {any} value - The `isNumber` function checks if the `value` parameter is a valid number. It
 * returns `true` if the `value` is of type "number", not `NaN`, not `null`, and not `undefined`.
 * @returns The function `isNumber` returns a boolean value indicating whether the input `value` is a
 * valid number.
 */
export const isNumber = (value: any): value is number => {
  return (
    typeof value === "number" &&
    !isNaN(value) &&
    value !== null &&
    value !== undefined
  );
};
