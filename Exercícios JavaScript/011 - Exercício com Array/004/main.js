/*
    04. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
    Depois, o usuário vai preenchendo elemento por elemento do vetor.
    Ao final, exiba o array e o array ao contrário (generalização do script anterior).
*/
function checkNumbers(numberList){
    console.log(`Lista ao contrário: ${numberList}`)
}


// ===========================
var prompt = require('prompt-sync')();
const numberList = []

console.log("Quantos números você deseja adicionar?")
const qtdSelect = parseInt(prompt("r: "))
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
for(var c = 1; c <= qtdSelect; c++){
    console.log(`Escolha o ${c}° número`)
    const numSelect = parseInt(prompt("r: "))
    console.log('')
    // Adicionar ao inicio de um array `.unshift()`
    numberList.unshift(numSelect)
}
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
checkNumbers(numberList)