/*
Task:
  const o = {
    a: {
      b: {},
      c: 42
    },
    z: null
  };

  (o, 'a.c') => 42
  (o, 'a.d') => undefined
  (o, 'z') => null
*/

const obj = {
  a: {
    b: {},
    c: 42,
  },
  d: null,
};

const getProperty = (obj, props) => {};

console.log(getProperty(obj, "a"));
console.log(getProperty(obj, "a.b"));
console.log(getProperty(obj, "a.c"));
console.log(getProperty(obj, "a.z"));
console.log(getProperty(obj, "d"));
console.log(getProperty(obj, ""));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  const solution = (obj, props) => {
    const [property, ...rest] = props.split(".");
    const got = obj[property];
    return rest.length === 0 ? got : solution(got, rest.join("."));
  };

  console.log(solution(obj, "a"));
  console.log(solution(obj, "a.b"));
  console.log(solution(obj, "a.c"));
  console.log(solution(obj, "a.z"));
  console.log(solution(obj, "d"));
  console.log(solution(obj, ""));
};

showSolutions();
