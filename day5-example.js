// 과제 1. Product Type
// 상품의 타입을 만드세요.
// name : string
// price : number
// stock : number
var product = {
    name: "노트북",
    price: 1200000,
    stock: 5
};
console.log(product);
var userId = 100;
var postId = "post-001";
console.log(userId);
console.log(postId);
var role = "admin";
console.log(role);
var status = "loading";
console.log(status);
status = "success";
console.log(status);
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
var result3 = students.map(function (Student) { return Student.name; });
console.log(result3);
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 20));
var user = {
    id: 1,
    name: "홍길동",
    role: "admin"
};
// 그리고 다음 코드에서 오류가 발생하는지 확인하세요.
user.role = "manager";
console.log(user);
// 다음 두 객체가 모두 정상적으로 작동해야 합니다.
var user1 = {
    id: 1,
    name: "홍길동"
};
var user2 = {
    id: "user-001",
    name: "김철수"
};
console.log(user1);
console.log(user2);
/*----------------------------------------------------------------------------------------------------*/ 
