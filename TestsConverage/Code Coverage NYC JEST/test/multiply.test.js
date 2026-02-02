const { multiply } = require('../src/main.js');

describe('Teste de multiplicação (multiply.test.js)', () => {
    test('multipy two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});