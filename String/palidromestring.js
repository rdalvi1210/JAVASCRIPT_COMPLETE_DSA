let str = "madams";

let start = 0;
let end = str.length - 1;
let isPalindrome = true;
while (start < end) {
  if (str[start] != str[end]) {
    isPalindrome = false;
    break;
  }
  start++;
  end--;
}

console.log(isPalindrome);
