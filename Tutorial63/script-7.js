
let nums = [ 1,2,3,4,5];

let mod_array = nums.map((number, index , array)=>{
    return (number**2);
})

console.log(mod_array)

const greaterThanSeven = (number) =>{
    if (number>7){
        return true 
    }
    return false
}

console.log(mod_array.filter(greaterThanSeven))

// mod_array.filter(number>2 ? (true):(false))
