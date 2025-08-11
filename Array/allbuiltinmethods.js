const arr = [1, 2, 3, 4, 5];

// 1. concat(...arrays): merge arrays
console.log(arr.concat([6, 7])); // [1,2,3,4,5,6,7]

// 2. copyWithin(target, start, end): copies part inside same array
console.log(arr.copyWithin(0, 3, 5)); // [4,5,3,4,5]

// 3. entries(): returns iterator of [index, value]
for (const [i, v] of arr.entries()) {
  console.log(i, v);
}

// 4. every(callback): tests if all elements pass callback
console.log(arr.every((x) => x > 0)); // true

// 5. fill(value, start, end): fills part of array with value
console.log(arr.fill(0, 2, 4)); // [1,2,0,0,5]

// 6. filter(callback): returns new array with elements passing test
console.log(arr.filter((x) => x % 2 === 0)); // [2,4]

// 7. find(callback): returns first element passing test
console.log(arr.find((x) => x > 3)); // 4

// 8. findIndex(callback): returns index of first element passing test
console.log(arr.findIndex((x) => x > 3)); // 3

// 9. flat(depth): flattens nested arrays up to depth
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

// 10. flatMap(callback): map + flatten one level
console.log(arr.flatMap((x) => [x, x * 2])); // [1,2,2,4,3,6,4,8,5,10]

// 11. forEach(callback): calls callback for each element
arr.forEach((x) => console.log(x * 2)); // 2 4 6 8 10

// 12. includes(value, fromIndex): checks if array includes value
console.log(arr.includes(3)); // true

// 13. indexOf(value, fromIndex): first index of value
console.log(arr.indexOf(3)); // 2

// 14. join(separator): joins elements into string
console.log(arr.join("-")); // "1-2-3-4-5"

// 15. keys(): iterator for array keys (indexes)
for (const key of arr.keys()) {
  console.log(key);
}

// 16. lastIndexOf(value, fromIndex): last index of value
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // 3

// 17. map(callback): creates new array with results of callback
console.log(arr.map((x) => x * 3)); // [3,6,9,12,15]

// 18. pop(): removes and returns last element
const last = arr.pop();
console.log(last, arr); // 5 [1,2,3,4]

// 19. push(...elements): adds elements to end, returns new length
const len = arr.push(6, 7);
console.log(len, arr); // 6 [1,2,3,4,6,7]

// 20. reduce(callback, initialValue): reduces array to single value
const sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum); // 23

// 21. reduceRight(callback, initialValue): reduce from right
const concatRight = ["a", "b", "c"].reduceRight((acc, x) => acc + x, "");
console.log(concatRight); // "cba"

// 22. reverse(): reverses array in place
arr.reverse();
console.log(arr); // reversed array

// 23. shift(): removes and returns first element
const first = arr.shift();
console.log(first, arr);

// 24. slice(start, end): returns shallow copy slice
const sliced = arr.slice(1, 3);
console.log(sliced);

// 25. some(callback): tests if any element passes test
console.log(arr.some((x) => x > 3)); // true

// 26. sort(compareFunction): sorts array in place
arr.sort((a, b) => a - b);
console.log(arr);

// 27. splice(start, deleteCount, ...items): adds/removes items
arr.splice(1, 2, 99, 100);
console.log(arr);

// 28. toLocaleString(): localized string of elements
console.log(arr.toLocaleString());

// 29. toString(): converts array to string
console.log(arr.toString());

// 30. unshift(...elements): adds elements to front, returns new length
const newLen = arr.unshift(0);
console.log(newLen, arr);
