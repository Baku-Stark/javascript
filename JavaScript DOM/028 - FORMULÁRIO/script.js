// ==================================================
// Acessando os elementos form[input]
// input[text] -> usuario
console.log(document.forms[0].usuario)
// input[text] -> usuario[VALOR]
console.log(document.forms[0].usuario.value)

// input[password] -> senha
console.log(document.forms[0].senha)
// input[password] -> senha[VALOR]
console.log(document.forms[0].senha.value)
// ==================================================

// ==================================================
// Acessando os elementos form[input] => name
// input[text] -> usuario
console.log(document.forms['frm_register'].usuario)
// input[text] -> usuario[VALOR]
console.log(document.forms['frm_register'].usuario.value)

// input[password] -> senha
console.log(document.forms['frm_register'].senha)
// input[password] -> senha[VALOR]
console.log(document.forms['frm_register'].senha)
// Acessando os elementos form[input] => name
// ==================================================