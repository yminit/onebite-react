// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);
});

let dobuledArr = [];
arr1.forEach((item) => {
    dobuledArr.push(item * 2);
});
console.log(dobuledArr);

// 2. includes
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(isInclude);

// 3.indexOf
let arr3 = [1, 2, 3];
let index = arr2.indexOf(2);
console.log(index);

// 4. findIndex
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedIndex);

// 5. find
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];
arr5.find((item) => item.name === "이정환");
