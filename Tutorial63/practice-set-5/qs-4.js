

let ary = [1,2,3,10,15,20,22] ;
let squared_array = [];

for (const element in ary){
    console.log(`the square of ${element} is ${element**2}`)
    squared_array.push(element**2)

}

console.log(squared_array)