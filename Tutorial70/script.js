
num = Math.random()
num1 = Math.floor(num*((5-1)+1))+1
console.log(num1)

// Choosing random box out of five
boxes = document.body.getElementsByClassName("box");
// Choosing random color out of five
colors = ["pink","lightgreen","cyan","yellow","grey"]

// applying the color 
boxes[num1-1].style.backgroundColor = colors[num1-1]