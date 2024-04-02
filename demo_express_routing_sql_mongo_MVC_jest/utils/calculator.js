const calculator = {
  add: (a, b) => {
    if (typeof a == "number" && typeof b == "number") {
      return a + b;
    } else {
      return NaN;
    }
  },
  sub: (a, b) => {
    if (typeof a == "number" && typeof b == "number") {
        return a - b;
      } else {
        return NaN;
      }
  },
  div: (a, b) => {
    if (a !== undefined && b !== undefined) {
      return a / b;
    } else {
      return null;
    }
  },
  mul: (a, b) => {
    if (a !== undefined && b !== undefined) {
      if (typeof a == "number" && typeof b == "number") {
        return a * b;
      } else {
        return NaN;
      }
    } else {
      return null;
    }
  },
};

module.exports = calculator;

// console.log(calculator.add(2, 2));
// console.log(calculator.sub(2, 2));
// console.log(calculator.mul(3, 2));
