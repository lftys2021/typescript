/*----------------------------------------------------------------------------------------------------*/
// Day 4. Interface
// 학습 목표
// 이렇게 정의할 수 있습니다.
// 이제 Student라는 타입을 사용할 수 있습니다.
var student = {
    name: "홍길동",
    age: 20,
    score: 95
};
console.log(student);
// 그리고:
var user = {
    name: "홍길동",
    age: 20
};
// 이렇게 사용합니다.
console.log(user);
// 그런데:
var user1 = {
    name: "홍길동"
};
// 이렇게 작성하면 오류가 발생합니다.
// 왜냐하면 age가 반드시 필요한 속성이기 때문입니다.
console.log(user1);
// 다음은 오류입니다.
var user2 = {
    name: "홍길동",
    age: "20"
};
// age는 number 여야 하는데 string으로 잘못 넣었기 때문입니다.
console.log(user2);
/*----------------------------------------------------------------------------------------------------*/
// 5. Interface + 배열
// 이 부분이 매우 중요합니다.
// Day 3에서 작성했던 코드:
var students1 = [
    {
        name: "홍길동",
        age: 20,
        score: 95
    },
    {
        name: "김철수",
        age: 22,
        score: 80
    }
];
console.log(students1);
//그리고:
var students2 = [
    {
        name: "홍길동",
        age: 20,
        score: 95
    },
    {
        name: "김철수",
        age: 22,
        score: 80
    }
];
// 훨씬 깔끔합니다.
console.log(students2);
// 이 하나를 만들어 놓으면:
var student1 = {
    name: "홍길동",
    age: 20,
    score: 95
};
var student2 = {
    name: "김철수",
    age: 22,
    score: 80
};
var students3 = [
    student1,
    student2
];
//모두 사용할 수 있습니다.
console.log(student1);
console.log(student2);
console.log(students3);
// 학생을 출력하는 함수:
function printStudent(student) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.score);
}
// 사용:
var student3 = {
    name: "홍길동",
    age: 20,
    score: 95
};
printStudent(student3);
/*----------------------------------------------------------------------------------------------------*/
// 8. 함수의 반환값에도 사용
function createStudent() {
    return {
        name: "홍길동",
        age: 20,
        score: 95
    };
}
// 이 함수는 반드시 Student 구조의 객체를 반환해야 합니다.
console.log(createStudent());
// 그러면:
var student4 = {
    name: "홍길동",
    age: 20,
    score: 95
};
// 이것도 가능합니다.
// 그리고:
var student5 = {
    name: "김철수",
    age: 22,
    score: 80,
    email: "kim@example.com"
};
// 이것도 가능합니다. ?는 '있어도 되고 없어도 된다'라는 의미입니다.
console.log(student4);
console.log(student5);
// 그러면:
var student6 = {
    name: "홍길동",
    age: 20,
    score: 95
};
// 가 가능합니다.
// Student는
// Person
//  ├─ name
//  └─ age
// Student
//  └─ score
// 구조가 됩니다.
console.log(student6);
// 그러면:
var student7 = {
    name: "홍길동",
    age: 20,
    school: "서울대학교",
    score: 95
};
// 가 가능합니다.
console.log(student7);
// 둘 다 객체의 타입을 정의할 수 있습니다.
// 처음에는 이렇게 기억하면 됩니다.
// 객체의 구조를 정의할 때 interface를 우선 사용한다.
// type은 이후에 배울 Union Type, Tuple, 복잡한 타입 조합 등에서 더 많이 활용합니다.
/*----------------------------------------------------------------------------------------------------*/
