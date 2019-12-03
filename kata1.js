let sumLargestNumbers = function(data) {
  let a = data[0];
  let b = data[0];
  for (let i = 1; i <= data.length; i++) {
    if (a > data[i]) {
      a = a;
    } else if (a < data[i]) {
      a = data[i];
    }
  }
  for (let i = 1; i <= data.length; i++) {
    if (b > data[i] && b < a) {
      b = b;
    } else if (b < data[i] && data[i] < a) {
      b = data[i];
    }
  }
  return a + b;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
