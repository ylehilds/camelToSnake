/**
 * Converts a string from CamelCase to snake_case.
 * @param {string} input - The CamelCase string to convert.
 * @returns {string} The converted snake_case string.
 */
function camelToSnake(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }

  return input
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Insert underscore between lowercase and uppercase.
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2') // Handle consecutive uppercase letters.
    .replace(/([a-zA-Z])([0-9])/g, '$1$2') // Keep letters and numbers together.
    .replace(/([0-9]+)([A-Z])/g, '$1_$2') // Insert underscore between numbers and uppercase letters.
    .toLowerCase(); // Convert the entire string to lowercase.
}

module.exports = camelToSnake;
