/*----------------------------------------------------------------------------------------------------*/
// Day 2. 함수 타입
// 학습 목표
// 함수의 매개변수 타입 지정
// 반환 타입(Return Type) 지정
// void와 never 이해
// 선택적 매개변수(?)
// 기본값 매개변수(Default Parameter)
// 화살표 함수 타입
/*----------------------------------------------------------------------------------------------------*/
// 1. 함수의 매개변수 타입
// JavaScript
// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, 20));
//  TypeScript
function add1(a: number, b: number): number {
    return a + b;
}
console.log(add1(10, 20));
// 출력
// 30
// 잘못된 호출
// add("10", 20);
// 오류
// Argument of type 'string' is not assignable to parameter of type 'number'.
/*----------------------------------------------------------------------------------------------------*/
// 2. 반환(Return) 타입
function hello(name: string): string {
    return `안녕하세요. ${name}님`;
}
console.log(hello("홍길동"));
// 출력
//  안녕하세요. 홍길동님
/*----------------------------------------------------------------------------------------------------*/
// 3. void
// 값을 반환하지 않는 함수입니다.
function print(name: string): void {
    console.log(name);
}
print("홍길동");
// 출력
// 홍길동
// 잘못된 예
// function test(): void {
//     return 10;
// }
// 오류
// Type 'number' is not assignable to type 'void'.
/*----------------------------------------------------------------------------------------------------*/
// 4. never
// 절대로 정상 종료되지 않는 함수입니다.
// 예)
function error(message: string): never {
    throw new Error(message);
}
// 또는
function infinite(): never {
    while (true) {}
}
// 실무에서는 예외 처리 등에 사용됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 5. 선택적 매개변수
function hello1(name: string, age?: number): void {
    if (age) {
        console.log(`${name} (${age})`);
    } else {
        console.log(name);
    }
}
// 사용
hello1("홍길동");
hello1("홍길동", 20);
// 출력
// 홍길동
// 홍길동 (20)
/*----------------------------------------------------------------------------------------------------*/
// 6. 기본값(Default Parameter)
function hello2(name: string = "손님") {
    console.log(name);
}
hello2();
hello2("홍길동");
// 출력
// 손님
// 홍길동
/*----------------------------------------------------------------------------------------------------*/
// 7. 화살표 함수
const add3 = (a: number, b: number): number => {
    return a + b;
};
console.log(add3(10, 20));
// 또는
const add4 = (a: number, b: number): number =>
    a + b;
console.log(add4(10, 20));
/*----------------------------------------------------------------------------------------------------*/
// 8. 함수 타입 선언
let calc: (a: number, b: number) => number;
// 대입
calc = (a, b) => a + b;
// 사용
console.log(calc(3, 5));
// 출력 8
/*----------------------------------------------------------------------------------------------------*/
// 9. 함수 오버로드(기초)
function print2(value: string): void;
function print2(value: number): void;
function print2(value: string | number) {
    console.log(value);
}
// 사용
print2("홍길동");
print2(100);
print2(100 + "만");
/*----------------------------------------------------------------------------------------------------*/
