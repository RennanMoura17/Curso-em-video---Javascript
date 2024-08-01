function count() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('f')
    var passo = document.getElementById('pas')
    var resultado = document.getElementById('res')
    var ini = Number.parseFloat(inicio.value)
    var f = Number.parseFloat(fim.value)
    var pas = Number.parseFloat(passo.value)
    

    for (c = inicio.value ; c <= fim.value; c++) {
        resultado.innerHTML += `${c} - `
    }
}