const isValid = (string) => {
  let stack = [];
  const findIsOpen = (char) => {
    if (char === '{' || char === '[' || char === '(') {
      return true;
    } else {
      return false;
    }
  };
  const findChar = (char) => {
    if (char === '{' || char === '}') {
      return '{}';
    } else if (char === '[' || char === ']') {
      return '[]';
    } else {
      return '()';
    }
  };

  if (!string) return false;

  for (let i = 0; i < string.length; i++) {
    let option = findChar(string[i]);
    let isOpen = findIsOpen(string[i]);

    if (stack.length === 0) {
      if (isOpen) {
        stack.push(string[i]);
      } else {
        return false;
      }
    } else {
      if (isOpen) {
        stack.push(string[i]);
      } else {
        if (findIsOpen(stack[stack.length - 1]) && findChar(stack[stack.length - 1]) === option) {
          stack.pop();
        } else {
          stack.push(string[i]);
        }
      }
    }
  }

  return stack.length > 0 ? false: true;
};

module.exports = {isValid}

