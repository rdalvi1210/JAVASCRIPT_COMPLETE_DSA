let num = 153;

let count = 0;
let temp = num;
while (temp != 0) {
  temp = Math.floor(temp / 10);
  count++;
}

let powSum = 0;
let tempo = num;
while (tempo != 0) {
  let lastdigit = tempo % 10;
  let pow = 1;
  for (i = 1; i <= count; i++) {
    pow = pow * lastdigit;
  }
  powSum = powSum + pow;
  tempo = Math.floor(tempo / 10);
}

console.log(powSum == num);
