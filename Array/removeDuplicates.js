// function removeDuplicates(arr) {
//   let obj = {};
//   let newArray = [];
//   let j = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (obj[val] !== val) {
//       obj[val] = val;
//       newArray[j++] = val;
//     }
//   }

//   return newArray;
// }

// let arr = removeDuplicates([2, 2, 1, 4, 4, 5]);
// console.log(arr);

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// }

// function removeDuplicates(arr) {
//   if (arr.length === 0) return arr;

//   bubbleSort(arr);
//   let writeIndex = 1;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       arr[writeIndex] = arr[i];
//       writeIndex++;
//     }
//   }

//   arr.length = writeIndex;
//   return arr;
// }

// // Example
// let nums = [4, 2, 5, 1, 2, 4, 3, 1];
// console.log(removeDuplicates(nums));
// // Output: [1, 2, 3, 4, 5]
