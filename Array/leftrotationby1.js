function leftrotationby1(arr) {
  let firstElement = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstElement;

  return arr;
}
console.log(leftrotationby1([1, 2, 3, 4]));
