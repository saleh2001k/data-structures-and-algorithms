# Merge Sort

Merge Sort is a popular sorting algorithm that uses a divide-and-conquer approach to sort an array.

![alt](./assets/me.gif)

### Pseudo-code:

```bash
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

### Trace

1. Divide the unsorted list into n sublists, each containing one element.
2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining.

##### Trace with Input Array [8, 4, 23, 42, 16, 15]

#### Step 1: Splitting the Array

1.1. Initial call to `mergeSort(arr)` with `[8, 4, 23, 42, 16, 15]`.

- Calculate `mid` as `3` (the middle index).
- Split the array into `left` and `right`:
  - `left` = `[8, 4, 23]`
  - `right` = `[42, 16, 15]`

#### Step 2: Recursively Sort Left and Right

2.1. Sorting the `left` array `[8, 4, 23]`:

- Recursive call to `mergeSort(left)` with `[8, 4, 23]`.
  - Calculate `mid` as `1`.
  - Split the array into `left` and `right`:
    - `left` = `[8]`
    - `right` = `[4, 23]`
- Sorting `left` (no change).
- Recursive call to `mergeSort(right)` with `[4, 23]`.
  - Calculate `mid` as `1`.
  - Split the array into `left` and `right`:
    - `left` = `[4]`
    - `right` = `[23]`
- Sorting `left` (no change).
- Sorting `right` (no change).
- Merging `left` and `right` to get `[4, 23]`.
- The sorted `left` array is now `[4, 23, 8]`.

  2.2. Sorting the `right` array `[42, 16, 15]`:

- Recursive call to `mergeSort(left)` with `[42, 16, 15]`.
  - Calculate `mid` as `1`.
  - Split the array into `left` and `right`:
    - `left` = `[42]`
    - `right` = `[16, 15]`
- Sorting `left` (no change).
- Recursive call to `mergeSort(right)` with `[16, 15]`.
  - Calculate `mid` as `1`.
  - Split the array into `left` and `right`:
    - `left` = `[16]`
    - `right` = `[15]`
- Sorting `left` (no change).
- Sorting `right` (no change).
- Merging `left` and `right` to get `[15, 16]`.
- The sorted `left` array is now `[15, 16, 42]`.

#### Step 3: Merging Left and Right

3.1. Merging the sorted `left` and `right` arrays of the original call:

- Merging `[4, 23, 8]` (left) and `[15, 16, 42]` (right) into the original array `[8, 4, 23, 42, 16, 15]`.

---

#### Efficency

- Time: O(n log n)
  Merge Sort divides the input array into two halves, recursively sorts each half, and then merges them back together. The key to Merge Sort's efficiency is that the merging step can be performed in O(n) time, and it's performed log(n) times (the number of times the array is divided in half), resulting in the overall time complexity of O(n log n) for all cases.

- Space: O(m)
  Merge Sort typically requires additional memory to store the two halves of the array during the merge step. This auxiliary space is the main drawback of Merge Sort compared to some other sorting algorithms, but it guarantees stable and efficient sorting. In cases where memory usage is a concern, in-place variations of Merge Sort can be used, which reduce the space complexity but are generally more complex to implement.

---

### Code

```javascript
function mergeSort(arr) {
  const n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

module.exports = mergeSort;
```
