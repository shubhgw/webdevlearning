
let ary = [1, 2, 3];
let ary2 = [4, 5, 6];
let ary3 = [7, 8, 9];
// Index : 0 1 2 

let ary4 = ary.concat(ary2 ,ary3);
console.log(ary4);

let ary5 = [1,5,2,'harry', "marry",234] ;
console.log(ary5.sort());
console.log(ary5);

let ary6 = [1,5,2,3,342,2222,234] ;
ary6.splice(1,3,9,99,999); // from position 1 remove 3 elements & add next three given elements at place of removed
console.log(ary6);


let ary7 = [1,5,2,'harry', "marry",234] ;
ary8 = ary7.slice(2) ;
ary9 = ary7.slice(2,4);
ary10 = ary7.reverse()
console.log(ary8) ;
console.log(ary9) ;
console.log((ary10)) ;