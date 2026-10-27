
console.log("This is about strings escape sequencing & properties & some useful functions in JS");

let a = "Harry";
let b = "Shubham";

// console.log("Hey, I want this Roh"an ") & Roh"an in new line then , TO AVOID ERROR USE \ BEFORE "
console.log("Hey, I want this \nRoh\"an ");
console.log(a.toUpperCase());

// length is property, we didn't need () & toUpperCase is a function so we need ()

// we get a lot function on doing a.

console.log(a.slice(1,4)); // GOES FROM SECOND LETTER TO 4RTH LETTER , total 3 letters not 4

// if you want that it should go till words end then only give only first letters (INDEX)address

console.log(a.slice(1));
c=a.replace("Ha","99");
console.log(c) ;// only first replace occurance is considered
 
console.log(b.concat(a," Rahul","Priya")); // combines(concat) all the strings

str = "        Harry is the best tutor !    ."
// if i want to remove all the BEFORE & AFTER SPACES(whitespaces) from this then.... use trim()
d = str.trim() // removes all the space before word Harry
console.log(d)

console.log(a); // PROOF THAT STRINGS ARE IMMUTABLE !