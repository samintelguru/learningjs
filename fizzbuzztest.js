//this is a test to check divisibility. its a for loop with if statements inside it.
/* for all the numbers between 1 and 50,
if a number is divisble by 3 print fizz instead of the number,
if it is divisible by 5 print buzz instead of the number 
if it is divisible by both 3 and 5 print fizzbuzz instead of the number
and if is not divisbible by either 3 or 5 print the number itself.
*/

for (let counter = 1; counter <=50; counter++){
    if(counter % 5 == 0 && counter % 3 == 0){
        console.log("fizzbuzz");
    }else if(counter % 5 == 0){
        console.log("buzz");
    }else if (counter % 3 ==0){
        console.log("fizz");
    }else{
        console.log(counter);
    }
}