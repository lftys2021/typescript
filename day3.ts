// Day 3. 배열과 객체
// 학습 목표
// 배열 타입 선언
// 객체 타입 선언
// 배열 안에 객체 저장
// 객체 배열 순회
// map(), filter(), find(), reduce()를 TypeScript에서 사용하기
// 객체 타입 추론 이해하기
/*----------------------------------------------------------------------------------------------------*/
// 1. 배열(Array)
// JavaScript와 거의 같지만 타입을 지정합니다.
// 숫자 배열
const numbers: number[] = [10, 20, 30, 40];
console.log(numbers);
// 출력
// [10, 20, 30, 40]
// 문자열 배열
const fruits: string[] = [
    "사과",
    "배",
    "포도"
];
console.log(fruits);
// Boolean 배열
const checks: boolean[] = [
    true,
    false,
    true
];
console.log(checks);
/*----------------------------------------------------------------------------------------------------*/
// 2. 배열 요소 접근
const fruits1: string[] = [
    "사과",
    "배",
    "포도"
];
console.log(fruits1[0]);
console.log(fruits1[2]);
// 출력
// 사과
// 포도
/*----------------------------------------------------------------------------------------------------*/
// 3. 배열 메서드
// push()
const numbers1: number[] = [1, 2, 3];
numbers1.push(4);
console.log(numbers1);
// 출력
// [1,2,3,4]
console.log(numbers1.length);
// pop()
numbers1.pop();
// length
console.log(numbers1.length);
/*----------------------------------------------------------------------------------------------------*/
// 4. 객체(Object)
// 객체에도 타입을 지정할 수 있습니다.
const student: {
    name: string;
    age: number;
    score: number;
} = {
    name: "홍길동",
    age: 20,
    score: 95
};
// 출력
console.log(student.name);
console.log(student.score);
// 출력
// 홍길동
// 95
/*----------------------------------------------------------------------------------------------------*/
// 5. 객체 수정
student.score = 100;
console.log(student.score);
// 출력
// 100
/*----------------------------------------------------------------------------------------------------*/
// 6. 객체 배열
// 가장 중요합니다.
const students: {
    name: string;
    age: number;
    score: number;
}[] = [
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
/*----------------------------------------------------------------------------------------------------*/
// 7. forEach()
students.forEach(student => {
    console.log(student.name);
});
// 출력
// 홍길동
// 김철수
// 이영희
/*----------------------------------------------------------------------------------------------------*/
// 8. find()
const result = students.find(student =>
    student.name === "김철수"
);
console.log(result);
// 출력
// {
//     name: '김철수',
//     age: 22,
//     score: 80
// }
/*----------------------------------------------------------------------------------------------------*/
// 9. filter()
const result1 = students.filter(student =>
    student.score >= 90
);
console.log(result1);
// 출력
// [
//     {
//         name:'홍길동',
//         ...
//     },
//     {
//         name:'이영희',
//         ...
//     }
// ]
/*----------------------------------------------------------------------------------------------------*/
// 10. map()
const names = students.map(student =>
    student.name
);
console.log(names);
// 출력
// [
//     "홍길동",
//     "김철수",
//     "이영희"
// ]
/*----------------------------------------------------------------------------------------------------*/
// 11. reduce()
const total = students.reduce(
    (sum, student) => sum + student.score,
    0
);
console.log(total);
// 출력
// 265
// 평균
const average =
    total / students.length;
console.log(average);
// 출력
// 88.3333
/*----------------------------------------------------------------------------------------------------*/
// 12. sort()
students.sort(
    (a, b) => b.score - a.score
);
console.log(students);
/*----------------------------------------------------------------------------------------------------*/
// 13. 타입 추론
const student1 = {
    name: "홍길동",
    age: 20
};
// TypeScript는 자동으로
// {
//     name:string;
//     age:number;
// }
// 로 추론합니다.
/*----------------------------------------------------------------------------------------------------*/
