function checkStrongNum(n) {
  let sum = 0;
  let copyNum = n;
  while (n > 0) {
    let rem = n % 10;
    let fact = 1;
    for (let i = 1; i <= rem; i++) {
      fact = fact * i;
    }
    sum = sum + fact;
    n = Math.floor(n / 10);
  }

  return copyNum === sum;
}
console.log(checkStrongNum(123));
