const repeatedWord = require("./repetedWord");

describe("repeatedWord function", () => {
  it("should return the first repeated word in a sentence", () => {
    expect(repeatedWord("Once upon a time, there was a brave princess who...")).toBe("a");
    expect(repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...")).toBe("it");
    expect(repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...")).toBe("summer");
  });

  it("should return null if no repeated words are found", () => {
    expect(repeatedWord("This is a test sentence with no repeated words.")).toBe(null);
  });

  it("should handle punctuation and case-insensitivity", () => {
    expect(repeatedWord("Hello, World! Hello, world!")).toBe("hello");
  });

});
