/**
 * Task: check if the word is anagram of another word
 */

const countLetters = (word) =>
  word
    .split("")
    .reduce(
      (result, letter) => ({ ...result, [letter]: (result[letter] || 0) + 1 }),
      {}
    );

const areArraysEqual = (arr1, arr2) =>
  arr1.every((key) => arr2.includes(key)) &&
  arr2.every((key) => arr1.includes(key));

const areObjectsEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (!areArraysEqual(obj1Keys, obj2Keys)) return false;
  return obj1Keys.reduce(
    (result, key) => result || obj2[key] === obj1[key],
    false
  );
};

const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;
  const word1LettersCount = countLetters(word1);
  const word2LettersCount = countLetters(word2);
  return areObjectsEqual(word1LettersCount, word2LettersCount);
};

console.log(isAnagram("123", "321"));
console.log(isAnagram("122", "321"));
console.log(isAnagram("qwe", "wqe"));
console.log("word", "dowr:", isAnagram("word", "dowr"));
console.log("word", "dowwr:", isAnagram("word", "dowwr"));

// Wrap/Hide this function's body using your IDE
const showSolutions = () => {
  // isAnagram
  const solution1 = (word, otherWord) => {
    const letters1 = {};
    const letters2 = {};
    for (const letter of word) {
      letters1[letter] = letters1[letter] + 1 || 1;
    }
    for (const letter of otherWord) {
      letters2[letter] = letters2[letter] + 1 || 1;
    }

    if (Object.keys(letters1).length !== Object.keys(letters2).length)
      return false;

    for (const letter in letters1) {
      if (letters1[letter] !== letters2[letter]) return false;
    }

    return true;
  };

  const wordToObj = (word) => {
    return word
      .split("")
      .reduce((obj, char) => ({ ...obj, [char]: obj[char] + 1 || 1 }), {});
  };

  // isAnagrams
  const solution2 = (word1, word2) => {
    const obj1 = wordToObj(word1);
    const obj2 = wordToObj(word2);

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    return Object.entries(obj1).every(([key, value]) => obj2[key] === value);
  };

  console.log(solution1("123", "321"));
  console.log(solution1("122", "321"));
  console.log(solution1("qwe", "wqe"));
  console.log("word", "dowr:", solution2("word", "dowr"));
  console.log("word", "dowwr:", solution2("word", "dowwr"));
};

// showSolutions();
