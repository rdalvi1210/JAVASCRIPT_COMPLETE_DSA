function factors(a) {
  for (let i = 1; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
      console.log(i);
    }
  }
}

factors(100);
