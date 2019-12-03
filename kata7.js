let camelCase = function(input) {
    var newString = "";
    for(i=0;i<input.length;i++){
        if(input[i-1] === " "){
            newString += input[i].toUpperCase();
        } else if (input[i] === " "){
            newString = newString;
        } else {
            newString += input[i]
        }
    }
    return newString;
};
  
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));