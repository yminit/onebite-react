// 1. if 조건문(if문)
let num = 10;

if (num >= 10) {
    console.log("num은 10이상 입니다");
} else if (num >= 5) {
    console.log("num은 5이상 입니다");
} else {
    console.log("조건과 부합하지 않습니다");
}

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 저 직관적
let animal = "cat";
switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    default: {
        console.log("알수없는 동물");
    }
}
