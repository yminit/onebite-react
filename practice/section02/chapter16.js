// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
const person = {
    name: "이정환",
    sayHi: function () {
        console.log("hi");
    },
    sayHi2 () {
        console.log("hi");
    },
};
person.sayHi();
person["sayHi"]();