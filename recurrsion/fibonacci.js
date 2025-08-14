function fibonacci(first, second, n) {
  if (n == 0) return;

  let third = first + second;
  process.stdout.write(third + " ");
  fibonacci(second, third, n - 1);
}

process.stdout.write(0 + " " + 1 + " ");

console.log(fibonacci(0, 1, 10 - 2));
