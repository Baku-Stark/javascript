const { expect } = require('chai');

const { add, isEven } = require('../src/main.js');

describe('Testes De Soma e Verificar se o numero é PAR (main.test.js)', () => {
    it('add() should add two numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('isEven() should report whether a number is even', () => {
        expect(isEven(2)).to.equal(true);
    });
});