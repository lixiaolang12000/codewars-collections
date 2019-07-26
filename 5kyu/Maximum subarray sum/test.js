const {maxSequence} = require('./index');
const assert = require('assert')

assert.strictEqual(maxSequence([]), 0);
assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);