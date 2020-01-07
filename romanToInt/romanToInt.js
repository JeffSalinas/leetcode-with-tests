const romanToInt = function (roman) {
  let result = 0;
  let options = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let index = 0;

  while (index < roman.length) {
    if (options[roman[index]] >= options[roman[index + 1]] || index === roman.length - 1) {
      result += options[roman[index]];
      index++;
    } else {
      result += options[roman[index + 1]] - options[roman[index]] ;
        index = index + 2;
    } 
  }

  return result;
}

module.exports = { romanToInt };