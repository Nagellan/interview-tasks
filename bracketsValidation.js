/**
 * Validate sequence of brackets
 */

// first three - true, other - false
const tests = ["((()))", "(()())()", "({}[()])", "()()(", "{{{][]}()}"];

const validate = (sequence) => {};

console.log(runTests(validate, tests));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  // validationRegExp
  const solution1 = (sequence) => {
    const regexp = /\(\)|\[]|{}/g;
    return regexp.test(sequence)
      ? solution1(sequence.replace(regexp, ""))
      : sequence.length === 0;
  };

  // validationStack
  const solution2 = (sequence) => {
    const stack = [];
    for (const char of sequence) {
      switch (char) {
        case "(":
        case "[":
        case "{":
          stack.push(char);
          break;
        case ")":
          if (stack.pop() !== "(") return false;
          break;
        case "]":
          if (stack.pop() !== "[") return false;
          break;
        case "}":
          if (stack.pop() !== "{") return false;
          break;
        default:
          return false;
      }
    }
    return stack.length === 0;
  };

  const runTests = (validation, tests) =>
    tests.reduce(
      (result, test) => `${result}\n${test}: ${validation(test)}`,
      ""
    );

  console.log(runTests(solution1, tests));
  console.log(runTests(solution2, tests));
};

showSolutions();
