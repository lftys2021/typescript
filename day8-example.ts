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
class Student {
    name: string;
    age: number;   

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const student: Student = new Student("홍길동", 20);
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
class StudentWithMethod {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    introduce(): void {
        console.log(`안녕하세요. ${this.name}입니다.`);
    }
}
const student2: StudentWithMethod = new StudentWithMethod("홍길동", 20);
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
class StudentWithScore {
    name: string;
    age: number;
    score: number;
    constructor(name: string, age: number, score: number) {
        this.name = name;
        this.age = age;
        this.score = score;
    }
    showScore(): void {
        console.log(`점수: ${this.score}`);
    }
}
const studentWithScore: StudentWithScore = new StudentWithScore("홍길동", 20, 95);
studentWithScore.showScore();
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. birthday()
console.log("--------------------------");
console.log("과제 4. birthday()");
console.log("--------------------------");
// 나이를 1 증가시키세요.
// birthday()
class StudentWithBirthday {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    birthday(): void {
        this.age += 1;
    }
}
const studentWithBirthday: StudentWithBirthday = new StudentWithBirthday("홍길동", 20);
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
class Animal {
    move(): void {
        console.log("움직입니다.");
    }
}
class Dog extends Animal {
    changeName: string;
    constructor() {
        super();
    }
}
const dog: Dog = new Dog();
console.log(dog.move());
/*----------------------------------------------------------------------------------------------------*/
// 과제 9. 오버라이드
console.log("--------------------------");
console.log("과제 9. 오버라이드");
console.log("--------------------------");
// sound()
// 를 오버라이드하세요.
class AnimalWithSound {
    sound(): void {
        console.log("소리를 냅니다.");
    }
}
class DogWithSound extends AnimalWithSound {
    sound(): void {
        console.log("멍멍");
    }
}
const dogWithSound: DogWithSound = new DogWithSound();
dogWithSound.sound();
/*----------------------------------------------------------------------------------------------------*/
// 과제 10. Getter / Setter
console.log("--------------------------");
console.log("과제 10. Getter / Setter");
console.log("--------------------------");
// 이름 변경 기능을 만드세요.
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
const dog3: Student10 = new Student10("멍멍이");
console.log(dog3.info);
dog3.changeName = "강아지";
console.log(dog3.info);
/*----------------------------------------------------------------------------------------------------*/