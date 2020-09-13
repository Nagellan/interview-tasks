/**
 * Task: implement a function that get '*', 'c', 'b','i' as parameters and returns a string 'c*b*i'
 */

const joinTask = () => {};

console.log(joinTask("*", "c", "b", "i"));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  const solution1 = (concatValue, ...args) => args.join(concatValue);

  function solution2() {
    return [].slice.call(arguments, 1).join(arguments[0]);
  }

  console.log(solution1("*", "c", "b", "i"));
  console.log(solution2("*", "c", "b", "i"));
};

showSolutions();
