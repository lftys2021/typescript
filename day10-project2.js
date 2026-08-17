// 프로젝트 2. 학생 관리
// 여기부터는 지금까지 공부한 배열/객체 문제를 하나의 프로그램으로 합칩니다.
// 사용할 것:
// Interface
// Type Alias
// Array
// function
// map()
// filter()
// find()
// reduce()
// sort()
/*----------------------------------------------------------------------------------------------------*/
// 1단계. Student Interface
setTimeout(function () {
    console.log("--------------------------");
    console.log("1단계. Student Interface");
    console.log("--------------------------");
}, 1000);
var student = {
    id: 1,
    name: "이명후",
    age: 21,
    score: 88
};
setTimeout(function () {
    console.log(student.id);
    console.log(student.name);
    console.log(student.age);
    console.log(student.score);
}, 2000);
/*----------------------------------------------------------------------------------------------------*/
// 2단계. 학생 데이터
setTimeout(function () {
    console.log("--------------------------");
    console.log("2단계. 학생 데이터");
    console.log("--------------------------");
}, 3000);
// 학생 5명을 만드세요.
// 예:
var students = [
    {
        id: 1,
        name: "홍길동",
        age: 20,
        score: 95
    },
    {
        id: 2,
        name: "김철수",
        age: 22,
        score: 80
    },
    {
        id: 3,
        name: "이영희",
        age: 21,
        score: 90
    },
    {
        id: 4,
        name: "박민수",
        age: 23,
        score: 70
    },
    {
        id: 5,
        name: "최지영",
        age: 20,
        score: 85
    }
];
setTimeout(function () {
    console.log(students);
}, 4000);
/*----------------------------------------------------------------------------------------------------*/
// 3단계. 학생 전체 출력
setTimeout(function () {
    console.log("--------------------------");
    console.log("3단계. 학생 전체 출력");
    console.log("--------------------------");
}, 5000);
function printStudents(students) {
    students.forEach(function (student) {
        var status = student.completed ? "완료" : "미완료";
        console.log("".concat(student.id, ". ").concat(student.name, " | ").concat(student.age, "\uC138 | ").concat(student.score, "\uC810"));
    });
}
setTimeout(function () {
    printStudents(students);
}, 6000);
/*----------------------------------------------------------------------------------------------------*/
// 4단계. 학생 검색
setTimeout(function () {
    console.log("--------------------------");
    console.log("4단계. 학생 검색");
    console.log("--------------------------");
}, 7000);
// find()를 사용합니다.
function findStudent(students, id) {
    var student = students.find(function (student) { return student.id === id; });
    return student;
}
setTimeout(function () {
    console.log(findStudent(students, 2));
}, 8000);
/*----------------------------------------------------------------------------------------------------*/
// 5단계. 이름으로 검색
setTimeout(function () {
    console.log("--------------------------");
    console.log("5단계. 이름으로 검색");
    console.log("--------------------------");
}, 9000);
function findStudentByName(students, name) {
    var student = students.find(function (student) { return student.name === name; });
    return student;
}
setTimeout(function () {
    console.log(findStudent(students, "김철수"));
}, 10000);
/*----------------------------------------------------------------------------------------------------*/
// 6단계. 평균 점수
setTimeout(function () {
    console.log("--------------------------");
    console.log("5단계. 이름으로 검색");
    console.log("--------------------------");
}, 11000);
// reduce()를 사용하세요.
function getAverageScore(students) {
    var avg = students.reduce(function (sum, student) { return sum + student.score; }, 2) / students.length;
    console.log(avg);
}
// 예:
// 평균 점수: 84
setTimeout(function () {
    getAverageScore(students);
}, 12000);
/*----------------------------------------------------------------------------------------------------*/
// 7단계. 최고 점수
setTimeout(function () {
    console.log("--------------------------");
    console.log("7단계. 최고 점수");
    console.log("--------------------------");
}, 13000);
// reduce()를 사용합니다.
function getTopStudent(students) {
}
// 학생 객체 자체를 반환하도록 해보세요.
/*----------------------------------------------------------------------------------------------------*/
// 8단계. 80점 이상
// function getPassedStudents(
//     students: Student[]
// ): Student[]
// filter() 사용.
/*----------------------------------------------------------------------------------------------------*/
// 9단계. 점수순 정렬
// 높은 점수부터:
// function sortByScore(
//     students: Student[]
// ): Student[]
// 힌트:
// students.sort(
//     (a, b) => b.score - a.score
// );
/*----------------------------------------------------------------------------------------------------*/
// 10단계. 학생 추가/삭제
// 추가:
// function addStudent(
//     students: Student[],
//     student: Student
// ): void
// 삭제:
// function deleteStudent(
//     students: Student[],
//     id: number
// ): void
/*----------------------------------------------------------------------------------------------------*/ 
