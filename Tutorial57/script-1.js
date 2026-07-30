
console.log("In this we will discuss about switch case statements")
// these are like match case statements in python

// using break is necessary otherwise it will also execute default block 

switch (15){
    case 2:
        console.log("This block is not executed as 2 is not equal to 15");
        break;
    case 3:
        console.log("This block is not executed as 3 is not equal to 15");
        break;
    case 15:
        console.log("This will be in the terminal !");
        break;
    default:
        console.log("This gets executed if nothings matches with cases")
    
}