// function parimp(n){
//     if(n%2==0){
//         console.log(`O número ${n} é par`)
//     }else{
//         console.log(`O número ${n} é impar`)
//     }
// }

// var res = parimp(15)


// function soma(n1,n2){
//     return n1+n2
// }

// console.log(soma(2,5))


// let v = function(x){
//     return x*2
// }

// console.log(v(5))


// function fatorial(n){
//     var fat = 1
//     for(c=n;c>1;c--){
//         fat*=c
//     }
//     return fat
// }

// console.log(fatorial(5))

function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(10))
