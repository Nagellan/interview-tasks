const arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

const flatArray = (array) => {};

console.log(flatArray(array));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  // deepFlates
  const solution1 = (arr) =>
    arr.reduce(
      (acc, cur) =>
        Array.isArray(cur) ? [...acc, ...deepFlat(cur)] : [...acc, cur],
      []
    );

  // deepFlat
  const solution2 = (arr) =>
    arr.reduce(
      (acc, cur) =>
        Array.isArray(cur) ? acc.concat(deepFlates(cur)) : acc.concat(cur),
      []
    );

  console.log(solution1(array));
  console.log(solution2(array));
};

showSolutions();
