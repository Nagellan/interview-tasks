/**
 * Task: implement functions that can calculate expressions like (2).plus(3).minus(1) = 4
 * (In modern standards not recommended to implement any additional functions in common (basic) prototypes)
 */

console.log("2 + 3 = ", (2).plus(3));
console.log("2 + 3 - 1 = ", (2).plus(3).minus(1));
console.log("2 * 3 + 1 = ", (2).multiply(3).plus(1));
console.log("6 / 3 * 1 = ", (6).divide(3).multiply(1));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  Number.prototype.plus = function (value) {
    return this + value;
  };
  Number.prototype.minus = function (value) {
    return this - value;
  };
  Number.prototype.multiply = function (value) {
    return this * value;
  };
  Number.prototype.divide = function (value) {
    return this / value;
  };

  console.log("2 + 3 = ", (2).plus(3));
  console.log("2 + 3 - 1 = ", (2).plus(3).minus(1));
  console.log("2 * 3 + 1 = ", (2).multiply(3).plus(1));
  console.log("6 / 3 * 1 = ", (6).divide(3).multiply(1));
};

// showSolutions();
