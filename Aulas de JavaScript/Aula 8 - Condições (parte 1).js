var vel = 880
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel > 70) {
    console.log('Você ultrapassou a velocidade permitida!')
}

console.log('Dirija sempre usando o cinto de segurança!!!')


var país = 'EUA'
console.log(`Vivendo em: ${país}`)

if (país == 'Brasil') {
    console.log('Brasileiro')
} else {
    console.log('Estrangeiro')
}

-------------------------------------------------------------
  {Em forma de site}

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DETRAN</title>
</head>
<body>
    <h1>Sistema De Multas</h1>
    velocidade do carro: <input type="number" name="txtvel" id="txtvel" > Km/h
    <input type="button" value="Verificar" onclick="calcular()">
    <div id="res">

    </div>
    <script>
        function calcular() {
            var txtv = window.document.querySelector('input#txtvel')
            var res = window.document.querySelector('div#res')
            var vel = Number(txtv.value)
            res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`
            if (vel > 60) {
                res.innerHTML = '<p>Você está <strong>MULTADO</strong>!</p>'
            }
            res.innerHTML += `<p>Dirija sempre com cinto de segurança.</p>`
        }
    </script>
</body>
</html>
