// 6가지의 요소 조작 메서드

// 1. push
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

// 2. pop
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 3. shift
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

// 5. slice
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);

// 6. concat
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatArr = arr6.concat(arr7);
