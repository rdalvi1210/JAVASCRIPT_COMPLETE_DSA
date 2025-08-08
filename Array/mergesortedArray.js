function mergeSortedArray(arr1, arr2) {
  let temp = [];
  let i = (j = k = 0);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      temp[k++] = arr2[j++];
    } else {
      temp[k++] = arr1[i++];
    }
  }

  while (i < arr1.length) {
    temp[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    temp[k++] = arr2[j++];
  }

  return temp;
}
console.log(mergeSortedArray([3, 5, 7], [2, 4, 6, 8]));
