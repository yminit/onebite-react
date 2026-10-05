// 스코프
// ->전역 스코프 / 지역 스코프
let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);
    function funcB() {}
}

funcA();
// console.log(b);
// funcB();

if (true) {
    let c = 1;
}
// console.log(c);

for (let i = 0; i < 10; i++) {
    let d = 1;
}
// console.log(d);
