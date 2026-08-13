

let ary = [1,2,3,10,15,20,22] ;
let filtered_array = [];

function divisibleBy10( num ){
    return ((num%10==0)?(true):(false))
}

for ( const element of ary){
    console.log(element)

    if (divisibleBy10(element)==true){
        console.log(element," is Divisible by 10")
        filtered_array.push(element)
        
    }
    else{
        console.log(element," isn't Divisible by 10")
    }
}
