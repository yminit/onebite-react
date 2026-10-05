// 5가지 배열 변형 메서드
// 1. filter
let arr1 = [
    { name: "이정환", hobby: "테니스" },
    { name: "김효빈", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});
console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
    if (a > b) {
        // b가 a앞에 와라
        return 1;
    } else if (a < b) {
        // a가 b앞에 와라
        return -1;
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0;
    }
});
console.log(arr3);

// 4. toSorted
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// 5. join
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-");
console.log(joined);
