
let nums = [ 1,2,3,4,5];

// oneliner for creating new array using elements modification of given arrays rather than using for loop

mod_array = nums.map((number, index , array)=>{
    console.log(index , number**2)
    return (number**2);
})

console.log(mod_array)