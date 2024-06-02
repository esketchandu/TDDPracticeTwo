// This function takes in an array of words and returns a new array with the words reversed
// returns null if the array is empty

function reverseWords(words) {
  if (words.length === 0) {
    return null;
  }

  let wordsReversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
      wordsReversed.push(words[i]);
  }
  return wordsReversed;
}

// const newWords = ['one', 'three', 'two']
// console.log(reverseWords(newWords)); // [ 'two', 'three', 'one' ]

//const newWords1 = []
//console.log(reverseWords(newWords1)); // null

module.exports = reverseWords;
