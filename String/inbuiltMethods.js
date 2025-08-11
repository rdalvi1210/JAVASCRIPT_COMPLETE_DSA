// let str = "Ramchandra";

// console.log(str.slice(-4, -1));

const nums = "RRaam";

const obj = {};

for (let i = 0; i < nums.length; i++) {
  if (!obj[nums[i]]) {
    obj[nums[i]] = 1;
  } else {
    obj[nums[i]]++;
  }
}

for (let freq in obj) {
  if (obj[freq] == 1) {
    console.log(freq);
    break;
  }
}
// ["odd", "even", "odd", "even"]
