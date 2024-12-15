const camelToSnake = require('../camelToSnake');

describe('camelToSnake', () => {
  test('should convert a simple CamelCase string to snake_case', () => {
    expect(camelToSnake('camelCase')).toBe('camel_case');
  });

  test('should convert a string with multiple CamelCase segments to snake_case', () => {
    expect(camelToSnake('thisIsATest')).toBe('this_is_a_test');
  });

  test('should handle single word strings', () => {
    expect(camelToSnake('word')).toBe('word');
  });

  test('should handle empty strings', () => {
    expect(camelToSnake('')).toBe('');
  });

  test('should throw a TypeError if input is not a string', () => {
    expect(() => camelToSnake(123)).toThrow(TypeError);
    expect(() => camelToSnake(null)).toThrow(TypeError);
    expect(() => camelToSnake(undefined)).toThrow(TypeError);
    expect(() => camelToSnake({})).toThrow(TypeError);
  });

  test('should convert strings with consecutive uppercase letters correctly', () => {
    expect(camelToSnake('testHTTPResponse')).toBe('test_http_response');
  });

  test('should handle strings with numbers correctly', () => {
    expect(camelToSnake('test123Case')).toBe('test123_case');
  });

  test('should preserve underscores in already snake_case strings', () => {
    expect(camelToSnake('already_snake_case')).toBe('already_snake_case');
  });
});
