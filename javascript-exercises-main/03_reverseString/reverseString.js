// const reverseString = function (str) {
//   let array2 = [];
//   for (let i = 0; i < str.length; i++) {
//     str[i] += str.charAt(i);
//   }

//   for (let j = str.length - 1; j >= 0; j--) {
//     array2 += str[j];
//   }
//   return array2.toString();
// };

const reverseString = (str) => {
  str = str.split("").reverse().join("");
  return str;
};

// Do not edit below this line
module.exports = reverseString;
