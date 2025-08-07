function secondMax(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

console.log(secondMax([1, 2, 34, 5, 56]));
