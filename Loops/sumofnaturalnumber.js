function sumofnnaturalnumber(n) {
  if (n <= 1) return "Invalid input";
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumofnnaturalnumber(2));
