/**
 * Task: ([3, 2, 1, 5, 6, -1, 10]) => "-1,1-3,5-6,10"
 */

const numSortCompareFn = (a, b) => a - b;

const zipArray = (array) =>
  [...array]
    .sort(numSortCompareFn)
    .reduce((resultArr, num) => {
      // number OR array of numbers
      const lastResultArrElem =
        resultArr.length === 0 ? -Infinity : resultArr[resultArr.length - 1];

      if (typeof lastResultArrElem === "number") {
        if (num - lastResultArrElem === 1) {
          return [...resultArr.slice(0, -1), [lastResultArrElem, num]];
        } else {
          return [...resultArr, num];
        }
      } else {
        const lastOfTheLastNum =
          lastResultArrElem[lastResultArrElem.length - 1];
        if (num - lastOfTheLastNum === 1) {
          return [...resultArr.slice(0, -1), [...lastResultArrElem, num]];
        } else {
          return [...resultArr, num];
        }
      }
    }, [])
    .map((elem) =>
      typeof elem === "number" ? elem : `${elem[0]}-${elem[elem.length - 1]}`
    )
    .join(",");

console.log(zipArray([]));
console.log(zipArray([0]));
console.log(zipArray([3, 2, 1, 5, 6, -1, 10]));
console.log(zipArray([4, 6, 7, 8, 9, -1, 0, 1]));
console.log(zipArray([1, 2, 3]));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  const numericalSort = (a, b) => a - b;

  // zipping
  const solution1 = (array) => {
    const sorted = array.sort(numericalSort);
    return sorted.reduce((accum, current) => `${accum},${current}`);
  };

  // zippingJoin
  const solution2 = (array) => {
    const sorted = array.sort(numericalSort);
    return sorted.join(",");
  };

  function solution3(a) {
    a = [...a];
    a = a.sort((a, b) => a - b);
    let first = a[0];
    let last = a[0];
    let res = [];

    a.forEach((el) => {
      if (el === a[0]) return;
      if (last + 1 !== el) {
        if (first === last) {
          res.push(first);
        } else {
          res.push(`${first}-${last}`);
        }
        first = el;
      }
      last = el;
    });

    return first === last
      ? [...res, first].join(",")
      : [...res, `${first}-${last}`].join(",");
  }

  console.log(
    "[3, 2, 1, 5, 6, -1, 10] => ",
    solution1([3, 2, 1, 5, 6, -1, 10])
  );
  console.log(
    "[3, 2, 1, 5, 6, -1, 10] => ",
    solution2([3, 2, 1, 5, 6, -1, 10])
  );
  console.log(solution3([3, 2, 1, 5, 6, -1, 10]));
  console.log(solution3([4, 6, 7, 8, 9, -1, 0, 1]));
  console.log(solution3([1, 2, 3]));
};

// showSolutions();
