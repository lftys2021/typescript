/*----------------------------------------------------------------------------------------------------*/
// 과제 1. 문자열 Enum
console.log("--------------------------");
console.log("과제 1. 문자열 Enum");
console.log("--------------------------");
// 다음 Enum을 만드세요.
// Admin
// User
// Guest
// 각각 실제 값은:
// ADMIN
// USER
// GUEST
// 가 되도록 만드세요.
// 그리고:
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
console.log(Role.Admin);
console.log(Role.User);
console.log(Role.Guest);
// 를 출력하세요.
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. Enum 함수
console.log("--------------------------");
console.log("과제 2. Enum 함수");
console.log("--------------------------");
// 과제 1의 Role을 이용해서 다음 함수를 만드세요.
function printRole(role) {
    switch (role) {
        case Role.Admin:
            console.log("관리자입니다.");
            break;
        case Role.User:
            console.log("사용자입니다.");
            break;
        case Role.Guest:
            console.log("게스트입니다.");
            break;
    }
}
// 다음 결과가 나오도록 하세요.
printRole(Role.Admin);
// 출력:
// 관리자입니다.
// 그리고:
printRole(Role.User);
// 출력:
// 사용자입니다.
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. Tuple
console.log("--------------------------");
console.log("과제 3. Tuple");
console.log("--------------------------");
// 다음 정보를 Tuple로 만드세요.
// 이름 : 홍길동
// 나이 : 20
// 조건:
// 0번째 → string
// 1번째 → number
// 예상 형태:
var user1 = [
    "홍길동",
    20
];
// 그리고 이름과 나이를 출력하세요.
console.log(user1[0]);
console.log(user1[1]);
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. Tuple 3개
console.log("--------------------------");
console.log("과제 4. Tuple 3개");
console.log("--------------------------");
// 다음 학생 정보를 Tuple로 만드세요.
// 이름 : 김철수
// 나이 : 22
// 점수 : 85
// 조건:
// 0번째 → string
// 1번째 → number
// 2번째 → number
// 그리고 각각 출력하세요.
var user2 = [
    "홍길동",
    20,
    85
];
console.log(user2[0]);
console.log(user2[1]);
console.log(user2[2]);
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. Tuple + 구조 분해
// 다음 Tuple을 만드세요.
console.log("--------------------------");
console.log("과제 5. Tuple + 구조 분해");
console.log("--------------------------");
var product = [
    "노트북",
    1500000
];
// 그리고 구조 분해 할당을 이용해서:
// 상품명
// 가격
// 을 각각 출력하세요.
// 힌트:
var name1 = product[0], price = product[1];
console.log(name1);
console.log(price);
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. 함수 + Tuple
console.log("--------------------------");
console.log("과제 6. 함수 + Tuple");
console.log("--------------------------");
// 다음 함수를 완성하세요.
function getStudent() {
    return [
        "홍길동",
        20,
        95
    ];
}
// 반환값:
// 홍길동
// 20
// 95
// 그리고:
var student = getStudent();
// 을 이용해서 각각 출력하세요.
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. Enum + Student
console.log("--------------------------");
console.log("과제 7. Enum + Student");
console.log("--------------------------");
// 다음 Enum을 만드세요.
var StudentStatus;
(function (StudentStatus) {
    StudentStatus["Active"] = "ACTIVE";
    StudentStatus["Inactive"] = "INACTIVE";
})(StudentStatus || (StudentStatus = {}));
// 다음 학생을 생성하세요.
// 이름: 홍길동
// 나이: 20
// 상태: Active
// 그리고 출력하세요.
var student2 = {
    name: "홍길동",
    age: 20,
    status: StudentStatus.Active
};
console.log(student2);
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. Enum + switch
console.log("--------------------------");
console.log("과제 8. Enum + switch");
console.log("--------------------------");
// 다음 Enum을 이용하세요.
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// 다음 함수를 만드세요.
function move(direction) {
    // switch 사용
    switch (direction) {
        case Direction.Up:
            console.log("위로 이동합니다.");
            break;
        case Direction.Down:
            console.log("아래로 이동합니다.");
            break;
        case Direction.Left:
            console.log("왼쪽으로 이동합니다.");
            break;
        case Direction.Right:
            console.log("오른쪽으로 이동합니다.");
            break;
    }
}
// 예:
move(Direction.Up);
move(Direction.Left);
move(Direction.Down);
move(Direction.Right);
// 출력:
// 위로 이동합니다.
// 각 방향에 맞게 출력하도록 만드세요.
/*----------------------------------------------------------------------------------------------------*/ 
