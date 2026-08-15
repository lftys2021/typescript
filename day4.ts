/*----------------------------------------------------------------------------------------------------*/
// Day 4. Interface
// 학습 목표

// 오늘은 다음을 익힙니다.

// interface란 무엇인가
// 객체 타입을 interface로 정의하기
// interface를 배열에 사용하기
// 선택적 속성 ?
// readonly
// 함수에서 interface 사용하기
// interface 확장 extends
// 실제 Vue에서 interface가 어떻게 사용되는지 이해하기
/*----------------------------------------------------------------------------------------------------*/
// 1. Interface란?
// 간단하게 말하면
// 객체의 구조를 미리 정의해 놓는 것
// 입니다.
// 예를 들어 학생 객체가 항상
// 이름
// 나이
// 점수
// 를 가지고 있다고 해봅시다.
// 그러면:
interface Student {
    name: string;
    age: number;
    score: number;
}
// 이렇게 정의할 수 있습니다.
// 이제 Student라는 타입을 사용할 수 있습니다.
const student: Student = {
    name: "홍길동",
    age: 20,
    score: 95
};
console.log(student);
/*----------------------------------------------------------------------------------------------------*/
// 2. Interface의 기본 문법
interface User {
    name: string;
    age: number;
}
// 그리고:
const user: User = {
    name: "홍길동",
    age: 20
};
// 이렇게 사용합니다.
console.log(user);
/*----------------------------------------------------------------------------------------------------*/
// 3. 잘못된 객체
// 예를 들어:
interface User {
    name: string;
    age: number;
}
// 그런데:
const user1: User = {
    name: "홍길동"
};
// 이렇게 작성하면 오류가 발생합니다.
// 왜냐하면 age가 반드시 필요한 속성이기 때문입니다.
console.log(user1);
/*----------------------------------------------------------------------------------------------------*/
// 4. 타입이 잘못된 경우
interface User {
    name: string;
    age: number;
}
// 다음은 오류입니다.
const user2: User = {
    name: "홍길동",
    age: "20"
};
// age는 number 여야 하는데 string으로 잘못 넣었기 때문입니다.
console.log(user2);
/*----------------------------------------------------------------------------------------------------*/
// 5. Interface + 배열
// 이 부분이 매우 중요합니다.
// Day 3에서 작성했던 코드:
const students1: {
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
    }
];
console.log(students1);
// Interface를 사용하면:
interface Student {
    name: string;
    age: number;
    score: number;
}
//그리고:
const students2: Student[] = [
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
/*----------------------------------------------------------------------------------------------------*/
// 6. 여러 곳에서 재사용
// Interface의 가장 큰 장점입니다.
interface Student {
    name: string;
    age: number;
    score: number;
}
// 이 하나를 만들어 놓으면:
const student1: Student = {
    name: "홍길동",
    age: 20,
    score: 95
};
const student2: Student = {
    name: "김철수",
    age: 22,
    score: 80
};
const students3: Student[] = [
    student1,
    student2
];
//모두 사용할 수 있습니다.
console.log(student1);
console.log(student2);
console.log(students3);
/*----------------------------------------------------------------------------------------------------*/
// 7. 함수에서도 사용
// Day 2에서 배운 함수와 결합해 봅시다.
interface Student {
    name: string;
    age: number;
    score: number;
}
// 학생을 출력하는 함수:
function printStudent(student: Student): void {
    console.log(student.name);
    console.log(student.age);
    console.log(student.score);
}
// 사용:
const student3: Student = {
    name: "홍길동",
    age: 20,
    score: 95
};
printStudent(student3);
/*----------------------------------------------------------------------------------------------------*/
// 8. 함수의 반환값에도 사용
function createStudent(): Student {
    return {
        name: "홍길동",
        age: 20,
        score: 95
    };
}
// 이 함수는 반드시 Student 구조의 객체를 반환해야 합니다.
console.log(createStudent());
/*----------------------------------------------------------------------------------------------------*/
// 9. 선택적 속성 ?
// 모든 학생이 반드시 같은 정보를 가지고 있지 않을 수도 있습니다.
// 예를 들어 이메일은 선택사항이라고 해봅시다.
interface Student {
    name: string;
    age: number;
    score: number;
    email?: string;
}
// 그러면:
const student4: Student = {
    name: "홍길동",
    age: 20,
    score: 95
};
// 이것도 가능합니다.
// 그리고:
const student5: Student = {
    name: "김철수",
    age: 22,
    score: 80,
    email: "kim@example.com"
};
// 이것도 가능합니다. ?는 '있어도 되고 없어도 된다'라는 의미입니다.
console.log(student4);
console.log(student5);
/*----------------------------------------------------------------------------------------------------*/
// 11. Interface 확장 extends
// Interface는 다른 Interface를 상속할 수 있습니다.
// 예를 들어:
interface Person {
    name: string;
    age: number;
}
// 학생은 사람의 속성을 가지고 있으면서 추가로 점수가 있다고 해봅시다.
interface Student extends Person {
    score: number;
}
// 그러면:
const student6: Student = {
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
/*----------------------------------------------------------------------------------------------------*/
// 12. Interface 여러 개 확장
interface Person {
    name: string;
    age: number;
}
interface StudentInfo {
    school: string;
}
interface Student extends Person, StudentInfo {
    score: number;
}
// 그러면:
const student7: Student = {
    name: "홍길동",
    age: 20,
    school: "서울대학교",
    score: 95
};
// 가 가능합니다.
console.log(student7);
/*----------------------------------------------------------------------------------------------------*/
// 13. Interface와 Type
// TypeScript에서는 interface 외에 type도 사용할 수 있습니다.
// interface Student {
//     name: string;
//     age: number;
// }
// // 비슷하게:
// type Student = {
//     name: string;
//     age: number;
// };
// 둘 다 객체의 타입을 정의할 수 있습니다.
// 처음에는 이렇게 기억하면 됩니다.
// 객체의 구조를 정의할 때 interface를 우선 사용한다.
// type은 이후에 배울 Union Type, Tuple, 복잡한 타입 조합 등에서 더 많이 활용합니다.
/*----------------------------------------------------------------------------------------------------*/
