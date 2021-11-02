// An a array is a collection of data saved under one variable.
let studentNames = [];
let studentAges = new Array();
// the two arrays above are empty
let lan = ["Eng", "Fr", "Esp", "Ar"]
let countries =  new Array("USA", "Ukrain", "Serbia", "Canada");
let details = ["Sam", 25, "A", 4.67]; //arrays can hold multiple datatypes of data at once.

lan.push("Swa"); //adding a new item into the array
// console.log(lan);
// countries.pop();  // this method removes the last item in the array
// console.log(countries);

//determinethe lenght of an arrya ie the number of items in the array
// console.log(details.length);
//accessing an array item through its index
// console.log(details[0]);
// console.log(details[1]);

// console.log(countries.indexOf("USA"));
//array.splice accepts 3 arguments. 1st is the index of the item to be spliced, 2nd the number of items to be removed, the items to be added into the array
countries.splice(2, 0, "Poland");
// console.log(countries);
lan.splice(4, 0, "Kikuyu");
// console.log(lan);

// for (let i = 0; i < lan.length; i ++){
//     console.log(lan[i]);
// }

// console.log(lan.length);
// for (let x = 0; x < 6; x++){
//     console.log(x);
// }

function findRussian(){
    for (let counter = 0; counter < lan.length; counter ++){
        if(lan[counter] == "Esp"){
            return "Russian language is saved on index "+counter;
        }
    }
    return "Russian is not saved in your list of languages.";
}

let findRu = findRussian();
console.log(findRu);