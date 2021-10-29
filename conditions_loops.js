//in js testing conditions is very important. it involves a conditional statement
//that is executed if a certain condition is met.

// let dob = 2005;
// let currentTime = new Date();
// let thisYear = currentTime.getFullYear();

// if (thisYear - dob >= 18){
//     console.log("You are at the legal drinking age!");
// }else{
//     console.log("You are below the legal drinking age!");
// }

//a function is a set of code that is bundles together and executes a certain function
//functions accept user input throughparameters that will be passed to the function on call as arguments
// function greetings(){
//     console.log("Hello World!")
// }

// function salamu(name){
//     console.log("Hello "+name)
// }
//to execute the function we invoke it through a call
// greetings();
// salamu("Sammy");
// salamu("Dennis");

/*function ageCalculator(yob){    //yob is a parameter to allow input into the function
    let currentTime = new Date();  //this is a function variable. it can only be accesses wihtin the function
    let currentYear = currentTime.getFullYear();   //this is a function variable. it can only be accesses wihtin the function
    let age = currentYear - yob;   //this is a function variable. it can only be accesses wihtin the function

    return age; //this is how we end a fucntions operations
}

let umri = ageCalculator(1990); //the fucntion ageCalculator has a return statement. this implies that the function will leave behind some data after execution. we need to save the data in a variable
//the 1990 is an argument which is just some data passed to the function.
console.log(umri);


let umriSam = ageCalculator(1997);
console.log("Sam's age is "+umriSam);

let umriCheryl = ageCalculator(1991);
console.log("Cheryl's age is "+umriCheryl);
*/

function objectMaker(param1, param2, param3,param4){
    let yourObject = {
        prop1 : param1,
        prop2 : param2,
        prop3 : param3,
        prop4 : param4
    }
    return yourObject;
}


let employee = objectMaker("Sammy","IT","A",2000 );
console.log(employee);
