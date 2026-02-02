const { expect } = require('chai');
const { multiply } = require('../src/main.js');

describe('Teste de multiplicação (multiply.test.js)', () => {
    it('multipy two numbers', () => {
        expect(multiply(2, 3)).to.equal(6);
    });
});