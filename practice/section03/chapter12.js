// 간단한 콜백
function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 1000);
}
add(1, 2, (value) => {
    console.log(value);
});

// 음식을 주문하는 상황 : 콜백지옥
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 1000);
}
function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 1000);
}
function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    },1000);
}
orderFood((food) => {
    console.log(food);
    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);
        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});
