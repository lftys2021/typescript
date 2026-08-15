// Day 8. class
// 지금까지 배운 흐름은:
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
// 기본 타입
// → 함수
// → 배열/객체
// → Interface
// → Type Alias
// → Generic
// → Enum
// → Tuple
// → Class
// 오늘 배우는 Class는 객체를 만드는 설계도입니다.
// 특히:
// Vue + TypeScript
// Node.js
// NestJS
// Java
// C#
// 등에서는 Class를 자주 사용합니다.
// 다만 Vue 자체는 Interface와 Type을 더 많이 사용하고, Class는 알아두는 정도면 충분합니다.
/*----------------------------------------------------------------------------------------------------*/
// 1. Class란?
// 예를 들어 학생 객체를 계속 만든다고 합시다.
// 지금까지는:
console.log("--------------------------");
console.log("1. Class란?");
console.log("--------------------------");
var student1 = {
    name: "홍길동",
    age: 20
};
var student2 = {
    name: "김철수",
    age: 22
};
console.log(student1);
console.log(student2);
// 이렇게 만들었습니다.
// 학생이 100명이라면?
// 매번 같은 구조 반복
// 그래서 Class를 사용합니다.
/*----------------------------------------------------------------------------------------------------*/
// 2. 가장 기본 Class
console.log("--------------------------");
console.log("2. 가장 기본 Class");
console.log("--------------------------");
var Student1 = /** @class */ (function () {
    function Student1(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student1;
}());
// 생성:
var student3 = new Student1("홍길동", 20);
console.log(student3);
// 결과:
// Student1 {
//     name: '홍길동',
//     age: 20
// }
/*----------------------------------------------------------------------------------------------------*/
// 3. this
console.log("--------------------------");
console.log("3. this");
console.log("--------------------------");
// this.name
// 뜻:
// 현재 객체의 name
// 예:
var Student2 = /** @class */ (function () {
    function Student2(name) {
        this.name = name;
    }
    return Student2;
}());
var student4 = new Student2("홍길동");
console.log(student4);
/*----------------------------------------------------------------------------------------------------*/
// 4. 메서드(Method)
console.log("--------------------------");
console.log("4. 메서드(Method)");
console.log("--------------------------");
// 객체 안의 함수입니다.
var Student3 = /** @class */ (function () {
    function Student3(name) {
        this.name = name;
    }
    Student3.prototype.introduce = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694. ".concat(this.name, "\uC785\uB2C8\uB2E4."));
    };
    return Student3;
}());
// 사용:
var s = new Student3("홍길동");
s.introduce();
// 결과:
// 안녕하세요. 홍길동입니다.
/*----------------------------------------------------------------------------------------------------*/
// 5. 여러 속성
console.log("--------------------------");
console.log("5. 여러 속성");
console.log("--------------------------");
var Student4 = /** @class */ (function () {
    function Student4(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }
    return Student4;
}());
// 생성:
var s1 = new Student4("홍길동", 20, 95);
console.log(s1);
/*----------------------------------------------------------------------------------------------------*/
// 6. constructor 축약형
console.log("--------------------------");
console.log("6. constructor 축약형");
console.log("--------------------------");
// TypeScript에서는 이렇게 많이 씁니다.
var Student5 = /** @class */ (function () {
    function Student5(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
        this.name = name;
        this.age = age;
        this.score = score;
    }
    return Student5;
}());
// 위 코드와:
// name: string;
// age: number;
// score: number;
// this.name = name;
// 이 자동으로 합쳐집니다.
// 실무에서는 이 방식이 많이 사용됩니다.
var s2 = new Student5("홍길동", 20, 95);
console.log(s2);
/*----------------------------------------------------------------------------------------------------*/
// 7. public
console.log("--------------------------");
console.log("7. public");
console.log("--------------------------");
// 기본값입니다.
// public name: string
// 밖에서 접근 가능.
console.log(Student5.name);
// 가능.
/*----------------------------------------------------------------------------------------------------*/
// 8. private
console.log("--------------------------");
console.log("8. private");
console.log("--------------------------");
// 밖에서 접근 불가능.
var Student6 = /** @class */ (function () {
    function Student6(score) {
        this.score = score;
    }
    return Student6;
}());
// 이건 오류:
// student.score
console.log(Student6.score);
/*----------------------------------------------------------------------------------------------------*/
// 9. readonly
console.log("--------------------------");
console.log("9. readonly");
console.log("--------------------------");
// 생성 후 변경 불가.
var Student = /** @class */ (function () {
    function Student(id) {
        this.id = id;
    }
    return Student;
}());
// 오류:
// student.id = 10;
var student7 = new Student(10);
console.log(student7.id);
/*----------------------------------------------------------------------------------------------------*/
// 10. 메서드 여러 개
console.log("--------------------------");
console.log("10. 메서드 여러 개");
console.log("--------------------------");
var Student8 = /** @class */ (function () {
    function Student8(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Student8.prototype.introduce = function () {
        console.log("\uC774\uB984: ".concat(this.name));
    };
    Student8.prototype.birthday = function () {
        this.age++;
    };
    return Student8;
}());
// 사용:
var s3 = new Student8("홍길동", 20);
s3.birthday();
console.log(s3.age);
// 결과:
// 21
/*----------------------------------------------------------------------------------------------------*/
// 11. Interface + Class
console.log("--------------------------");
console.log("11. Interface + Class");
console.log("--------------------------");
// Class가 구현:
var Student9 = /** @class */ (function () {
    function Student9(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return Student9;
}());
var s4 = new Student9("홍길동", 20);
console.log(s4.name);
console.log(s4.age);
/*----------------------------------------------------------------------------------------------------*/
// 12. 상속(Inheritance)
console.log("--------------------------");
console.log("12. 상속(Inheritance)");
console.log("--------------------------");
// 부모 클래스:
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("움직입니다.");
    };
    return Animal;
}());
// 상속:
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this) || this;
    }
    Dog.prototype.info = function (info) {
        throw new Error("Method not implemented.");
    };
    Dog.prototype.Dog = function () {
        this.move();
    };
    return Dog;
}(Animal));
// 사용:
var dog = new Dog();
dog.move();
// 결과:
// 움직입니다.
/*----------------------------------------------------------------------------------------------------*/
// 13. 메서드 오버라이드
console.log("--------------------------");
console.log("13. 메서드 오버라이드");
console.log("--------------------------");
// 부모:
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sound = function () {
        console.log("동물 소리");
    };
    return Animal;
}());
// 자식:
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sound = function () {
        console.log("멍멍");
    };
    return Dog;
}(Animal));
var dog1 = new Dog();
dog1.sound();
// 결과:
// 멍멍
/*----------------------------------------------------------------------------------------------------*/
// 14. super
console.log("--------------------------");
console.log("14. super");
console.log("--------------------------");
// 부모 생성자 호출.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    return Dog;
}(Animal));
var dog2 = new Dog("멍멍이");
console.log(dog2.name);
// 결과:
// 멍멍이
/*----------------------------------------------------------------------------------------------------*/
// 15. Getter / Setter
console.log("--------------------------");
console.log("15. Getter / Setter");
console.log("--------------------------");
// 값 읽기:
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
var s5 = new Student10("홍길동");
console.log(s5.info);
s5.changeName = "김철수";
console.log(s5.info);
/*----------------------------------------------------------------------------------------------------*/
