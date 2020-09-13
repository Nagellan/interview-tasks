/**
 * Task: create object from an array of objects
 */

const array = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];

const transform = (array) => {};

console.log(transform(array));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  // transform
  const solution = (array) => {
    return array.reduce(
      (accum, { name, value }) => ({ ...accum, [name]: value }),
      {}
    );
  };

  console.log(solution(array));
};

showSolutions();
