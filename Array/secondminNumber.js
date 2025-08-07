function secondMin(arr) {
  let min = Infinity;
  let second = Infinity;

  for (let num of arr) {
    if (num < min) {
      second = min;
      min = num;
    } else if (num < second) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

console.log(secondMin([1, 2, 34, 5, 56]));
