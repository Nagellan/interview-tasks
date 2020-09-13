const arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

const flatArray = (array) =>
  array.reduce(
    (resultArr, item) =>
      typeof item === "number"
        ? [...resultArr, item]
        : [...resultArr, ...flatArray(item)],
    []
  );

console.log(flatArray(arr1));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  // deepFlates
  const solution1 = (arr) =>
    arr.reduce(
      (acc, cur) =>
        Array.isArray(cur) ? [...acc, ...solution1(cur)] : [...acc, cur],
      []
    );

  // deepFlat
  const solution2 = (arr) =>
    arr.reduce(
      (acc, cur) =>
        Array.isArray(cur) ? acc.concat(solution2(cur)) : acc.concat(cur),
      []
    );

  console.log(solution1(arr1));
  console.log(solution2(arr1));
};

showSolutions();
