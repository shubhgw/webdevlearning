
console.log("This is about functions in js")

function myFunction(name) {
    console.log("How are you,"+name+ " ?")
}

myFunction("Shubham")

function sum(a,b,additional=5){
    return a+b+additional
}

result = sum(2,5)
console.log("the sum of these two numbers is : "+ result)

// NaN error if number argument is not provided : Not a Number 