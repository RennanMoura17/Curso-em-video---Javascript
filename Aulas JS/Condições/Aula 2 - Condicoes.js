/*
var idade = 66

if(idade < 16){
    console.log("Não vota")
} else if (idade < 18 || idade > 65){
    console.log("Voto opcional")
} else{
    console.log("Voto obrigatório")
}
*/

// var agora = new Date()
// var hora = agora.getHours()
// console.log(`Agora são exatamente ${hora} horas`)

// if(hora < 12){
//     console.log("bom dia")
// } else if(hora <= 18){
//     console.log('boa tarde')
// }else{
//     console.log('boa noite')
// }

var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log("DOM")
        break
    case 1:
        console.log("SEG")
        break
    case 2:
        console.log("TER")
        break
    case 3:
        console.log("QUA")
        break
    case 4:
        console.log("QUI")
        break
    case 5:
        console.log("SEX")
        break
    case 6:
        console.log("SAB")
        break
}
