var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("number array: ", numberArray);

function above5Filter(value){
    return value > 5;
}

var filteredNumberArray = numberArray.filter(above5Filter);

console.log("Filtered number array", filteredNumberArray);