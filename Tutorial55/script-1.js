
// JavaScript Variable Definers : var , let , const

// var : var is globally scoped , can be updated & redeclared
// let : let is by default locally(block) scoped if block is not found then it goes for global , can be updated but cant be redeclared
// const :, is used to fix a variable permanantaly, it is also block scoped , cant be updated or redeclared

var a = 5
var b = 8
var c = "shubham"

let d = 95
const e = 96

console.log(a+b+9)
console.log(typeof a , typeof b , typeof c)

{   
    console.log(a)
    var a = 10 // directly changes the global value ( overwrites it )
    console.log(a)
}

console.log(a)




{
    // console.log(a) //: throws an error ; cannot access variable a before declaration
    let a = 100 // this sets the value of a as 100 for this block only 
    console.log(a)
}
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
// e = e + 55 : throws an error 
// console.log(e)

