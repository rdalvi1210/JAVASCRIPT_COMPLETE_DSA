function negativeinleftside(arr) {
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (arr[i] < 0) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
    i++;
  }

  return arr;
}
console.log(negativeinleftside([-2, 3, -1, 3, 4, 6]));
