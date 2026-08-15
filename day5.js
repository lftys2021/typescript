/*----------------------------------------------------------------------------------------------------*/
// Day 5. Type Alias
// 학습 목표
// 이제 UserName을 타입처럼 사용할 수 있습니다.
var name = "홍길동";
// 실제로는
var name1 = "홍길동";
// 과 같은 의미입니다.
console.log(name);
console.log(name1);
// 그리고 똑같이 사용할 수 있습니다.
var student = {
    name: "홍길동",
    age: 20,
    score: 95
};
var student1 = {
    name: "홍길동",
    age: 20,
    score: 95
};
console.log(student);
console.log(student1);
// 사용:
var age = 20;
var name2 = "홍길동";
var isLogin = true;
console.log(age);
console.log(name2);
console.log(isLogin);
// 그러면:
var id1 = 100;
var id2 = "user001";
// 둘 다 가능합니다.
// 하지만:
var id3 = true;
// 는 오류입니다.
// boolean은 ID에 포함되어 있지 않기 때문입니다.
console.log(id1);
console.log(id2);
console.log(id3);
/*----------------------------------------------------------------------------------------------------*/
// 5. Union Type 직접 사용
// 굳이 Type Alias를 만들지 않고:
var id4;
id4 = 100;
console.log(id4);
id4 = "user001";
console.log(id4);
// 로 이름을 붙이는 것이 편합니다.
var id5 = 100;
console.log(id5);
id5 = "user001";
console.log(id5);
// 그러면:
var gender1 = "male";
var gender2 = "female";
// 는 가능합니다.
// 하지만:
var gender3 = "other";
// 는 오류입니다.
// Gender에서 허용한 값이 아니기 때문입니다.
console.log(gender1);
console.log(gender2);
console.log(gender3);
// 그러면:
var grade1 = 3;
// 은 정상입니다.
// 하지만:
var grade2 = 6;
// 은 오류입니다.
console.log(grade1);
console.log(grade2);
// 사용:
var status = "loading";
console.log(status);
status = "success";
console.log(status);
status = "error";
console.log(status);
// 하지만:
status = "complete";
console.log(status);
// 그리고:
var students = [
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
// 그리고:
var add = function (a, b) {
    return a + b;
};
// 사용:
console.log(add(10, 20));
// 그러면 여러 함수에 사용할 수 있습니다.
var add1 = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
var divide = function (a, b) {
    return a / b;
};
console.log(add1(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));
// 그러면:
var user = {
    id: 1,
    name: "홍길동",
    role: "admin"
};
// 또는:
var user2 = {
    id: 2,
    name: "김철수",
    role: "user"
};
// 가능합니다.
// 하지만:
var user3 = {
    id: 3,
    name: "이영희",
    role: "manager"
};
// 는 오류입니다.
console.log(user);
console.log(user2);
console.log(user3);
// 그러면:
var user4 = {
    id: 100,
    name: "홍길동"
};
var user5 = {
    id: "user001",
    name: "김철수"
};
// 둘 다 가능합니다.
console.log(user4);
console.log(user5);
/*----------------------------------------------------------------------------------------------------*/
// 14. interface와 type 비교
// Day 4에서 배운 interface:
// interface Student {
//     name: string;
//     age: number;
//     score: number;
// }
// 오늘 배운 type:
// type Student = {
//     name: string;
//     age: number;
//     score: number;
// };
// 객체를 정의하는 용도에서는 상당히 비슷합니다.
// 하지만 type은 다음과 같은 표현이 가능합니다.
// type ID = string | number;
// interface는 이런 방식으로 Union Type 자체에 이름을 붙일 수 없습니다.
// 그래서 보통 이렇게 기억하면 됩니다.
// Interface
// 객체의 구조를 정의할 때
// interface Student {
//     name: string;
//     age: number;
// }
// Type Alias
// 타입 자체에 이름을 붙이거나 여러 타입을 조합할 때
// type ID = string | number;
// 물론 실제 프로젝트에서는 객체 타입에도 type을 많이 사용합니다.
/*----------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------*/
