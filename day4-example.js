var products = [
    {
        name: "초코파이",
        price: 5000,
        stock: 2
    },
    {
        name: "몽쉘",
        price: 4800,
        stock: 12
    },
    {
        name: "오예스",
        price: 4700,
        stock: 0
    }
];
console.log(products);
// 학생 3명을 배열에 넣으세요.
// 그리고 forEach()를 이용해 학생 이름을 출력하세요.
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
students.forEach(function (student) {
    console.log(student.name);
});
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. 평균 점수 함수
// Student Interface를 이용해서 함수를 만드세요.
// function getAverage(student: Student): number
// 예:
var student3 = {
    name: "홍길동",
    age: 20,
    score: 95
};
function getAverage(student) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.score);
}
console.log(getAverage(student3));
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. 학생 검색 함수
// 학생 배열에서 이름으로 학생을 찾는 함수를 만드세요.
function findStudent(students, name) {
    return students.find(function (student) {
        return student.name === name;
    });
}
// 사용:
var result = findStudent(students, "홍길동");
console.log(result);
var user1 = {
    name: "홍길동",
    age: 20
};
var user2 = {
    name: "김철수",
    age: 22,
    email: "kim@example.com"
};
console.log(user1);
console.log(user2);
var user3 = {
    id: 1,
    name: "홍길동"
};
console.log(user3);
user3.name = "김철수";
console.log(user3);
user3.id = 2;
console.log(user3);
// 그리고 Student가 Person을 상속받도록 만드세요.
// 추가 속성:
// score : number
// 최종적으로:
var student = {
    name: "홍길동",
    age: 20,
    score: 95
};
// 가 정상적으로 동작하도록 만들어보세요.
console.log(student);
/*----------------------------------------------------------------------------------------------------*/ 
