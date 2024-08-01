function calc(){
    n1 = Number(num.value)
    res.innerHTML = ""
    for(c = 0; c<=50; c++){
        mult = n1 * c
        res.innerHTML += `${n1} x ${c} = ${mult} <br />`
    }
}