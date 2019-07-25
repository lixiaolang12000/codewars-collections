const {
  zeros
} = require('./index');

const assert = require('assert');

assert.strictEqual(zeros(0), 0);
assert.strictEqual(zeros(5), 1);
assert.strictEqual(zeros(6), 1);
assert.strictEqual(zeros(30), 7);