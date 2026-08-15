/*----------------------------------------------------------------------------------------------------*/
// 과제 1. 자기소개
// 다음을 TypeScript로 작성하세요.
// 이름 : 홍길동
// 나이 : 20
// 지역 : 서울
// 조건
// string
// number
// console.log()
let name: String = "홍길동";
let age: number = 20;
let local: String = "서울";
console.log("이름 : " + name);
console.log("나이 : " + age);
console.log("지역 : " + local);
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. 쇼핑몰 상품
// 다음 변수를 타입과 함께 선언하세요.
// 상품명 : 키보드
// 가격 : 59000
// 재고여부 : true
// 출력
// 상품명 : 키보드
// 가격 : 59000
// 재고 : true
let item: String = "키보드";
let cost: number = 59000;
let exist: boolean = true;
console.log("상품명 : " + item);
console.log("가격 : " + cost);
console.log("재고 : " + exist);
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. 타입 오류 확인
// 다음 코드를 작성해 오류를 확인해 보세요.
let age2: number = 20;
// age2 = "스무살";
// 오류 메시지를 확인한 뒤, 다시 숫자로 수정하여 실행하세요.
console.log(age2);
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. 타입 추론
// 아래 코드에서 각 변수의 타입이 무엇으로 추론되는지 생각해 보고 확인하세요.
let a = 10;
let b = "Hello";
let c = true;
// 각 변수의 타입을 적어 보세요.
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. any와 unknown 비교
// 다음 두 변수를 만들어 보세요.
let value1: any = "TypeScript";
let value2: unknown = "TypeScript";
// value1.toUpperCase()를 실행해 보세요.
// value2.toUpperCase()를 실행해 보고 어떤 오류가 발생하는지 확인하세요.
// typeof를 사용해 value2가 문자열일 때만 toUpperCase()를 호출해 보세요.
if (typeof value1 === "string") {
    console.log(value1.toUpperCase());
}
if (typeof value2 === "string") {
    console.log(value2.toUpperCase());
}
/*----------------------------------------------------------------------------------------------------*/