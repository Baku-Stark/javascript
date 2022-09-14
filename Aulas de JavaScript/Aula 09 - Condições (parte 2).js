{IDADE}
var idade = 22
if (idade < 16) {
    console.log('Não vota')
} else if (idade == 16) {
    console.log('Vota!!')
} else if (idade > 18) {
    console.log('Voto obrigatório!!!')
}

{HORAS}
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)

if (hora == 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 17) {
    console.log('Boa Tarde!')
} else if (hora >= 18 && hora == 24) {
    console.log('Boa Noite!!!')
} else {
    console.log('Boa Madrugada!!!')
}

{DIAS DA SEMANA}
var agora = new Date()
var diaSem = agora.getDay()
/*
        0 = Domingo
        1 = Segunda
        2 = Terça
        3 = Quarta
        4 = Quinta
        5 = Sexta
        6 = Sábado
*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERROR] Dia Inválido!')
        break
}
