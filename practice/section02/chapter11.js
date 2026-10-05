// 함수선언
function greeting() {
    console.log("hello");
}

console.log("호출 전");
greeting();
console.log("호출 후");

function getArea(width, height) {
    function another() {
        console.log("another");
    }
    another();
    let area = width * height;
    return area;
}

let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
let area3 = getArea(120, 200);
console.log(area3);
