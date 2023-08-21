const insertionSort = require("./insertion");

describe("insertionSort", () => {
  it("should correctly sort an array of numbers in ascending order", () => {
    const unsortedArray = [5, 2, 9, 3, 6];
    const sortedArray = insertionSort(unsortedArray);
    expect(sortedArray).toEqual([2, 3, 5, 6, 9]);
  });
});
