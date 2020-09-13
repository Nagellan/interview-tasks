/**
 * Task: implement sum() function being able to solve this:
 *   sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17)(200)()(12)
 */

const sum = () => {};

console.log(
  sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17)(200)()(12)
);

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  Math.sum = function (...args) {
    let sum = 0;
    for (const i of args) {
      sum += i;
    }
    return sum;
  };

  function solution(...a) {
    let solution = Math.sum(a);
    function help(...b) {
      solution += Math.sum(b);
      return help;
    }
    help[Symbol.toPrimitive] = () => solution;
    return help;
  }

  solution(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17)(200)()(
    12
  );
};

showSolutions();
