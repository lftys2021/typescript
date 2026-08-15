/*----------------------------------------------------------------------------------------------------*/
// 과제 1. 자기소개 함수
// 함수
// introduce()
// 출력
// 이름 : 홍길동
// 나이 : 20
// 지역 : 서울
// 매개변수
// name
// age
// city
function introduce(name, age, city) {
    console.log("\uC774\uB984 : ".concat(name, " \n\uB098\uC774 : ").concat(age, " \n\uB3C4\uC2DC : ").concat(city));
}
introduce("홍길동", 20, "서울");
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. 계산기
// 다음 함수를 작성하세요.
// add()
// subtract()
// multiply()
// divide()
// 모든 매개변수는 number
// 반환 타입도 number
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        console.log("0으로 나눌 수 없습니다.");
        return;
    }
    return a / b;
}
console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. 최고 점수
// 다음 함수를 작성하세요.
function maxScore(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
// 예시
console.log(maxScore(80, 95));
// 출력
// 95
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. 할인 계산
// 상품 가격과 할인율을 받아 최종 가격을 반환하는 함수를 작성하세요.
// 예시
// discountPrice(10000, 20);
// 출력
// 8000
function discountPrice(a, b) {
    return a - (a * b / 100);
}
console.log(discountPrice(10000, 20));
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. 환영 메시지
// 선택적 매개변수를 사용하세요.
// welcome("홍길동");
// 출력
// 홍길동님 환영합니다.
// welcome("홍길동", "관리자");
// 출력
// 홍길동님 환영합니다. (관리자)
function welcome1(name) {
    return "".concat(name, "\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4.");
}
;
function welcome2(name, position) {
    return "".concat(name, "\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4. (").concat(position, ")");
}
;
console.log(welcome1("홍길동"));
console.log(welcome2("홍길동", "관리자"));
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. 기본값
// 기본값을 사용하세요.
// greet();
// 출력
// 안녕하세요, 손님!
// greet("김철수");
// 출력
// 안녕하세요, 김철수!
function greet(name) {
    if (name === void 0) { name = "손님"; }
    return "\uC548\uB155\uD558\uC138\uC694, ".concat(name, "!");
}
;
console.log(greet());
console.log(greet("김철수"));
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. 화살표 함수
// 다음 함수를 화살표 함수로 작성하세요.
// square(5);
// 출력
// 25
var square = function (a) {
    return a * a;
};
console.log(square(5));
// /*----------------------------------------------------------------------------------------------------*/
