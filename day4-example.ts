// 과제 1. User Interface
// 다음 정보를 가진 User Interface를 만드세요.
// id : number
// name : string
// email : string
// 그리고 사용자 객체를 하나 만드세요.
// interface Student {
//     id : number;
//     name : string;
//     email : string
// }
// const student: Student = {
//     id: 1,
//     name: "홍길동",
//     email: "abc@example.co.kr"
// };
// console.log(student);
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. Product Interface
// 다음 정보를 가진 상품 Interface를 만드세요.
// name : string
// price : number
// stock : number
// 상품 3개를 배열에 넣으세요.
// const products: Product[] = [...]
interface Product {
    name : string;
    price : number;
    stock : number
}
const products: {
    name : string;
    price : number;
    stock : number
}[] = [
    {
        name : "초코파이",
        price : 5000,
        stock : 2
    },
    {
        name : "몽쉘",
        price : 4800,
        stock : 12
    },
    {
        name : "오예스",
        price : 4700,
        stock : 0
    }
];
console.log(products);
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. 학생 Interface
// 다음 Interface를 만드세요.
interface Student {
    name: string;
    age: number;
    score: number;
}

// 학생 3명을 배열에 넣으세요.
// 그리고 forEach()를 이용해 학생 이름을 출력하세요.
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
console.log(students);
students.forEach(student => {
    console.log(student.name);
});
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. 평균 점수 함수
// Student Interface를 이용해서 함수를 만드세요.
// function getAverage(student: Student): number
// 예:
const student3: Student = {
    name: "홍길동",
    age: 20,
    score: 95
};
function getAverage(student: Student): number {
    console.log(student.name);
    console.log(student.age);
    console.log(student.score);
}

console.log(getAverage(student3));
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. 학생 검색 함수
// 학생 배열에서 이름으로 학생을 찾는 함수를 만드세요.
function findStudent(
    students: Student[],
    name: string
): Student | undefined {
    return students.find(student =>
        student.name === name
    );
}
// 사용:
const result = findStudent(students, "홍길동");
console.log(result);
// 여기서 **Student | undefined**가 등장하는 이유는 find()가 학생을 못 찾으면 undefined를 반환하기 때문입니다.
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. 선택적 속성
// 다음 Interface를 만드세요.
// name : string
// age : number
// email : 선택사항
// 따라서 다음 두 객체가 모두 정상이어야 합니다.
interface Student {
    name: string;
    age: number;
    email?: string;
}
const user1: Student = {
    name: "홍길동",
    age: 20
};
const user2: Student = {
    name: "김철수",
    age: 22,
    email: "kim@example.com"
};

console.log(user1);
console.log(user2);
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. readonly
// 다음 Interface를 만드세요.
// id : 수정 불가능
// name : 수정 가능
// 그리고 실제로 id를 변경하려고 했을 때 TypeScript가 오류를 발생시키는지 확인해보세요.
interface User {
    readonly id: number;
    name: string;
}
const user3: User = {
    id: 1,
    name: "홍길동"
};
console.log(user3);
user3.name = "김철수";
console.log(user3);
user3.id = 2;
console.log(user3);
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. Interface extends
// 다음 Interface를 만드세요.
interface Person {
    name: string;
    age: number;
    score: number;
}
// 그리고 Student가 Person을 상속받도록 만드세요.
// 추가 속성:
// score : number
// 최종적으로:
const student: Student = {
    name: "홍길동",
    age: 20,
    score: 95
};
// 가 정상적으로 동작하도록 만들어보세요.
console.log(student);
/*----------------------------------------------------------------------------------------------------*/