let arr = [2, 4, 6, 7, 35, 5];

let target = 6;

// let set = new Set();
let found = false;
// for (i = 0; i < arr.length; i++) {
//   let num = target - arr[i];
// x
//   if (set.has(num)) {
//     found = true;
//     break;
//   }
//   set.add(num);
// }

// if (!found) {
//   console.log(false);
// } else {
//   console.log(true);
// }

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == target) {
      found = true;
      break;
    }
  }
  if (found) break;
}

if (found) {
  console.log(true);
} else {
  console.log(false);
}
