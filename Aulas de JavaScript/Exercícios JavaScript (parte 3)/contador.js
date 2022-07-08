function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Preencha TODAS as caixas com os valores!')
    } else {
        res.innerHTML = `Contador: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('[ERRO] Passo Inválido (considerando PASSO 1)!')
            p = 1
        }
        if (1 < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += `Acabou \u{1F3C1}!`
    }
}
