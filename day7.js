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
var role = "admin";
// 이런 식입니다.
// 그런데 프로그램이 커지면:
// "admin"
// "administrator"
// "Admin"
// "ADMIN"
// 처럼 실수할 가능성이 있습니다.
// Enum을 사용하면:
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
// 이렇게 정리할 수 있습니다.
// 사용할 때:
var role1 = Role.Admin;
console.log(role);
console.log(role1);
/*----------------------------------------------------------------------------------------------------*/
// 2. 숫자형 Enum
console.log("--------------------------");
console.log("2. 숫자형 Enum");
console.log("--------------------------");
// 가장 기본적인 Enum입니다.
var Role1;
(function (Role1) {
    Role1[Role1["Admin"] = 0] = "Admin";
    Role1[Role1["User"] = 1] = "User";
    Role1[Role1["Guest"] = 2] = "Guest";
})(Role1 || (Role1 = {}));
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
var Role2;
(function (Role2) {
    Role2[Role2["Admin"] = 1] = "Admin";
    Role2[Role2["User"] = 2] = "User";
    Role2[Role2["Guest"] = 3] = "Guest";
})(Role2 || (Role2 = {}));
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
var Role3;
(function (Role3) {
    Role3[Role3["Admin"] = 10] = "Admin";
    Role3[Role3["User"] = 20] = "User";
    Role3[Role3["Guest"] = 30] = "Guest";
})(Role3 || (Role3 = {}));
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
var Role4;
(function (Role4) {
    Role4["Admin"] = "ADMIN";
    Role4["User"] = "USER";
    Role4["Guest"] = "GUEST";
})(Role4 || (Role4 = {}));
// 사용:
console.log(Role4.Admin);
// 출력:
// ADMIN
// 이 방식은 실제 데이터와 연결할 때 이해하기 쉽습니다.
// 예를 들어:
var role2 = Role4.Admin;
console.log(role2);
/*----------------------------------------------------------------------------------------------------*/
// 6. Enum을 변수의 타입으로 사용하기
console.log("--------------------------");
console.log("6. Enum을 변수의 타입으로 사용하기");
console.log("--------------------------");
var Role5;
(function (Role5) {
    Role5["Admin"] = "ADMIN";
    Role5["User"] = "USER";
    Role5["Guest"] = "GUEST";
})(Role5 || (Role5 = {}));
// 다음과 같이 사용할 수 있습니다.
var role3;
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
var Role6;
(function (Role6) {
    Role6["Admin"] = "ADMIN";
    Role6["User"] = "USER";
    Role6["Guest"] = "GUEST";
})(Role6 || (Role6 = {}));
function printRole(role) {
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
var Role7;
(function (Role7) {
    Role7["Admin"] = "ADMIN";
    Role7["User"] = "USER";
    Role7["Guest"] = "GUEST";
})(Role7 || (Role7 = {}));
function checkRole(role) {
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
function checkRole2(role) {
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
var user = [
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
var values = [
    "홍길동",
    20
];
// 이 경우 순서가 명확하지 않습니다.
// 반면 Tuple:
var user1 = [
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
var user2 = [
    20,
    "홍길동"
];
// 오류가 발생합니다.
// 왜냐하면:
// 0번째는 string이어야 함
// 그런데 숫자 20이 들어갔기 때문입니다.
console.log(user2);
console.log("타입이 바뀌어 들어가서 오류");
/*----------------------------------------------------------------------------------------------------*/
// 13. Tuple의 요소 개수
console.log("--------------------------");
console.log("13. Tuple의 요소 개수");
console.log("--------------------------");
var user4 = [
    "홍길동"
];
// 이것도 오류입니다.
// 두 개가 필요하기 때문입니다.
var user5 = [
    "홍길동",
    20
];
// 정상입니다.
console.log(user4);
console.log("Tuple의 요소 개수가 부족하여 오류");
console.log(user5);
/*----------------------------------------------------------------------------------------------------*/
// 14. Tuple 3개
console.log("--------------------------");
console.log("14. Tuple 3개");
console.log("--------------------------");
// Tuple은 여러 타입을 사용할 수 있습니다.
var user6 = [
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
function getUser() {
    return [
        "홍길동",
        20
    ];
}
// 사용:
var user7 = getUser();
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
var user8 = [
    "홍길동",
    20
];
var name = user8[0], age = user8[1];
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
var user9 = [
    "홍길동"
];
// 여기서는:
// 0번째 → string
// 1번째 → number 또는 없음
// 입니다.
// 따라서 이것도 가능합니다.
var user10 = [
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
var user11 = [
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
var StudentStatus;
(function (StudentStatus) {
    StudentStatus["Active"] = "ACTIVE";
    StudentStatus["Inactive"] = "INACTIVE";
})(StudentStatus || (StudentStatus = {}));
// 그리고 학생 정보를 Tuple로:
var student = [
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
var student1 = [
    "홍길동",
    20,
    StudentStatus.Active
];
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
