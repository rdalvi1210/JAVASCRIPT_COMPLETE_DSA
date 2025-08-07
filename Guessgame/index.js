let random = Math.floor(Math.random() * 100) + 1;
let guess = -1;

while (guess !== random) {
  guess = Number(prompt("Enter a number between 1 and 100:"));

  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Invalid input. Try a number between 1 and 100.");
  }

  if (guess < random) {
    console.log("Too low, try again.");
  } else if (guess > random) {
    console.log("Too high, try again.");
  } else {
    console.log("🎉 Correct! Great guess.");
  }
}
