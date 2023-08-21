# Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it has the advantage of being easy to understand and implement.

![alt](./assets/gif.gif)

### Pseudo-code:

```bash
function insertionSort(arr)
    for i from 1 to length of arr - 1
        currentElement = arr[i]
        j = i
        while j > 0 and arr[j - 1] > currentElement
            arr[j] = arr[j - 1]
            j = j - 1
        arr[j] = currentElement
    end for
    return arr
end function
```

### Trace

Sample Array: [8,4,23,42,16,15]

Start with the second element (index 1), which is 4. Compare it to the element to its left (index 0), which is 8. Since 4 is less than 8, we swap them.

- Array after the first pass: [4, 8, 23, 42, 16, 15]

Move to the third element (index 2), which is 23. Compare it to the element to its left (index 1), which is 8. Since 23 is greater than 8, we don't swap them.

- Array remains the same: [4, 8, 23, 42, 16, 15]

Move to the fourth element (index 3), which is 42. Compare it to the element to its left (index 2), which is 23. Since 42 is greater than 23, we don't swap them.

- Array remains the same: [4, 8, 23, 42, 16, 15]

Move to the fifth element (index 4), which is 16. Compare it to the element to its left (index 3), which is 42. Since 16 is less than 42, we swap them.

- Array after this pass: [4, 8, 23, 16, 42, 15]

Now, we compare the element 16 with the element to its left (index 2), which is 23. Since 16 is less than 23, we swap them.

- Array after this pass: [4, 8, 16, 23, 42, 15]

Finally, move to the last element (index 5), which is 15. Compare it to the element to its left (index 4), which is 42. Since 15 is less than 42, we swap them.

- Array after this pass: [4, 8, 16, 15, 23, 42]

The entire array has been sorted.

The sorted array is [4, 8, 15, 16, 23, 42].

### Efficency

- Time: O(n^2)
  The basic operation of this algorithm is comparison. This will happen n \ * (n-1) number of times concluding the algorithm to be n squared.

- Space: O(1)
  No additional space is being created. This array is being sorted in place.

### Code

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}
```
