/*
    01. Crie uma função que recebe um array de 2 números e
    coloque eles em ordem crescente. Não use o método sort.
*/
var prompt = require('prompt-sync')();
const numberList = []

function checkNumbers(numberSelect1, numberSelect2){
    if(numberSelect1 > numberSelect2){ 
        // Adicionar ao final de um array
        numberList.push(numberSelect1)
        numberList.unshift(numberSelect2)
    }

    else if(numberSelect1 === numberSelect2){
        console.log('Números iguais! Não serão adicionados à lista...')
    }

    else{
        // Adicionar ao início de um array
        numberList.push(numberSelect2)
        numberList.unshift(numberSelect1)
    }  
}

// ===========================
var numberSelect1 = parseInt(prompt("Digite o primeiro número: "))
console.log('')
var numberSelect2 = parseInt(prompt("Digite o segundo número: "))
console.log('')
checkNumbers(numberSelect1, numberSelect2)
console.log(numberList)