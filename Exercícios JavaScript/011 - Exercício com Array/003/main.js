/*
    03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
    Modifique os elementos do array de modo a a sequência de números ficar do contrário.
        Ou seja, se digitou: 1,2,3
        Vai aparecer: 3,2,1
*/

function checkNumbers(num_1, num_2, num_3){
    // Adicionar ao final de um array `.push()`
    numberList.push(num_3, num_2, num_1)
    console.log('')
    console.log(
        `Lista ao contrário: ${numberList}`
    )
}

// ===========================
var prompt = require('prompt-sync')();
var numberList = []

const num_1 = parseInt(prompt(
    "Digite o 1° número: "
))
const num_2 = parseInt(prompt(
    "Digite o 2° número: "
))
const num_3 = parseInt(prompt(
    "Digite o 3° número: "
))

checkNumbers(num_1, num_2, num_3)