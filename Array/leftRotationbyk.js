// Bruteforce
// function leftRotationbyk(arr, k) {
//   k = k % arr.length;
//   for (let i = 1; i <= k; i++) {
//     let copy = arr[0];

//     for (let j = 0; j < arr.length - 1; j++) {
//       arr[j] = arr[j + 1];
//     }
//     arr[arr.length - 1] = copy;
//   }

//   return arr;
// }
// console.log(leftRotationbyk([1, 2, 3, 4, 5], 2));

// optimize way

function leftRotationbyk(arr, k) {
  let newArr = [];
  let i = 0;
  for (let j = 0; j < arr.length - 1; j++) {
    newArr[i] = arr[(i + k) % arr.length];
    i++;
  }

  return newArr;
}
console.log(leftRotationbyk([1, 2, 3, 4, 5], 2));
