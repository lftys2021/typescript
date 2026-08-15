// Day 1. TypeScript 시작
// 학습 목표
// TypeScript가 무엇인지 이해하기
// 개발 환경 구축하기
// 기본 타입 사용하기
// 타입 추론(Type Inference) 이해하기
// any와 unknown의 차이 알기
/*----------------------------------------------------------------------------------------------------*/
// 1. TypeScript란?
// TypeScript는 JavaScript에 타입(Type)을 추가한 언어입니다.
// JavaScript
let name = "홍길동";
let age = 20;
// TypeScript
let name1: string = "홍길동";
let age1: number = 20;
// 차이점은
// :string
// :number
// 처럼 변수의 타입을 지정하는 것입니다.
console.log(name);
console.log(age);
console.log(name1);
console.log(age1);
/*----------------------------------------------------------------------------------------------------*/
// 2. TypeScript의 장점
// ① 오타를 빨리 찾을 수 있다.
// JavaScript
// let age2 = 20;
// age2 = "스무살";
// 실행은 되지만 의도와 다를 수 있습니다.
// TypeScript
// let age3: number = 20;
// age3 = "스무살";
// 오류
// Type 'string' is not assignable to type 'number'.
// ② 자동완성이 더 좋아진다.
// VS Code에서
// student.
// 만 입력해도
// name
// age
// score
// 같은 속성을 자동으로 추천해 줍니다.
// ③ 버그가 줄어든다.
// 프로젝트가 커질수록 효과가 커집니다.
// console.log(age2);
// console.log(age3);
/*----------------------------------------------------------------------------------------------------*/
// 3. 개발 환경 만들기
// Node가 설치되어 있다면
// npm install -g typescript
// 설치 확인
// tsc -v
// 예시
// Version 5.x.x
// 프로젝트 생성
// mkdir typescript
// cd typescript
// 초기화
// tsc --init
// 그러면
// tsconfig.json
// 이 생성됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 4. TypeScript 파일
// JavaScript
// day1.js
// ↓
// TypeScript
// day1.ts
// 확장자만 바뀝니다.
/*----------------------------------------------------------------------------------------------------*/
// 5. 컴파일
// TypeScript는 바로 실행되지 않습니다.
// day1.ts
// ↓
// tsc day1.ts
// ↓
// day1.js
// ↓
// node day1.js
// 즉
// TS → JS → 실행
// 순서입니다.
/*----------------------------------------------------------------------------------------------------*/
// 6. 기본 타입
// 문자열
let name4: string = "홍길동";
// 숫자
let age4: number = 20;
// 논리형
let isStudent: boolean = true;
// 출력
console.log(name4);
console.log(age4);
console.log(isStudent);
// 출력
// 홍길동
// 20
// true
/*----------------------------------------------------------------------------------------------------*/
// 7. 타입 추론(Type Inference)
// TypeScript는 타입을 자동으로 추론합니다.
let age5 = 20;
// 실제로는
let age6: number = 20;
// 와 같습니다.
// 그래서
// age6 = "20";
// 오류가 발생합니다.
console.log(age5);
console.log(age6);
/*----------------------------------------------------------------------------------------------------*/
// 8. any
let value1: any = 10;
console.log(value1);
value1 = "홍길동";
console.log(value1);
value1 = true;
console.log(value1);
// 모든 타입을 허용합니다.
// 하지만 너무 많이 사용하면 TypeScript의 장점이 사라집니다.
/*----------------------------------------------------------------------------------------------------*/
// 9. unknown
let value2: unknown;
value2 = 10;
value2 = "홍길동";
// unknown은 어떤 값이든 저장할 수 있지만,
// console.log(value2.toUpperCase());
// 처럼 바로 사용할 수 없습니다.
// 먼저 타입을 확인해야 합니다.
if (typeof value2 === "string") {
    console.log(value2.toUpperCase());
}
/*----------------------------------------------------------------------------------------------------*/
// 10. const와 let
const pi: number = 3.14;
let score: number = 100;
console.log(score);
console.log(pi);
/*----------------------------------------------------------------------------------------------------*/
// 오늘 배운 문법
// string
// number
// boolean
// let
// const
// :
// Type Inference
// any
// unknown