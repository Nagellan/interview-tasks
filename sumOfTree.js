/*
Task: calculate sum of tree
 */

const sumOfTree = ({value, next}) => {
  return !!next ? value + next.reduce((accum, current) => accum + sumOfTree(current), 0) : value;
};

const tree = {
  value: 3,
  next: [{
      value: 2,
      next: null
  }, {
      value: 1,
      next: [{
        value: 4,
        next: null
      }, {
        value: 4,
        next: null
      }]
  }]
};

console.log('expected: 14, actual:', sumOfTree(tree));