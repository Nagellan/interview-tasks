/**
 * Task: calculate sum of tree
 */

const tree = {
  value: 3,
  next: [
    {
      value: 2,
      next: null,
    },
    {
      value: 1,
      next: [
        {
          value: 4,
          next: null,
        },
        {
          value: 4,
          next: null,
        },
      ],
    },
  ],
};

const sumOfTree = () => {};

console.log("expected: 14, actual:", sumOfTree(tree));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  const solution1 = ({ value, next }) => {
    return !!next
      ? value + next.reduce((accum, current) => accum + solution1(current), 0)
      : value;
  };

  const solution2 = ((acc) => (tree) => {
    if (tree.value) {
      acc += tree.value;
    }
    if (tree.next) {
      tree.next.forEach(solution2);
    }
    return acc;
  })(0);

  console.log("expected: 14, actual:", solution1(tree));
  console.log("expected: 14, actual:", solution2(tree));
};

showSolutions();
