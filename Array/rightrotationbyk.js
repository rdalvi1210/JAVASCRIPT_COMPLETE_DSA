// Brute force
// function rightRotationbyk(arr, k) {
//   k = k % arr.length;
//   for (let i = 1; i <= k; i++) {
//     let copy = arr[arr.length - 1];

//     for (let j = arr.length - 1; j > 0; j--) {
//       arr[j] = arr[j - 1];
//     }
//     arr[0] = copy;
//   }

//   return arr;
// }
// console.log(rightRotationbyk([1, 2, 3, 4, 5], 2));

// optimize

function rightRotationbyk(arr, k) {
  let newArr = [];
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    newArr[(j + k) % arr.length] = arr[j];
    i++;
  }

  return newArr;
}
console.log(rightRotationbyk([1, 2, 3, 4, 5], 2));
