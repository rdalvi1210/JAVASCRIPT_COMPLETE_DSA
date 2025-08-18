const arr = [1, 2, 3, 4, 5];
const k = 2;

function rotation(k, arr) {
  for (let j = 1; j <= k; j++) {
    let lastElement = arr[arr.length - 1];
    for (i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
  }
  return arr;
}
console.log(rotation(k, arr));
