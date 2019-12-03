let repeatNumbers = function(data) {
    var newArray = [];
    for (i = 0; i < data.length; i++) {
        var newString = "";
        for (j = 0; j < (data[i])[1]; j++) {
            newString += (data[i])[0].toString();
        }
        newArray.push(newString);
    }
    return newArray.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));