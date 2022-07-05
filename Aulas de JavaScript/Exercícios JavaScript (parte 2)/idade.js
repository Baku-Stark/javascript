function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca_m_circulo.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'teen_m_circulo.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto_m_circulo.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso_m_circulo.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca_f_circulo.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'teen_f_circulo.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto_f_circulo.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso_f_circulo.png')
            }
        }
        res.innerHTML = `Idade calculada: ${idade} anos. Gênero: ${genero}`
        res.appendChild(img)
    }
}
