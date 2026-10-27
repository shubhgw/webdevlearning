
console.log("This is about forin & forof loops in js");

obj = {
    name:"shubham",
    job:"programmer",
    company:"apple"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element);   
}

for ( const c of "Harry" ){
    console.log(c);
}

// THERE ARE SOME MORE FOR LOOPS WHICH WILL BE DISCUSSED LATER ON !