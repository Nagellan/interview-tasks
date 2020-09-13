/**
 * Task: ('AAABbbbBcCCC') => 'A3Bb3BcC3'
 */

const zipString = (str) => {};

console.log(zipString("AAABbbbBcCCC"));
console.log(
  zipString("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB")
);

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  const solution = (str) => {
    let zipped = "",
      current = str[0],
      count = 0;
    for (const index in str.split("")) {
      const char = str[index];
      if (char === current) count++;
      else {
        zipped += count > 1 ? `${current}${count}` : current;
        current = char;
        count = 1;
      }
    }

    return count > 1 ? `${zipped}${current}${count}` : zipped + current;
  };

  const solution1 = (str) => {
    if (str.length === 0) {
      return "";
    }

    let result = "";
    const acc = { symbol: str[0], count: 1 };

    for (let i = 1; i < str.length; i++) {
      const letter = str[i];

      if (acc.symbol === letter) {
        acc.count++;
      } else if (acc.count === 1) {
        result += acc.symbol;
        acc.count = 1;
      } else {
        result += acc.symbol + acc.count;
        acc.count = 1;
      }
      acc.symbol = letter;
    }
    if (acc.count === 1) {
      result += acc.symbol;
    } else {
      result += acc.symbol + acc.count;
    }

    return result;
  };

  console.log(solution("AAABbbbBcCCC"));
  console.log(
    solution("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB")
  );
  console.log(solution1("AAABbbbBcCCC"));
  console.log(
    solution1("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB")
  );
};

showSolutions();
