function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

module.exports = bubbleSort;

// Example usage:
//   const arr = [12, 11, 13, 5, 6, 7];
//   const sortedArr = bubbleSort(arr);
//   console.log("Bubble Sort:", sortedArr);
