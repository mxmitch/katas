const makeCase = function(input, casing) {
    let newString = "";

    //If the casing isn't an array, make it an array
    if (Array.isArray(casing) === false) {
        var newArray = [];
        newArray.push(casing);
        casing = newArray;
    }

    //Camel case function
    const camel = function() {
        for (i = 0; i < input.length; i++) {
            if (input[i - 1] === " ") {
                newString += input[i].toUpperCase();
            } else if (input[i] === " ") {
                newString = newString;
            } else {
                newString += input[i];
            }
        }
    }
    //Pascal case function
    const pascal = function() {
        newString += input[0].toUpperCase();
        for (i = 1; i < input.length; i++) {
            if (input[i - 1] === " ") {
                newString += input[i].toUpperCase();
            } else if (input[i] === " ") {
                newString = newString;
            } else {
                newString += input[i];
            }
        }
    }

    //Snake case function
    const snake = function() {
        for (i = 0; i < input.length; i++) {
            if (input[i] === " ") {
                newString += "_";
            } else {
                newString += input[i];
            }
        }
    }

    //Kebab case function
    const kebab = function() {
        for (i = 0; i < input.length; i++) {
            if (input[i] === " ") {
                newString += "-";
            } else {
                newString += input[i];
            }
        }
    }

    //Title case function
    const title = function() {
        newString += input[0].toUpperCase();
        for (i = 1; i < input.length; i++) {
            if (input[i - 1] === " ") {
                newString += input[i].toUpperCase();
            } else {
                newString += input[i];
            }
        }
    }

    //Vowel case function
    const vowel = function() {
        for (i = 0; i < input.length; i++) {
            if ((input[i] === "a") || (input[i] === "e") || (input[i] === "i") || (input[i] === "o") || (input[i] === "u")) {
                newString += input[i].toUpperCase();
            } else {
                newString += input[i];
            }
        }
    }

    //Consonant case function
    const consonant = function() {
        for (i = 0; i < input.length; i++) {
            if ((input[i] != "a") && (input[i] != "e") && (input[i] != "i") && (input[i] != "o") && (input[i] != "u")) {
                newString += input[i].toUpperCase();
            } else {
                newString += input[i];
            }
        }
    }

    //Upper case function
    const upper = function() {
        for (i = 0; i < input.length; i++) {
            newString += input[i].toUpperCase();
        }
    }

    //Case function
    for (var i = 0; i < casing.length; i++) {
        if (casing[i] === "camel") {
            camel(newString);
        } else if (casing[i] === "pascal") {
            pascal(newString);
        } else if (casing[i] === "snake") {
            snake(newString);
        } else if (casing[i] === "kebab") {
            kebab(newString);
        } else if (casing[i] === "title") {
            title(newString);
        } else if (casing[i] === "vowel") {
            vowel(newString);
        } else if (casing[i] === "consonant") {
            consonant(newString);
        } else if (casing[i] === "upper") {
            upper(newString);
        }
    }
    return newString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));