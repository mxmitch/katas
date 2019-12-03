const urlDecode = function(text) {
  let result = {};
  newString = text.replace(/%20/g, " ").split(/=|&/);

  for (let i = 0; i < newString.length; i = i + 2) {
    result[newString[i]] = newString[i + 1];
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);