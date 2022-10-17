function funcPaint(){
    var altu = document.getElementById('numAlt')
    var base = document.getElementById('numBase')

    var area = parseInt(base.value) * parseInt(altu.value)
    var tinta = area/2
    
    window.alert(`A área da parede é de ${area}m² e precisa de ${tinta} Litros de tinta.`)
}