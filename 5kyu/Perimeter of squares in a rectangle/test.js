const {
  perimeter
} = require('./index');

const assert = require('assert');

assert.strictEqual(perimeter(5), 80);
assert.strictEqual(perimeter(7), 216);
assert.strictEqual(perimeter(20), 114624);
assert.strictEqual(perimeter(30), 14098308);