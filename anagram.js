/**
 * Task: check if the word is anagram of another word
 */

const isAnagram = (word, otherWord) => {};

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

showSolutions();


// Wrap/Hide this function's body using your IDE
const showSolutions = () => {

}

showSolutions()