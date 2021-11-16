const sumAll = function (num1, num2) {
  let sum = num1;

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }

  if (num1 > num2) {
    for (let j = num1 - 1; j >= num2; j--) {
      sum += j;
    }
  }
  for (let i = num1 + 1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
