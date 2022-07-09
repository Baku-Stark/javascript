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
