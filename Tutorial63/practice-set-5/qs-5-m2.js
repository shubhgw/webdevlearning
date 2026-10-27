
// factorial qs !!!!!!!!

let num = 5;
let ary = [];

function Factorial(a,b){
    return a*b
}

for (let i=1 ; i<=5 ; i++){
    // console.log(i)
    ary.push(i)
}

console.log(ary)

console.log(ary.reduce(Factorial))