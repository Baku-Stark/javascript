const { test } = require('node:test');

const { add, isEven } = require('../src/main.js');

test('add() should add two numbers', t => {
    t.assert.strictEqual(add(1, 2), 3);
});

test('isEven() should report whether a number is even', t => {
    t.assert.ok(isEven(0));
});