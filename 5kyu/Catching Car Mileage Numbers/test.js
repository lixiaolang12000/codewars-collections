const {
    isInteresting
} = require('./index');

const assert = require('assert');

assert.strictEqual(isInteresting(3, [1337, 256]),     0);
assert.strictEqual(isInteresting(1336, [1337, 256]),  1);
assert.strictEqual(isInteresting(1337, [1337, 256]),  2);
assert.strictEqual(isInteresting(11208, [1337, 256]), 0);
assert.strictEqual(isInteresting(11209, [1337, 256]), 1);
assert.strictEqual(isInteresting(11211, [1337, 256]), 2);
assert.strictEqual(isInteresting(12345654319, [1337, 256]), 1);