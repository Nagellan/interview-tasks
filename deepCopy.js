/**
 * Task: implement deep copy of object
 */

const obj = {
  a: 23,
  b: "str",
  c: {
    d: 45,
    e: "str2",
    f: [1, 2, 3],
  },
  g: ["a", "b", "c", { z: 2 }],
  h: null,
  i: Date.now(),
  j: undefined,
  k: Symbol("symbol"),
  f: () => "one",
  m: true,
};

const runTests = (solution) => {
  const copied = solution(obj);
  copied.a = 0;
  copied.b = "aaa";
  copied.c.d = 2;
  copied.c.e = "bbb";
  copied.c.f.push(4);
  copied.g[3].z = 3;
  copied.g.push("g");
  copied.h = 3;
  copied.i = Date.now();
  copied.j = 4;
  copied.k = Symbol("not original");
  copied.f = () => "two";
  copied.m = false;

  console.log(obj);
  console.log(solution(obj));
  console.log(copied);
  console.log(obj.f === solution(obj).f);
};

const deepCopy = (elem) => {
  if (elem instanceof Array) {
    return [...elem].map((elemItem) => deepCopy(elemItem));
  }

  if (elem instanceof Function) {
    return (...args) => elem.apply(this, args);
  }

  if (typeof elem === "object" && elem !== null)
    return Object.entries(elem).reduce(
      (prevElem, [key, value]) => ({ ...prevElem, [key]: deepCopy(value) }),
      {}
    );

  return elem;
};

runTests(deepCopy);

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  const solution1 = (obj) => {
    if (obj instanceof Function) return (...args) => obj.apply(this, args);

    if (obj instanceof Array) return [...obj].map((item) => solution1(item));

    if (typeof obj !== "object" || !obj) return obj;

    return Object.entries(obj).reduce(
      (accum, [key, value]) => ({ ...accum, [key]: solution1(value) }),
      {}
    );
  };

  const solution2 = (obj) => {
    if (obj instanceof Function) return (...args) => obj.apply(this, args);

    if (obj instanceof Array) return [...obj].map((item) => solution2(item));

    if (typeof obj !== "object" || !obj) return obj;

    const entries = Object.entries(obj);
    const resObj = {};
    for (const [key, value] of entries) {
      resObj[key] = solution2(value);
    }

    return resObj;
  };

  runTests(solution1);
  // runTests(solution2);
};

showSolutions();
