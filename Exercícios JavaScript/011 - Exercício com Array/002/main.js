/*
    02. Crie uma função que recebe um array de 3 números e
    coloque eles em ordem crescente.Crie sua própria função para isso.
*/

function checkNumber(number_1, number_2, number_3){
    if(number_1 > number_2 && number_1 > number_3){
        // Adicionar ao final de um array `.push()`
        numberList.push(number_1)
        if(number_2 > number_3){
            // Adicionar ao inicio de um array `.unshift()`
            numberList.unshift(number_2)
            numberList.unshift(number_3)
        }
        else if(number_2 < number_3){
            // Adicionar ao inicio de um array `.unshift()`
            numberList.unshift(number_3)
            numberList.unshift(number_2)
        }
        else{console.log('Número iguais não serão adicionados na lista...')}
    }

    else if(number_2 > number_1 && number_2 > number_3){
        // Adicionar ao final de um array `.push()`
        numberList.push(number_2)
        if(number_1 > number_3){
            // Adicionar ao inicio de um array `.unshift()`
            numberList.unshift(number_1)
            numberList.unshift(number_3)
        }
        else if(number_1 < number_3){
            // Adicionar ao inicio de um array `.unshift()`
            numberList.unshift(number_3)
            numberList.unshift(number_1)
        }
        else{console.log('Número iguais não serão adicionados na lista...')}
    }

    else if(number_3 > number_1 && number_3 > number_2){
        // Adicionar ao final de um array `.push()`
        numberList.push(number_3)
        if(number_1 > number_2){
            // Adicionar ao inicio de um array `.unshift()`
            numberList.unshift(number_1)
            numberList.unshift(number_2)
        }
        else if(number_1 < number_2){
            // Adicionar ao inicio de um array `.unshift()`
            numberList.unshift(number_2)
            numberList.unshift(number_1)
        }
        else{console.log('Número iguais não serão adicionados na lista...')}
    }

    else{console.log('Algo deu errado... Tente novamente!')}
    console.log(numberList)
}


// ===========================
var prompt = require('prompt-sync')();
const numberList = []

const number_1 = parseInt(prompt("Digite o 1° número: "))
const number_2 = parseInt(prompt("Digite o 2° número: "))
const number_3 = parseInt(prompt("Digite o 3° número: "))
console.log('')
checkNumber(number_1, number_2, number_3)