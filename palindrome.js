/**
 * Task: check if the string is palindrom
 */

const tests = ["Eva, can I see bees in a cave?", "QWErtyTRewq", "Yandex"];

const runTests = (func, tests) =>
  tests.reduce((result, test) => `${result}\n${test}: ${func(test)}`, "");

const isPalindrom = (word) => {};

console.log(runTests(isPalindrom, tests));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  const solution1 = (str, replaced = "") =>
    [...(replaced = str.replace(/[^\w]+/g, "").toLowerCase())]
      .reverse()
      .join("") === replaced;

  const solution2 = (str) => {
    const replaced = str.replace(/[^\w]+/g, "").toLowerCase();
    return replaced === replaced.split("").reverse().join("");
  };

  const solution3 = (str) => {
    let i = 0,
      j = str.length - 1,
      isSatisfy = true;
    const lowerStr = str.toLowerCase();
    const isNotChar = (char) => /[^\w]/.test(char);
    while (i <= j && isSatisfy) {
      if (isNotChar(lowerStr[i])) i++;
      else if (isNotChar(lowerStr[j])) j--;
      else isSatisfy = lowerStr[i++] === lowerStr[j--];
    }
    return isSatisfy;
  };

  const solution4 = (str) => {
    const lowerStr = str.toLowerCase();
    const isNotChar = (char) => /[^\w]/.test(char);
    const recursiveCall = (str, start, end) => {
      if (start > end) return true;
      while (isNotChar(str[start])) start++;
      while (isNotChar(str[end])) end--;
      return str[start++] === str[end--]
        ? recursiveCall(str, start, end)
        : false;
    };
    return recursiveCall(lowerStr, 0, lowerStr.length - 1);
  };

  console.log(runTests(solution1, tests));
  console.log(runTests(solution2, tests));
  console.log(runTests(solution3, tests));
  console.log(runTests(solution4, tests));
};

showSolutions();
