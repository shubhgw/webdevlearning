

// Business name generator 

// by combining list of adjectives and shop name and another word .... without using arrays 

// adjectives list : crazy , amazing , fire
// shop name : engine , foods , garments 
// Another word :bros , limited, hub


let min = 1;
let max = 7;
let random_Number = (Math.floor(Math.random() * (max - min + 1))) + min ;
console.log(random_Number);

let adjectives_list = "crazy amazing fire extraordinary toplevel ontop boss"
let shop_name = "engine foods garments constructors engineer manufactureres developers"
let Another_word = "bros limited hub creation power thing sense"


final_name = `Your desired Name : ${adjectives_list[random_Number]} ${shop_name[random_Number]} ${Another_word[random_Number] }`;
console.log(final_name)