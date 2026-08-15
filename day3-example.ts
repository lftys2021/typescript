/*----------------------------------------------------------------------------------------------------*/
// 과제 1. 학생 객체
// 다음 객체를 만드세요.
// 이름 : 홍길동
// 나이 : 20
// 점수 : 95
// 출력
// 이름
// 나이
// 점수
const student: {
    name: string;
    age: number;
    score: number;
} = {
    name: "홍길동",
    age: 20,
    score: 95
};
console.log(student.name);
console.log(student.age);
console.log(student.score);
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. 학생 배열
// 학생 3명을 저장하세요.
// 출력
// 학생 이름만 출력
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
students.forEach(student => {
    console.log(student.name);
});
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. 최고 점수 찾기
// reduce()를 이용해 최고 점수를 출력하세요.
// 예시
// 95
const total = students.reduce(
    (max, student) =>
        student.score > max ? student.score : max,
    0
);
console.log(total);
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. 평균 점수
// 평균을 계산하세요.
const total1 = students.reduce(
    (sum, student) => sum + student.score,
    0
);
const average =
    total1 / students.length;
console.log(average);
/*-------------------------4---------------------------------------------------------------------------*/
// 과제 5. 점수 80점 이상 학생만 출력
// filter()
const result = students.filter(student =>
    student.score >= 80
);
console.log(result);
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. 이름만 출력
// map()
// 출력
// [
//  "홍길동",
//  "김철수",
//  "이영희"
// ]
const names = students.map(student =>
    student.name
);
console.log(names);
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. 학생 검색
// find()
// 홍길동
// 찾아서 출력
const result1 = students.find(student =>
    student.name === "홍길동"
);
console.log(result);
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. 점수순 정렬
// 높은 점수부터 출력
students.sort(
    (a, b) => b.score - a.score
);
console.log(students);
/*----------------------------------------------------------------------------------------------------*/
// 과제 9. 학생 추가
// students.push(...)
students.push({
    name: "김지원",
    age: 23,
    score: 92
});
console.log(students);
/*----------------------------------------------------------------------------------------------------*/
// 과제 10. 학생 삭제
// 이름이
// 김철수
// 인 학생 삭제
// 힌트
// filter()
students = students.filter(student =>
    student.name !== "김철수"
);
console.log(students);
/*----------------------------------------------------------------------------------------------------*/