$('p').css({color:"red"})
$('p#text-id').css({color:"blue"})
$('p.text-class').css({color:"green"})


// ======================================================
const btn_somarjs = document.getElementById('btn_somarjs').addEventListener('click', () => {
    let v1 = document.getElementById('v1').value
    let v2 = document.getElementById('v2').value

    soma = parseInt(v1) + parseInt(v2)
    document.getElementById('res').value = soma
})


$('#btn_somarjq').click(() => {
    let v1 = $('#v1').val()
    let v2 = $('#v2').val()

    let soma = parseInt(v1) + parseInt(v2)
    $('#res').val(soma)
})