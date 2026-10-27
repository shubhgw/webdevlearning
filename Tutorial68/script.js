
console.log("Harry");

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = "pink" // pinks the 2nd element but if we want to do of a specific then we use ID 

document.getElementById("red-box").style.backgroundColor ="grey"

// document.querySelector(".box").style.backgroundColor = "green" // selects the first element having box class if want to get all then use querySelectorAll then use for loop to access all the elements

document.querySelectorAll(".box").forEach(element => {
    console.log(element)
    element.style.backgroundColor=("green")
    
});
console.log(document.getElementsByTagName("div"))

console.log(document.getElementsByName("Name"))

console.log(boxes[2].matches(".box"))

console.log(document.querySelector(".container").contains(boxes[2]))