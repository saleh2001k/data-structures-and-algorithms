const mergeSort = require("./Merge");

test("Sorts an array of numbers in ascending order", () => {
  const arr = [38, 27, 43, 3, 9, 82, 10];
  const sortedArr = [...arr].sort((a, b) => a - b); 
  mergeSort(arr);

  expect(arr).toEqual(sortedArr);
});

test("Sorts an empty array", () => {
  const arr = [];
  mergeSort(arr);

  expect(arr).toEqual([]);
});


