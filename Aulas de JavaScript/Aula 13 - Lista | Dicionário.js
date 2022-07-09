let amigo = {
nome: 'Wallace', 
sexo: 'M', 
peso: 51.0,
engordar(p=0) {
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
