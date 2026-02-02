const { add, isEven } = require('../src/main.js');

describe('Testes De Soma e Verificar se o numero é PAR (main.test.js)', () => {
    test('add() should add two numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('isEven() should report whether a number is even', () => {
        expect(isEven(2)).toBe(true);
    });
});