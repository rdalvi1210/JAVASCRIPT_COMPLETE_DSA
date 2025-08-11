// JavaScript String Methods Examples

const str = " Hello World!  ";

// 1. charAt(index): returns char at index
console.log(str.charAt(1)); // "H" (space at 0, 'H' at 1)

// 2. charCodeAt(index): returns Unicode of char at index
console.log(str.charCodeAt(1)); // 72 ('H')

// 3. concat(...strings): concatenates strings
console.log("Hello".concat(" ", "JS")); // "Hello JS"

// 4. includes(searchString, position): checks if substring exists
console.log(str.includes("World")); // true

// 5. endsWith(searchString, length): checks if ends with substring
console.log(str.trim().endsWith("!")); // true

// 6. indexOf(searchValue, fromIndex): first index of substring
console.log(str.indexOf("o")); // 5

// 7. lastIndexOf(searchValue, fromIndex): last index of substring
console.log(str.lastIndexOf("o")); // 7

// 8. localeCompare(compareString): compares strings lexicographically
console.log("a".localeCompare("b")); // -1

// 9. match(regexp): matches regex, returns array or null
console.log("Hello123".match(/\d+/)); // ["123"]

// 10. repeat(count): repeats string count times
console.log("abc".repeat(3)); // "abcabcabc"

// 11. replace(searchValue, newValue): replaces first occurrence
console.log("foo bar foo".replace("foo", "baz")); // "baz bar foo"

// 12. replaceAll(searchValue, newValue): replaces all occurrences
console.log("foo bar foo".replaceAll("foo", "baz")); // "baz bar baz"

// 13. search(regexp): returns index of match or -1
console.log("Hello123".search(/\d+/)); // 5

// 14. slice(start, end): extracts substring (end not included)
console.log(str.slice(1, 6)); // "Hello"

// 15. split(separator, limit): splits string into array
console.log("a,b,c".split(",")); // ["a", "b", "c"]

// 16. startsWith(searchString, position): checks start
console.log(str.trim().startsWith("Hello")); // true

// 17. substring(start, end): substring, no negative indices
console.log(str.substring(1, 6)); // "Hello"

// 18. toLowerCase(): converts to lowercase
console.log("HELLO".toLowerCase()); // "hello"

// 19. toUpperCase(): converts to uppercase
console.log("hello".toUpperCase()); // "HELLO"

// 20. trim(): removes whitespace from both ends
console.log(str.trim()); // "Hello World!"

// 21. trimStart(): removes whitespace from start
console.log(str.trimStart()); // "Hello World!  "

// 22. trimEnd(): removes whitespace from end
console.log(str.trimEnd()); // " Hello World!"

// 23. valueOf(): returns primitive string value
const s = new String("hello");
console.log(s.valueOf()); // "hello"
