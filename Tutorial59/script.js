

// create a faulty calculator using javascript 


// it takes two numbers as input from the user 
// it performs wrong operations as folows

// + --> -
// * --> +
// - --> /
// / --> **

// it performs wrong operations 10% of the times 

// Hint : use Math.random()

console.log("Welcome to Ultimate Calculator");
console.log("Enter which operation u want to perform : 1-Addition , 2-Substraction , 3-Multiplication , 4-Divison");

function Calculator(o,a,b){

    if (Math.random()<0.1){
        console.log("Doing wrong calculations");
        if (o==1){
            return (a-b);
        }
        else if(o==2){
            return (a/b);
        }
        else if(o==3){
            return (a+b);
        }
        else if(o==4){
            return (a**b);
        }
        else{
            return "Wrong number !" ;
        }
    }
    else{
        console.log("Doing right calculations");
        if (o==1){
            return (a+b);
        }
        else if(o==2){
            return (a-b);
        }
        else if(o==3){
            return (a*b);
        }
        else if(o==4){
            return (a/b);
        }
        else{
            return "Wrong number !";
        }

    }

}

console.log(Calculator(1,3,5))