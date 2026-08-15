// Day 8. class
// 지금까지 배운 흐름은:

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
const student1 = {
    name: "홍길동",
    age: 20
};
const student2 = {
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
class Student1 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// 생성:
const student3 = new Student1("홍길동", 20);
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
class Student2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
const student4 = new Student2("홍길동");
console.log(student4);
/*----------------------------------------------------------------------------------------------------*/
// 4. 메서드(Method)
console.log("--------------------------");
console.log("4. 메서드(Method)");
console.log("--------------------------");
// 객체 안의 함수입니다.
class Student3 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    introduce(): void {
        console.log(`안녕하세요. ${this.name}입니다.`);
    }
}
// 사용:
const s = new Student3("홍길동");
s.introduce();
// 결과:
// 안녕하세요. 홍길동입니다.
/*----------------------------------------------------------------------------------------------------*/
// 5. 여러 속성
console.log("--------------------------");
console.log("5. 여러 속성");
console.log("--------------------------");
class Student4 {
    name: string;
    age: number;
    score: number;

    constructor(
        name: string,
        age: number,
        score: number
    ) {
        this.name = name;
        this.age = age;
        this.score = score;
    }
}

// 생성:
const s1 = new Student4(
    "홍길동",
    20,
    95
);
console.log(s1);
/*----------------------------------------------------------------------------------------------------*/
// 6. constructor 축약형
console.log("--------------------------");
console.log("6. constructor 축약형");
console.log("--------------------------");
// TypeScript에서는 이렇게 많이 씁니다.
class Student5 {
    constructor(
        public name: string,
        public age: number,
        public score: number
    ) {
        this.name = name;
        this.age = age;
        this.score = score;
    }
}

// 위 코드와:
// name: string;
// age: number;
// score: number;
// this.name = name;
// 이 자동으로 합쳐집니다.

// 실무에서는 이 방식이 많이 사용됩니다.
const s2 = new Student5 (
    "홍길동",
    20,
    95
);
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
class Student6 {
    private score: number;
    constructor(score: number) {
        this.score = score;
    }
}
// 이건 오류:
// student.score
console.log(Student6.score);
/*----------------------------------------------------------------------------------------------------*/
// 9. readonly
console.log("--------------------------");
console.log("9. readonly");
console.log("--------------------------");
// 생성 후 변경 불가.
class Student {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}
// 오류:
// student.id = 10;
const student7 = new Student(10);
console.log(student7.id);
/*----------------------------------------------------------------------------------------------------*/
// 10. 메서드 여러 개
console.log("--------------------------");
console.log("10. 메서드 여러 개");
console.log("--------------------------");
class Student8 {
    constructor(
        public name: string,
        public age: number
    ) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`이름: ${this.name}`);
    }
    birthday(): void {
        this.age++;
   }
}
// 사용:
const s3 = new Student8("홍길동", 20);
s3.birthday();
console.log(s3.age);
// 결과:
// 21
/*----------------------------------------------------------------------------------------------------*/
// 11. Interface + Class
console.log("--------------------------");
console.log("11. Interface + Class");
console.log("--------------------------");
interface Person {
    name: string;
    age: number;
}
// Class가 구현:
class Student9 implements Person {
    constructor(
        public name: string,
        public age: number
    ) {
        this.name = name;
        this.age = age;
    }
}

const s4 = new Student9("홍길동", 20);
console.log(s4.name);
console.log(s4.age);
/*----------------------------------------------------------------------------------------------------*/
// 12. 상속(Inheritance)
console.log("--------------------------");
console.log("12. 상속(Inheritance)");
console.log("--------------------------");
// 부모 클래스:
class Animal {
    move(): void {
        console.log("움직입니다.");
    }
}
// 상속:
class Dog extends Animal {
    info(info: any) {
        throw new Error("Method not implemented.");
    }
    changeName: string;
    constructor() {
        super();
    }

    Dog(): void {
        this.move();
    }
}
// 사용:
const dog = new Dog();
dog.move();
// 결과:
// 움직입니다.
/*----------------------------------------------------------------------------------------------------*/
// 13. 메서드 오버라이드
console.log("--------------------------");
console.log("13. 메서드 오버라이드");
console.log("--------------------------");
// 부모:
class Animal {
    sound(): void {
        console.log("동물 소리");
    }
}
// 자식:
class Dog extends Animal {
    sound(): void {
        console.log("멍멍");
    }
}
const dog1 = new Dog();
dog1.sound();
// 결과:
// 멍멍
/*----------------------------------------------------------------------------------------------------*/
// 14. super
console.log("--------------------------");
console.log("14. super");
console.log("--------------------------");
// 부모 생성자 호출.
class Animal {
    constructor(public name: string) {}
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}

const dog2 = new Dog("멍멍이");
console.log(dog2.name);
// 결과:
// 멍멍이
/*----------------------------------------------------------------------------------------------------*/
// 15. Getter / Setter
console.log("--------------------------");
console.log("15. Getter / Setter");
console.log("--------------------------");
// 값 읽기:
class Student10 {

    constructor(
        public name: string
    ) {}

    get info(): string {
        return this.name;
    }
    // 값 설정:
    set changeName(name1: string) {
        this.name = name1;
    }
}
const s5 = new Student10("홍길동");
console.log(s5.info);
s5.changeName = "김철수";
console.log(s5.info);
/*----------------------------------------------------------------------------------------------------*/
