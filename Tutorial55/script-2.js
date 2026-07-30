
// primitive data types & objects : null, number, string , symbol , undefined, boolean, bigint

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p , q, r)
console.log(typeof x, typeof y, typeof z, typeof p , typeof q, typeof r)


// q) why type of null is object ? : interview qs

// object in javascript is combination of key value pairs

let obj = {
    // two words name should be written in double quotes
    name:"shubham",
    id:96,
    "job role":"software engineer",
    "is_handsome":true,
}

console.log(obj)
obj.salary = "56crore"
console.log(obj)
obj.salary = "500crore"
console.log(obj)

