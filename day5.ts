/*----------------------------------------------------------------------------------------------------*/
// Day 5. Type Alias
// 학습 목표

// 오늘은 다음 내용을 익힙니다.

// Type Alias란?
// 객체 타입에 type 사용하기
// 기본 타입에 이름 붙이기
// Union Type |
// Literal Type
// 배열에 Type Alias 사용하기
// 함수 타입에 Type Alias 사용하기
// interface와 type의 차이
/*----------------------------------------------------------------------------------------------------*/
// 1. Type Alias란?
// Type Alias는 쉽게 말하면 '타입에 별명을 붙이는 것'입니다.
// 예를 들어:
type UserName = string;
// 이제 UserName을 타입처럼 사용할 수 있습니다.
const name: UserName = "홍길동";
// 실제로는
const name1: string = "홍길동";
// 과 같은 의미입니다.
console.log(name);
console.log(name1);
/*----------------------------------------------------------------------------------------------------*/
// 2. 객체에 Type Alias 사용
// Day 4에서 interface로 이렇게 작성했죠.
interface Student {
    name: string;
    age: number;
    score: number;
}
// Type Alias를 사용하면:
type Student1 = {
    name: string;
    age: number;
    score: number;
};
// 그리고 똑같이 사용할 수 있습니다.
const student: Student = {
    name: "홍길동",
    age: 20,
    score: 95
};
const student1: Student1 = {
    name: "홍길동",
    age: 20,
    score: 95
};
console.log(student);
console.log(student1);
/*----------------------------------------------------------------------------------------------------*/
// 3. Type Alias의 기본 문법
// 기본 형태는:
// type 타입이름 = 타입;
// 예:
type Age = number;
type Name = string;
type IsLogin = boolean;
// 사용:
const age: Age = 20;
const name2: Name = "홍길동";
const isLogin: IsLogin = true;
console.log(age);
console.log(name2);
console.log(isLogin);
/*----------------------------------------------------------------------------------------------------*/
// 4. Union Type
// Type Alias를 배우면서 아주 중요한 문법을 하나 배웁니다.
// |
// 이것을 Union Type이라고 합니다.
// 뜻은:
// 여러 타입 중 하나가 될 수 있다.
// 입니다.
// 예:
type ID = string | number;
// 그러면:
const id1: ID = 100;
const id2: ID = "user001";
// 둘 다 가능합니다.
// 하지만:
// const id3: ID = true;
// 는 오류입니다.
// boolean은 ID에 포함되어 있지 않기 때문입니다.
console.log(id1);
console.log(id2);
// console.log(id3);
/*----------------------------------------------------------------------------------------------------*/
// 5. Union Type 직접 사용
// 굳이 Type Alias를 만들지 않고:
let id4: string | number;
id4 = 100;
console.log(id4);
id4 = "user001";
console.log(id4);
// 처럼 사용할 수도 있습니다.
// 하지만 같은 타입을 여러 곳에서 사용한다면:
type ID2 = string | number;
// 로 이름을 붙이는 것이 편합니다.
let id5: ID2 = 100;
console.log(id5);
id5 = "user001";
console.log(id5);
/*----------------------------------------------------------------------------------------------------*/
// 6. Literal Type
// 특정 값만 허용하는 타입도 만들 수 있습니다.
// 예:
type Gender = "male" | "female";
// 그러면:
const gender1: Gender = "male";
const gender2: Gender = "female";
// 는 가능합니다.
// 하지만:
// const gender3: Gender = "other";
// 는 오류입니다.
// Gender에서 허용한 값이 아니기 때문입니다.
console.log(gender1);
console.log(gender2);
// console.log(gender3);
/*----------------------------------------------------------------------------------------------------*/
// 7. 숫자 Literal Type
// 문자열뿐만 아니라 숫자도 가능합니다.
type Grade = 1 | 2 | 3 | 4 | 5;
// 그러면:
const grade1: Grade = 3;
// 은 정상입니다.
// 하지만:
// const grade2: Grade = 6;
// 은 오류입니다.
console.log(grade1);
// console.log(grade2);
/*----------------------------------------------------------------------------------------------------*/
// 8. 상태(Status)에 활용
// 실제 개발에서 상당히 많이 사용하는 형태입니다.
type Status1 = "loading" | "success" | "error";
// 사용:
let status: Status1 = "loading";
console.log(status);
status = "success";
console.log(status);
status = "error";
console.log(status);
// 하지만:
// status = "complete";
console.log(status);
// 는 오류입니다.
// Vue에서 API 상태 등을 관리할 때 이런 형태가 자주 등장합니다.
/*----------------------------------------------------------------------------------------------------*/
// 9. Type Alias + 배열
// 학생 타입을 만들어 봅시다.
type Student2 = {
    name: string;
    age: number;
    score: number;
};
// 그리고:
const students: Student2[] = [
    {
        name: "홍길동",
        age: 20,
        score: 95
    },
    {
        name: "김철수",
        age: 22,
        score: 80
    },
    {
        name: "이영희",
        age: 21,
        score: 90
    }
];
console.log(students);
// 이전 interface와 거의 똑같죠.
/*----------------------------------------------------------------------------------------------------*/
// 10. Type Alias + 함수
// 함수 타입에도 사용할 수 있습니다.
// 예를 들어:
type Add = (a: number, b: number) => number;
// 그리고:
const add: Add = (a, b) => {
    return a + b;
};
// 사용:
console.log(add(10, 20));
// 결과:
// 30
/*----------------------------------------------------------------------------------------------------*/
// 11. 함수 타입을 재사용
// 예를 들어:
type Calculator = (
    a: number,
    b: number
) => number;
// 그러면 여러 함수에 사용할 수 있습니다.
const add1: Calculator = (a, b) => {
    return a + b;
};
const subtract: Calculator = (a, b) => {
    return a - b;
};
const multiply: Calculator = (a, b) => {
    return a * b;
};
const divide: Calculator = (a, b) => {
    return a / b;
};
console.log(add1(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));
// 이렇게 하면 함수의 구조를 반복해서 작성하지 않아도 됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 12. 객체 + Union Type
// Type Alias의 강력한 기능입니다.
// 예를 들어:
type User = {
    id: number;
    name: string;
    role: "admin" | "user" | "manager";
};
// 그러면:
const user: User = {
    id: 1,
    name: "홍길동",
    role: "admin"
};
// 또는:
const user2: User = {
    id: 2,
    name: "김철수",
    role: "user"
};
// 가능합니다.
// 하지만:
const user3: User = {
    id: 3,
    name: "이영희",
    role: "manager"
};
// 는 오류입니다.
console.log(user);
console.log(user2);
console.log(user3);
/*----------------------------------------------------------------------------------------------------*/
// 13. Type Alias 조합
// Type Alias는 다른 타입을 조합할 수도 있습니다.
type ID3 = string | number;
type User1 = {
    id: ID3;
    name: string;
};
// 그러면:
const user4: User1 = {
    id: 100,
    name: "홍길동"
};
const user5: User1 = {
    id: "user001",
    name: "김철수"
};
// 둘 다 가능합니다.
console.log(user4);
console.log(user5);
/*----------------------------------------------------------------------------------------------------*/
// 14. interface와 type 비교
// Day 4에서 배운 interface:
interface Student4 {
    name: string;
    age: number;
    score: number;
}
// 오늘 배운 type:
type Student5 = {
    name: string;
    age: number;
    score: number;
};
// 객체를 정의하는 용도에서는 상당히 비슷합니다.
// 하지만 type은 다음과 같은 표현이 가능합니다.
type ID4 = string | number;
// interface는 이런 방식으로 Union Type 자체에 이름을 붙일 수 없습니다.
// 그래서 보통 이렇게 기억하면 됩니다.
// Interface
// 객체의 구조를 정의할 때
interface Student {
    name: string;
    age: number;
}
// Type Alias
// 타입 자체에 이름을 붙이거나 여러 타입을 조합할 때
type ID5 = string | number;
// 물론 실제 프로젝트에서는 객체 타입에도 type을 많이 사용합니다.
/*----------------------------------------------------------------------------------------------------*/
