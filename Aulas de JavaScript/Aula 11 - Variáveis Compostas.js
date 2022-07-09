let num = [5, 8, 4]
num[3] = 10 // Sendo adicionado no indice 3
num.push(7) // Adicionando no indice seguinte
console.log(`Nosso vetor é o [${num}]`)


num.length  // Contagem de casas no vetor
console.log(`Nosso vetor é o [${num}] e possui [${num.length} casas]`)


let num = [5, 8, 4] //Contagem crescente "sort()"
console.log(`A ordem crescente é: ${num.sort()}`)


{EXEMPLO}
let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log('---> Números do vetor em ordem crescente: ' + num)
console.log(`O vetor possui: ${num.length} casa(s)`)
console.log(`O primeiro número é o ${num[0]}`)


let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log('---> Números do vetor em ordem crescente: ' + num)
console.log(`O vetor possui: ${num.length} casa(s)`)
console.log(`O primeiro número é o ${num[0]}`)
console.log(`O número 8 está na posição: ${num.indexOf(8)}`) //Encontrar números desejados


let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log('---> Números do vetor em ordem crescente: ' + num)
console.log(`O vetor possui: ${num.length} casa(s)`)
console.log(`O primeiro número é o ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('>>> O valor não pode ser encontrado')
} else {
    console.log(`>>> O número 8 está na posição: ${pos}`)
}


let valores = [8, 1, 7, 4, 2, 9]
/* console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) */
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
