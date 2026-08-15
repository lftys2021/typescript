// 과제 1. Product Type
// 상품의 타입을 만드세요.
// name : string
// price : number
// stock : number

// 예:
type Product = {
    name: string;
    price: number;
    stock: number;
};
const product: Product = {
    name: "노트북",
    price: 1200000,
    stock: 5
};
console.log(product);
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. ID Type
// ID가 문자열 또는 숫자가 되도록 만드세요.
// type ID = ...
// 다음 두 코드가 모두 정상적으로 작동해야 합니다.
type ID = string | number;
const userId: ID = 100;
const postId: ID = "post-001";
console.log(userId);
console.log(postId);
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. Role Type
// 사용자의 역할을 다음 세 가지로 제한하세요.
// admin
// user
// guest
// 예:
// type Role = ...;
type Role = "admin" | "user" |  "guest";
const role: Role = "admin";
console.log(role);
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. Status Type
// 다음 상태만 허용하세요.
// loading
// success
// error
// 그리고:
type Status = "loading" | "success" |  "error";
let status: Status = "loading";
console.log(status);
status = "success";
console.log(status);
// 가 정상적으로 작동하도록 하세요.
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. Student Type
// Student를 Type Alias로 만드세요.
// name : string
// age : number
// score : number
// 학생 3명을 배열로 만드세요.
// const students: Student[] = [
//     ...
// ];
// 그리고 map()으로 학생 이름만 출력하세요.
type Student = {
    name: string;
    age: number;
    score: number;
};
const students: Student[] = [
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
const result3 = students.map(Student => Student.name);
console.log(result3);
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. Calculator Type
// 함수의 구조를 Type Alias로 만드세요.
// type Calculator = ...
// 조건:
// 매개변수 2개
// 둘 다 number
// 반환값 number
// 그리고:
type Calculator = (a: number, b: number) => number;
const add: Calculator = (a, b) => {
    return a + b;
};
console.log(add(10, 20));
// 가 정상적으로 작동하도록 만드세요.
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. User Type
// 다음 구조의 User Type Alias를 만드세요.
// id : number
// name : string
// role : admin 또는 user
// 예:
type User = {
    id : number;
    name : string;
    role : "admin" | "user";
};
const user: User = {
    id: 1,
    name: "홍길동",
    role: "admin"
};
// 그리고 다음 코드에서 오류가 발생하는지 확인하세요.
user.role = "manager";
console.log(user);
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. ID를 사용하는 User
// 앞에서 만든 ID를 재사용하세요.
type ID1 = string | number;
// 그리고:
type User2 = {
    id: ID1;
    name: string;
};
// 다음 두 객체가 모두 정상적으로 작동해야 합니다.
const user1: User2 = {
    id: 1,
    name: "홍길동"
};
const user2: User2 = {
    id: "user-001",
    name: "김철수"
};
console.log(user1);
console.log(user2);
/*----------------------------------------------------------------------------------------------------*/