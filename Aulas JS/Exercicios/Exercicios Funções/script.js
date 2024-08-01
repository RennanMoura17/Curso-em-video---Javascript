var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}


function finalizar(){
    if(valores.length == 0 ){
        alert('Adicione valores antes de finalizar')
    }else{
        tot = valores.length
        maior = valores [0]
        menor = valores[0]
        soma = 0 
        media = 0
        for(let pos in valores){
            soma+= valores[pos]
             if(valores[pos] > maior)
                maior = valores[pos]
             if(valores[pos]< menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `Foram cadastrados ${tot} números`
        res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos o total de ${soma}</p>`
       res.innerHTML += `<p>A média dos valores cadastrados é: ${media}</p>`
 }
}