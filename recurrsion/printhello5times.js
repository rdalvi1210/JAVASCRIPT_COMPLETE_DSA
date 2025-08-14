function printhello5times(n) {
  if (n == 0) return;
  console.log("Hello");
  printhello5times(n - 1);
}
printhello5times(5);
