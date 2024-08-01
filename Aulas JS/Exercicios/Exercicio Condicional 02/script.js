function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("Verifique os dados novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebe-m.jpg')
            } else if (idade >= 10 & idade < 18) {
                //Jovem
            } else if (idade >= 18 && idade < 55) {
                //Adulto
            } else {
                //idoso
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if (idade >= 10 & idade < 18) {
                //Jovem
            } else if (idade >= 18 && idade < 55) {
                //Adulto
            } else {
                //idoso
            }
        }
    }
    
    res.innerHTML = `Detectamos ${genero}, com ${idade} anos`
    res.appendChild(img)
}