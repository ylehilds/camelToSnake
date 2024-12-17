# camelToSnake
CamelCase to snake_case conversion

## Usage
```node
const camelToSnake = require('@lehidev/cameltosnake');

Usage:
  camelToSnake('camelCase') // returns 'camel_case'
  camelToSnake('thisIsATest') // returns 'this_is_a_test'
  camelToSnake('word') // returns 'word'
  camelToSnake('') // returns ''
  camelToSnake('testHTTPResponse') // returns 'test_http_response'
  camelToSnake('test123Case') // returns 'test123_case'
  camelToSnake('already_snake_case') // returns 'already_snake_case'
```