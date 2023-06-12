const reverseArray = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6])); // Output: [6, 5, 4, 3, 2, 1]
console.log(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12])); // Output: [-12, 823, -923, 10, 23, 3546, 2354, 89]
