// Day 7. Enum & Tuple
// 오늘의 학습 목표
// Enum이 무엇인지
// 숫자형 Enum
// 문자열 Enum
// Enum 사용법
// Tuple이 무엇인지
// Tuple의 타입 지정
// Optional Tuple
// Readonly Tuple
// Enum + Tuple 조합
// 실습 과제
/*----------------------------------------------------------------------------------------------------*/
// 1. Enum이란?
console.log("--------------------------");
console.log("1. Enum이란?");
console.log("--------------------------");
// Enum은 정해진 값들을 이름으로 관리하는 타입입니다.
// 예를 들어 사용자 권한이 있다고 해봅시다.
// 관리자
// 일반 사용자
// 게스트
// 문자열로 관리하면:
const role = "admin";
// 이런 식입니다.
// 그런데 프로그램이 커지면:
// "admin"
// "administrator"
// "Admin"
// "ADMIN"
// 처럼 실수할 가능성이 있습니다.
// Enum을 사용하면:
enum Role {
    Admin,
    User,
    Guest
}
// 이렇게 정리할 수 있습니다.
// 사용할 때:
const role1 = Role.Admin;
console.log(role);
console.log(role1);
/*----------------------------------------------------------------------------------------------------*/
// 2. 숫자형 Enum
console.log("--------------------------");
console.log("2. 숫자형 Enum");
console.log("--------------------------");
// 가장 기본적인 Enum입니다.
enum Role1 {
    Admin,
    User,
    Guest
}
// TypeScript는 기본적으로 숫자를 자동으로 부여합니다.
// Admin = 0
// User  = 1
// Guest = 2
// 따라서:
console.log(Role1.Admin);
console.log(Role1.User);
console.log(Role1.Guest);
// 출력:
// 0
// 1
// 2
/*----------------------------------------------------------------------------------------------------*/
// 3. 시작 숫자를 지정할 수도 있다
console.log("--------------------------");
console.log("3. 시작 숫자를 지정할 수도 있다");
console.log("--------------------------");
enum Role2 {
    Admin = 1,
    User,
    Guest
}
// 그러면:
// Admin = 1
// User  = 2
// Guest = 3
// 이 됩니다.
console.log(Role2.Admin);
console.log(Role2.User);
console.log(Role2.Guest);
/*----------------------------------------------------------------------------------------------------*/
// 4. 각각 숫자를 지정할 수도 있다
console.log("--------------------------");
console.log("4. 각각 숫자를 지정할 수도 있다");
console.log("--------------------------");
enum Role3 {
    Admin = 10,
    User = 20,
    Guest = 30
}
// 이제:
console.log(Role3.Admin);
// 결과:
// 10
// 입니다.
/*----------------------------------------------------------------------------------------------------*/
// 5. 문자열 Enum
console.log("--------------------------");
console.log("5. 문자열 Enum");
console.log("--------------------------");
// 실무에서는 문자열 Enum도 자주 사용합니다.
enum Role4 {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
// 사용:
console.log(Role4.Admin);
// 출력:
// ADMIN
// 이 방식은 실제 데이터와 연결할 때 이해하기 쉽습니다.
// 예를 들어:
const role2: Role4 = Role4.Admin;
console.log(role2);
/*----------------------------------------------------------------------------------------------------*/
// 6. Enum을 변수의 타입으로 사용하기
console.log("--------------------------");
console.log("6. Enum을 변수의 타입으로 사용하기");
console.log("--------------------------");
enum Role5 {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
// 다음과 같이 사용할 수 있습니다.
let role3: Role5;
console.log(role);
role3 = Role5.Admin;
console.log(role3);
// 가능합니다.
// 하지만:
// rolef = "ADMIN";
// console.log(rolef);
// 은 일반적으로 Role 타입으로 직접 할당할 수 없습니다.
// Enum의 멤버를 사용하는 것이 기본입니다.
// role_f = Role5.Admin;
// console.log(role_f);
/*----------------------------------------------------------------------------------------------------*/
// 7. Enum을 함수에서 사용하기
console.log("--------------------------");
console.log("7. Enum을 함수에서 사용하기");
console.log("--------------------------");
enum Role6 {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
function printRole(role: Role6): void {
    console.log(role);
}

// 사용:
printRole(Role6.Admin);
printRole(Role6.User);
// 이렇게 하면 함수에 Role에 정의된 값만 전달하도록 타입을 제한할 수 있습니다.
/*----------------------------------------------------------------------------------------------------*/
// 8. Enum으로 조건문 만들기
console.log("--------------------------");
console.log("8. Enum으로 조건문 만들기");
console.log("--------------------------");
enum Role7 {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
function checkRole(role: Role7): void {
    if (role === Role7.Admin) {
        console.log("관리자입니다.");
    }
    if (role === Role7.User) {
        console.log("일반 사용자입니다.");
    }
    if (role === Role7.Guest) {
        console.log("게스트입니다.");
    }
}
// 사용:
checkRole(Role7.Admin);
checkRole(Role7.User);
checkRole(Role7.Guest);
// 출력:
// 관리자입니다.
/*----------------------------------------------------------------------------------------------------*/
// 9. switch와 Enum
console.log("--------------------------");
console.log("9. switch와 Enum");
console.log("--------------------------");
// Enum은 switch와도 잘 어울립니다.
function checkRole2(role: Role): void {
    switch (role) {
        case Role.Admin:
            console.log("관리자");
            break;
        case Role.User:
            console.log("사용자");
            break;
        case Role.Guest:
            console.log("게스트");
            break;
    }
}
// 이 형태는 나중에 Vue에서 상태값을 처리할 때도 볼 수 있습니다.
checkRole2(Role.Admin);
checkRole2(Role.User);
checkRole2(Role.Guest);
/*----------------------------------------------------------------------------------------------------*/
// 10. Tuple이란?
console.log("--------------------------");
console.log("10. Tuple이란?");
console.log("--------------------------");
// 이제 Tuple입니다.
// Tuple은 배열처럼 생겼지만 각 위치의 타입과 순서가 정해져 있는 자료형입니다.
// 예를 들어:
const user: [string, number] = [
    "홍길동",
    20
];
// 여기서:
// 0번째 → string
// 1번째 → number
// 입니다.
// 따라서:
console.log(user[0]);
// 결과:
// 홍길동
// 그리고:
console.log(user[1]);
// 결과:
// 20
/*----------------------------------------------------------------------------------------------------*/
// 11. 일반 배열과 Tuple의 차이
console.log("--------------------------");
console.log("11. 일반 배열과 Tuple의 차이");
console.log("--------------------------");
// 일반 배열:
const values: (string | number)[] = [
    "홍길동",
    20
];
// 이 경우 순서가 명확하지 않습니다.
// 반면 Tuple:
const user1: [string, number] = [
    "홍길동",
    20
];
// 는:
// 0번째 → string
// 1번째 → number
// 라는 규칙이 있습니다.
console.log(values);
console.log(user1);
/*----------------------------------------------------------------------------------------------------*/
// 12. Tuple에서 순서를 바꾸면?
console.log("--------------------------");
console.log("12. Tuple에서 순서를 바꾸면?");
console.log("--------------------------");
// const user2: [string, number] = [
//     20,
//     "홍길동"
// ];
// 오류가 발생합니다.
// 왜냐하면:
// 0번째는 string이어야 함
// 그런데 숫자 20이 들어갔기 때문입니다.
// console.log(user2);
console.log("타입이 바뀌어 들어가서 오류");
/*----------------------------------------------------------------------------------------------------*/
// 13. Tuple의 요소 개수
console.log("--------------------------");
console.log("13. Tuple의 요소 개수");
console.log("--------------------------");
// const user4: [string, number] = [
//     "홍길동"
// ];
// 이것도 오류입니다.
// 두 개가 필요하기 때문입니다.
const user5: [string, number] = [
    "홍길동",
    20
];
// 정상입니다.
// console.log(user4);
console.log("Tuple의 요소 개수가 부족하여 오류");
console.log(user5);
/*----------------------------------------------------------------------------------------------------*/
// 14. Tuple 3개
console.log("--------------------------");
console.log("14. Tuple 3개");
console.log("--------------------------");
// Tuple은 여러 타입을 사용할 수 있습니다.
const user6: [string, number, boolean] = [
    "홍길동",
    20,
    true
];
// 각각:
// 0 → string
// 1 → number
// 2 → boolean
// 입니다.
console.log(user6);
/*----------------------------------------------------------------------------------------------------*/
// 15. Tuple을 함수의 반환값으로 사용
console.log("--------------------------");
console.log("15. Tuple을 함수의 반환값으로 사용");
console.log("--------------------------");
// Tuple은 함수에서 여러 값을 반환할 때 유용합니다.
function getUser(): [string, number] {
    return [
        "홍길동",
        20
    ];
}
// 사용:
const user7 = getUser();
console.log(user7[0]);
console.log(user7[1]);
// 출력:
// 홍길동
// 20
/*----------------------------------------------------------------------------------------------------*/
// 16. 구조 분해 할당 + Tuple
console.log("--------------------------");
console.log("16. 구조 분해 할당 + Tuple");
console.log("--------------------------");
// 여기서 Day 7의 Tuple과 이전에 배운 ES6 문법이 연결됩니다.
const user8: [string, number] = [
    "홍길동",
    20
];
const [name, age] = user8;
console.log(name);
console.log(age);
// 결과:
// 홍길동
// 20
// Vue에서도 이런 형태를 상당히 자주 만나게 됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 17. Optional Tuple
console.log("--------------------------");
console.log("17. Optional Tuple");
console.log("--------------------------");
// Tuple의 특정 요소를 선택적으로 만들 수도 있습니다.
const user9: [string, number?] = [
    "홍길동"
];
// 여기서는:
// 0번째 → string
// 1번째 → number 또는 없음
// 입니다.
// 따라서 이것도 가능합니다.
const user10: [string, number?] = [
    "홍길동",
    20
];
console.log(user9);
console.log(user10);
/*----------------------------------------------------------------------------------------------------*/
// 18. Readonly Tuple
console.log("--------------------------");
console.log("18. Readonly Tuple");
console.log("--------------------------");
// Tuple도 readonly로 만들 수 있습니다.
const user11: readonly [string, number] = [
    "홍길동",
    20
];
// 이제:
//ser11[0] = "김철수";
// 하면 오류가 발생합니다.
// Tuple의 값을 변경하지 못하도록 하는 것입니다.
console.log(user11[0]);
//console.log("readonly라서 튜플값이 변경 안 됨");
/*----------------------------------------------------------------------------------------------------*/
// 19. Enum + Tuple
console.log("--------------------------");
console.log("19. Enum + Tuple");
console.log("--------------------------");
// 둘을 같이 사용할 수도 있습니다.
// 예를 들어 학생의 상태를 관리한다고 해봅시다.
enum StudentStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
// 그리고 학생 정보를 Tuple로:
const student: [string, number, StudentStatus] = [
    "홍길동",
    20,
    StudentStatus.Active
];
// 구조는:
// 0 → 이름
// 1 → 나이
// 2 → 상태
// 입니다.
// 출력:
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
/*----------------------------------------------------------------------------------------------------*/
// 20. 실전에서는 Interface가 더 좋은 경우도 많다
console.log("--------------------------");
console.log("20. 실전에서는 Interface가 더 좋은 경우도 많다");
console.log("--------------------------");
// 여기서 중요한 점이 있습니다.
// Tuple:
const student1: [string, number, StudentStatus] = [
    "홍길동",
    20,
    StudentStatus.Active
];
// 보다 학생 정보를 표현하는 데는 Interface가 더 읽기 쉽습니다.
interface Student {
    name: string;
    age: number;
    status: StudentStatus;
}
// 왜냐하면:
// student1.name
// student1.age
// student1.status
// 처럼 사용할 수 있기 때문입니다.
// 따라서:
// Tuple은 아무 곳에서나 쓰는 것이 아니라 데이터의 순서가 중요한 경우에 사용한다.
// 라고 기억하세요.
console.log(student1[0]);
/*----------------------------------------------------------------------------------------------------*/