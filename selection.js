function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // Assume the first element is the minimum

    // Find the index of the smallest element in the unsorted portion
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted portion
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

module.exports = selectionSort;
