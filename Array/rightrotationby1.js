function rightRotationby1(arr) {
  let copy = arr[arr.length - 1];

  for (i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = copy;

  return arr;
}

console.log(rightRotationby1([1, 2, 3, 4, 5]));
