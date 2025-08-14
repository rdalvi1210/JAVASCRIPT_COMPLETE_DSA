function printNumberNto1(n) {
  if (n == 0) return;
  console.log(n);
  printNumberNto1(n - 1);
}

printNumberNto1(10);
