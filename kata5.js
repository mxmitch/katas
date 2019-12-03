const urlEncode = function(text) {
  var encoded = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      encoded.push("%20");
    } else {
      encoded.push(text[i]);
    }
  }
  return encoded.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
