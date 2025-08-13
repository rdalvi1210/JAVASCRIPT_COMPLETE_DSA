// find sum of pairs matches the targetz
let target = 6;

let set = new Set();
let found = false;
for (i = 0; i < arr.length; i++) {
  let num = target - arr[i];
  x;
  if (set.has(num)) {
    found = true;
    break;
  }
  set.add(num);
}

if (!found) {
  console.log(false);
} else {
  console.log(true);
}

// 2nd way
let arr = [2, 4, 6, 7, 35, 5];

let target = 6;

let found = false;

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

// frequesnsies of character
let str = "hello";

let arr = new Array(128).fill(0);

for (let i = 0; i < str.length; i++) {
  let index = str.charCodeAt(i);
  arr[index] = arr[index] + 1;
}

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(String.fromCharCode(i) + " appears at " + arr[i] + " times");
  }
}

// 2nd way find frequency
let str = "hello";

let arr = new Array(128).fill(0);
let order = [];

for (let i = 0; i < str.length; i++) {
  let index = str.charCodeAt(i);

  if (arr[index] === 0) {
    order.push(index);
  }
  arr[index] = arr[index] + 1;
}

for (let idx of order) {
  console.log(String.fromCharCode(idx) + " appears at " + arr[idx] + " times");
}

// optimize way to find frequency
let str = "hello";

let freq = {};

for (i = 0; i < str.length; i++) {
  if (freq[str[i]]) {
    freq[str[i]] = freq[str[i]] + 1;
  } else {
    freq[str[i]] = 1;
  }
}

for (let i in freq) {
  console.log(i + " appears at " + freq[i] + " times");
}
