let str = "AbCZ";
let toggle = "";

for (let i = 0; i < str.length; i++) {
  let ch = str.charCodeAt(i);
  if (ch >= 65 && ch <= 90) {
    toggle = toggle + String.fromCharCode(ch + 32);
  } else if (ch >= 97 && ch <= 122) {
    toggle = toggle + String.fromCharCode(ch - 32);
  }
}

console.log(toggle);
