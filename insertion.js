function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    // Compare currentVal with the elements in the sorted portion
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j]; // Shift the larger element to the right
      j--;
    }

    // Place currentVal in its correct position
    arr[j + 1] = currentVal;
  }
  return arr;
}

module.exports = insertionSort;
