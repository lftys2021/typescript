var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*----------------------------------------------------------------------------------------------------*/
// 과제 1. 학생 Class
console.log("--------------------------");
console.log("과제 1. 학생 Class");
console.log("--------------------------");
// 다음 Class를 만드세요.
// name
// age
// 생성자 포함.
// 학생 생성:
// 홍길동
// 20
// 출력:
// 홍길동
// 20
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var student = new Student("홍길동", 20);
console.log(student.name);
console.log(student.age);
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. 메서드
console.log("--------------------------");
console.log("과제 2. 메서드");
console.log("--------------------------");
// Class에 메서드를 추가하세요.
// introduce()
// 출력:
// 안녕하세요. 홍길동입니다.
var StudentWithMethod = /** @class */ (function () {
    function StudentWithMethod(name, age) {
        this.name = name;
        this.age = age;
    }
    StudentWithMethod.prototype.introduce = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694. ".concat(this.name, "\uC785\uB2C8\uB2E4."));
    };
    return StudentWithMethod;
}());
var student2 = new StudentWithMethod("홍길동", 20);
student2.introduce();
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. 점수 추가
console.log("--------------------------");
console.log("과제 3. 점수 추가");
console.log("--------------------------");
// 속성:
// name
// age
// score
// 메서드:
// showScore()
// 출력:
// 점수: 95
var StudentWithScore = /** @class */ (function () {
    function StudentWithScore(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }
    StudentWithScore.prototype.showScore = function () {
        console.log("\uC810\uC218: ".concat(this.score));
    };
    return StudentWithScore;
}());
var studentWithScore = new StudentWithScore("홍길동", 20, 95);
studentWithScore.showScore();
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. birthday()
console.log("--------------------------");
console.log("과제 4. birthday()");
console.log("--------------------------");
// 나이를 1 증가시키세요.
// birthday()
var StudentWithBirthday = /** @class */ (function () {
    function StudentWithBirthday(name, age) {
        this.name = name;
        this.age = age;
    }
    StudentWithBirthday.prototype.birthday = function () {
        this.age += 1;
    };
    return StudentWithBirthday;
}());
var studentWithBirthday = new StudentWithBirthday("홍길동", 20);
console.log(studentWithBirthday.age);
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. readonly
console.log("--------------------------");
console.log("과제 5. readonly");
console.log("--------------------------");
// id
// 는 수정 불가능하게 하세요.
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. private
console.log("--------------------------");
console.log("과제 6. private");
console.log("--------------------------");
// password
// 는 외부 접근 불가능하게 하세요.
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. Interface + Class
console.log("--------------------------");
console.log("과제 7. Interface + Class");
console.log("--------------------------");
// interface Person
// 를 만들고:
// class Student implements Person
// 를 구현하세요.
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. 상속
console.log("--------------------------");
console.log("과제 8. 상속");
console.log("--------------------------");
// Animal
// ↓
// Dog
// 상속하세요.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("움직입니다.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this) || this;
    }
    return Dog;
}(Animal));
var dog = new Dog();
console.log(dog.move());
/*----------------------------------------------------------------------------------------------------*/
// 과제 9. 오버라이드
console.log("--------------------------");
console.log("과제 9. 오버라이드");
console.log("--------------------------");
// sound()
// 를 오버라이드하세요.
var AnimalWithSound = /** @class */ (function () {
    function AnimalWithSound() {
    }
    AnimalWithSound.prototype.sound = function () {
        console.log("소리를 냅니다.");
    };
    return AnimalWithSound;
}());
var DogWithSound = /** @class */ (function (_super) {
    __extends(DogWithSound, _super);
    function DogWithSound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogWithSound.prototype.sound = function () {
        console.log("멍멍");
    };
    return DogWithSound;
}(AnimalWithSound));
var dogWithSound = new DogWithSound();
dogWithSound.sound();
/*----------------------------------------------------------------------------------------------------*/
// 과제 10. Getter / Setter
console.log("--------------------------");
console.log("과제 10. Getter / Setter");
console.log("--------------------------");
// 이름 변경 기능을 만드세요.
var Student10 = /** @class */ (function () {
    function Student10(name) {
        this.name = name;
    }
    Object.defineProperty(Student10.prototype, "info", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student10.prototype, "changeName", {
        // 값 설정:
        set: function (name1) {
            this.name = name1;
        },
        enumerable: false,
        configurable: true
    });
    return Student10;
}());
var dog3 = new Student10("멍멍이");
console.log(dog3.info);
dog3.changeName = "강아지";
console.log(dog3.info);
/*----------------------------------------------------------------------------------------------------*/ 
