/**
 * Task: print N-th solution number
 */

const fibonacci = (num) => {};

for (let i = 1; i < 20; i++) console.log(i, ":", fibonacci(i));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  const solution = (num, pre = 0, accum = 1) => {
    if (num < 2) return accum;
    return solution(num - 1, accum, pre + accum);
  };

  for (let i = 1; i < 20; i++) console.log(i, ":", solution(i));
};

showSolutions();
