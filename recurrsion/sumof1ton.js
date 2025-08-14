function sumof1tonNumbers(n) {
  if (n == 1) return 1;
  return n + sumof1tonNumbers(n - 1);
}

console.log(sumof1tonNumbers(5));
