/*
    05. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.
*/

function BubbleSort(arrayNumber){
    var i, j;
    var len = arrayNumber.length

    var isSwapped = false;

    for(i = 0; i < len; i++){
        isSwapped = false
        for(j = 0; j < len; j++){
            if(arrayNumber[j] > arrayNumber[j+1]){
                var temp = arrayNumber[j]
                arrayNumber[j] = arrayNumber[j+1]
                arrayNumber[j+1] = temp
                isSwapped = true
            }
        }
    }

    if(!isSwapped){
        console.log("\033[0;32m[-][VALID]\033[0m")
    }

    else{
        console.log("\033[0;31m[-][INVALID]\033[0m")
    }

    console.log('----------------------------------')
    console.log(arrayNumber)
    console.log('----------------------------------')
}

// ===========================
var prompt = require('prompt-sync')();
const arrayNumber = []

var resUser = 0
var count = 1

while (resUser != 999){
    const opcSelect = parseInt(prompt(`Digite o ${count}° número: `))
    count += 1
    
    if(opcSelect === 999){
        resUser = opcSelect
    }

    else{
        // Adicionar ao final de um array `.push()`
        arrayNumber.push(opcSelect)
    }
}
console.log('')
console.log("ENCERRADO!")
BubbleSort(arrayNumber)