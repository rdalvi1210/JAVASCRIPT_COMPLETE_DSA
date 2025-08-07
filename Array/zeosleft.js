function zerosinleftside(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

console.log(zerosinleftside([1, 4, 0, 4, 0]));
