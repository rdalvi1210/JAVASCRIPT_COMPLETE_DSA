// let num1 = 0;
// let num2 = 1;
// let num3 = 1;

// while (num3 <= 10) {
//   console.log(num3 + " ");
//   num3 = num1 + num2;
//   num1 = num2;
//   num2 = num3;
// }

// for (let i = 1; i < 10; i++)
// {
//     console.log(num3);
//     num3 = num1 + num2;
//     num1 = num2;
//     num2 = num3
// }

// let arr = [10, 2, 7, 4, 1, 9, 3];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// const findSecondLargest = (arr) => {
//   let largestNum = -Infinity;
//   let secondLargest = -Infinity;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > largestNum) {
//       secondLargest = largestNum;
//       largestNum = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] < largestNum) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// };
// console.log(findSecondLargest([11,10, 2, 7, 4, 1, 9, 3]));

// let str = "mada";

// let start = 0;
// let end = str.length - 1;
// let ispalin = true;
// while (start < end) {
//   if (str[start] !== str[end]) {
//     ispalin = false;
//     break;
//   }
//   start++;
//   end--;
// }

// console.log(ispalin)

// function removeDuplicate(arr) {
//   let newArray = [];
//   let seen = {};
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (!seen[arr[i]]) {
//       newArray[index++] = arr[i];
//       seen[arr[i]] = true;
//     }
//   }

//   return newArray;
// }
// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

// function findfrequency(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] += 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }
//   return obj;
// }
// console.log(findfrequency([10, 10, 1, 2, 2, 2, 3, 3, 4, 4]));

//Reversed Num

// let num = 123;
// let reversed = 0;
// while (num > 0) {
//   let lastNum = num % 10;
//   reversed = reversed * 10 + lastNum;
//   num = Math.floor(num / 10);
// }
// console.log(reversed);

//Strong Number

// let num = 145;
// let orgNum = num;
// let sum = 0;
// while (num > 0) {
//   let lastNum = num % 10;
//   let fact = 1;
//   for (let i = 2; i <= lastNum; i++) {
//     fact *= i;
//   }
//   sum = sum + fact;
//   num = Math.floor(num / 10);
// }
// console.log(orgNum == sum);

//Armstrong Number

// let num = 153;
// let originalNum = num;
// let copy = num;
// let count = 0;

// while (num > 0) {
//   num = Math.floor(num / 10);
//   count = count + 1;
// }

// let sum = 0;
// while (copy > 0) {
//   let lastNum = copy % 10;
//   let product = 1;
//   for (let i = 1; i <= count; i++) {
//     product = product * lastNum;
//   }
//   sum = sum + product;
//   copy = Math.floor(copy / 10);
// }
// console.log(originalNum == sum)

//Reversed
// let num = 1234;

// let reversed = 0;
// while (num > 0) {
//   let lastNum = num % 10;
//   reversed = reversed * 10 + lastNum;
//   num = Math.floor(num / 10);
// }
// console.log(reversed);

// let arr = [1, 2, 3, 4, 5];
// let isSorted = true;
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i + 1]) {
//     isSorted = false;
//     break;
//   }
// }
// console.log(isSorted);

// let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]] += 1;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }

// let maxCount = 0;
// let mostfreq = ""
// for (let key in obj) {
//   if (obj[key] > maxCount) {
//     maxCount = obj[key];
//     mostfreq = key;
//   }
// }
// console.log(mostfreq);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     sum = sum + arr[i][j];
//   }
//   console.log(`sum of ${i + 1}st row is ${sum}`);
// }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let newArray = [[], [], []];
// for (let i = 0; i < arr[0].length; i++) {
//   for (let j = 0; j <= i; j++) {
//     newArray[0].push(arr[j][i]);
//   }
// }
// console.log(newArray);

// let arr = [2, 4, 1, 2, 1, 10];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr, "arr");

// let arr = [1, 27, 2, 4, 7, 8];
// let target = 237;
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == target) {
//     found = true;
//     break;
//   }
// }
// console.log(found);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 70;
let found = false;
let start = 0;
let end = arr.length - 1;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] == target) {
    found = true;
    break;
  } else if (target < arr[mid]) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(found);
