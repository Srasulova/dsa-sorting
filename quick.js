/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotValue = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]; // Swap elements
    }
  }

  // Swap the pivot element with the element at the swapIndex
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  return swapIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // Use the pivot function to find the correct pivot index
    let pivotIndex = pivot(arr, left, right);

    // Recursively apply quickSort to the left and right parts of the array
    quickSort(arr, left, pivotIndex - 1); // Left side of the pivot
    quickSort(arr, pivotIndex + 1, right); // Right side of the pivot
  }

  return arr;
}

module.exports = { quickSort, pivot };
