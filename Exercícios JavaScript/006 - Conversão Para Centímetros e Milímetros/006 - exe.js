function convert(){
	var valor = document.querySelector("#valor")
	var valor = parseInt(valor.value)
	
	var cm = valor * 100
	var mm = valor * 1000
	
	var resCm = document.querySelector(".res-cm")
	resCm.innerText = `${cm}`

	var resMm = document.querySelector(".res-mm")
	resMm.innerText = `${mm}`
}