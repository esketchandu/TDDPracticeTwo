const { expect } = require('chai');
const reverseWords = require("../reversearry.js");


describe("reverseWords", () => {
  it("should return the reverse of the word array", () => {
    const newWords1 = ['one', 'three', 'two'];
    const newWords2 = ['start', 'middle', 'end'];

    const wordsRever1 = reverseWords(newWords1);
    const expected1 = [ 'two', 'three', 'one' ];
    const wordsRever2 = reverseWords(newWords2);
    const expected2 = [ 'end', 'middle', 'start' ];

    expect(wordsRever1).to.eql(expected1);
    expect(wordsRever2).to.eql(expected2);
  });
});

// this checkes the edge case when there are no words in the array;
describe("reverseWords", () => {
  it("should return null for empty array", () => {
    const newWords1 = [];

    const wordsRever1 = reverseWords(newWords1);
    const expected1 = null;

    expect(wordsRever1).to.eql(expected1);
  });
});
