const removeFromArray = function (arr, ...removeVal) {
  return arr.filter((item) => !removeVal.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
