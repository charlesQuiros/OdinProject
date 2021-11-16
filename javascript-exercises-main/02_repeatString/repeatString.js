const repeatString = function (hey, repeat) {
  if (repeat === 0) {
    hey = "";
  } else if (repeat <= 0) {
    return "ERROR";
  }

  if (hey === "") {
    for (let i = 1; i < repeat; i++) {
      hey += "";
    }
    return hey;
  }

  for (let i = 1; i < repeat; i++) {
    hey += "hey";
  }

  return hey;
};

repeatString();

repeatString("hey", 10);

repeatString("hey", 1);

repeatString();

repeatString("hey", -1);

const number = Math.floor(Math.random() * 1000);

repeatString("hey", number);

// Do not edit below this line
module.exports = repeatString;
