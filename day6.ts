// Day 6. Generic
// 학습 목표
// 오늘은 다음 내용을 배웁니다.

// Generic이 왜 필요한가?
// <T>의 의미
// Generic 함수
// Generic 배열
// Generic 객체
// 여러 개의 Generic
// Generic Interface
// Generic Type Alias
// extends를 이용한 Generic 제한
// Vue에서 Generic이 왜 필요한가?
/*----------------------------------------------------------------------------------------------------*/
// 1. Generic이 왜 필요한가?
console.log(print("--------------------------"));
console.log(print("1. Generic이 왜 필요한가?"));
console.log(print("--------------------------"));
// 먼저 일반적인 함수를 생각해봅시다.
function print(value: string): string {
    return value;
}
// 문자열은 정상입니다.
console.log(print("홍길동"));
console.log(print("문자열은 정상"));
// 그런데 숫자를 넣으면?
// console.log(print(100));
console.log(print("숫자는 오류"));
// 오류가 발생합니다.
// print()가 string만 받도록 만들어졌기 때문입니다.
// 그렇다고 숫자용 함수를 또 만들까요?
function printNumber(value: number): number {
    return value;
}
// 그리고 Boolean도 필요하다면:
function printBoolean(value: boolean): boolean {
    return value;
}
// 이렇게 계속 만들어야 합니다.
// Generic을 사용하면 이 문제를 해결할 수 있습니다.
console.log("함수를 타입에 맞게 계속 만들어야 하는 불편을 Generic이 해결");
/*----------------------------------------------------------------------------------------------------*/
// 2. Generic의 기본 형태
console.log(print("--------------------------"));
console.log(print("2. Generic의 기본 형태"));
console.log(print("--------------------------"));
function print1<T>(value: T): T {
    return value;
}
// 여기서:
// <T>
console.log(print("<T>"));
// 가 Generic입니다.
// T는 일종의 타입을 담아두는 변수라고 생각하면 됩니다.
// 즉:
//function print<T>(value: T): T
console.log(print1(100));
// 는
// "어떤 타입이 들어오든 그 타입을 그대로 반환하겠다."
// 라는 의미입니다.
/*----------------------------------------------------------------------------------------------------*/
// 3. 문자열을 넣어보자
console.log(print("--------------------------"));
console.log(print("3. 문자열을 넣어보자"));
console.log(print("--------------------------"));
function print2<T>(value: T): T {
    return value;
}
const result = print2("홍길동");
console.log(result);
// TypeScript가 자동으로:
// T = string
// 이라고 판단합니다.
// 결과적으로:
// const result: string
// 이 됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 4. 숫자를 넣어보자
console.log(print("--------------------------"));
console.log(print("4. 숫자를 넣어보자"));
console.log(print("--------------------------"));
const result2 = print2(100);
// 이번에는 TypeScript가:
// T = number
// 라고 판단합니다.
// 따라서:
// result
// 는 number가 됩니다.
console.log(result2);
/*----------------------------------------------------------------------------------------------------*/
// 5. Boolean도 가능
console.log(print("--------------------------"));
console.log(print("5. Boolean도 가능"));
console.log(print("--------------------------"));
const result3 = print2(true);
// 이번에는:
// T = boolean
// 입니다.
// 따라서 Generic 함수 하나로:
// print("홍길동");
// print(100);
// print(true);
// 모두 사용할 수 있습니다.
console.log(result3);
/*----------------------------------------------------------------------------------------------------*/
// 6. 직접 타입 지정하기
console.log(print("--------------------------"));
console.log(print("6. 직접 타입 지정하기"));
console.log(print("--------------------------"));
// TypeScript가 대부분 자동으로 알아내지만 직접 지정할 수도 있습니다.
const result4 = print2<string>("홍길동");
// 여기서:
// <string>
// 이라고 지정했기 때문에 T는 string이 됩니다.
// 숫자는:
const result5 = print2<number>(100);
// 입니다.
console.log(result4);
console.log(result5);
/*----------------------------------------------------------------------------------------------------*/
// 7. Generic의 핵심
console.log(print("--------------------------"));
console.log(print("7. Generic의 핵심"));
console.log(print("--------------------------"));
// 다음 코드를 비교해보세요.
// 일반 함수
function print3(value: any): any {
    return value;
}
// any를 사용하면 뭐든 넣을 수 있습니다.
// 하지만 TypeScript가 타입 정보를 제대로 보호해주지 못합니다.
// Generic
function print4<T>(value: T): T {
    return value;
}
// Generic은 들어온 타입을 기억합니다.
// 예를 들어:
const result6 = print3("홍길동");
const result7 = print4("홍길동");
// 이면 result가 string이라는 사실을 유지합니다.
// 이것이 Generic의 중요한 장점입니다.
console.log(result6);
console.log(result7);
/*----------------------------------------------------------------------------------------------------*/
// 8. Generic 배열
console.log(print("--------------------------"));
console.log(print("8. Generic 배열"));
console.log(print("--------------------------"));
// 이번에는 배열을 만들어봅시다.
function getFirst<T>(items: T[]): T {
    return items[0];
}
// 뜻은:
// T 타입의 배열을 받아서
// T 타입의 첫 번째 값을 반환한다.
// 숫자 배열
const numbers = [10, 20, 30];
const result8 = getFirst(numbers);
console.log(result8);
// 결과:
// 10
// TypeScript는:
// T = number
// 라고 판단합니다.
// 따라서 result는 number입니다.
// 문자열 배열
const fruits = ["사과", "배", "포도"];
const result9 = getFirst(fruits);
console.log(result9);
// 이번에는:
// T = string
// 입니다.
// 따라서 result는 string입니다.
/*----------------------------------------------------------------------------------------------------*/
// 9. Generic과 객체
console.log(print("--------------------------"));
console.log(print("9. Generic과 객체"));
console.log(print("--------------------------"));
// 객체에서도 사용할 수 있습니다.
function getValue<T>(obj: T): T {
    return obj;
}
// 사용:
const user = {
    name: "홍길동",
    age: 20
};
const result10 = getValue(user);
console.log(result10);
// T는 객체 타입이 됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 10. Generic Interface
console.log(print("--------------------------"));
console.log(print("10. Generic Interface"));
console.log(print("--------------------------"));
// Day 4에서 Interface를 배웠습니다.
interface User {
    name: string;
    age: number;
}
// Interface에도 Generic을 사용할 수 있습니다.
// 예를 들어:
interface Box<T> {
    value: T;
}
// 이제 Box의 타입을 사용할 때 T를 결정합니다.
// 문자열 Box
const stringBox: Box<string> = {
    value: "홍길동"
};
// 숫자 Box
const numberBox: Box<number> = {
    value: 100
};
// 하나의 Box Interface를 만들었지만
// Box<string>
// Box<number>
// 처럼 다양한 타입으로 사용할 수 있습니다.
console.log(stringBox);
console.log(numberBox);
/*----------------------------------------------------------------------------------------------------*/
// 11. Generic Type Alias
console.log(print("--------------------------"));
console.log(print("11. Generic Type Alias"));
console.log(print("--------------------------"));
// Type Alias에서도 사용할 수 있습니다.
type Box<T> = {
    value: T;
};
// 사용법은 똑같습니다.
const box1: Box<string> = {
    value: "Hello"
};
const box2: Box<number> = {
    value: 100
};
console.log(box1);
console.log(box2);
/*----------------------------------------------------------------------------------------------------*/
// 12. Generic 여러 개 사용하기
console.log(print("--------------------------"));
console.log(print("12. Generic 여러 개 사용하기"));
console.log(print("--------------------------"));
// Generic은 하나만 사용할 필요가 없습니다.
function pair<T, U>(first: T, second: U) {
    return {
        first,
        second
    };
}
// 사용:
const result11 = pair("홍길동", 20);
// TypeScript가:
// T = string
// U = number
// 라고 판단합니다.
// 결과:
// {
//     first: string;
//     second: number;
// }
console.log(result11);
/*----------------------------------------------------------------------------------------------------*/
// 13. 다른 타입 조합
console.log(print("--------------------------"));
console.log(print("13. 다른 타입 조합"));
console.log(print("--------------------------"));
const result12 = pair(100, true);
// 이번에는:
// T = number
// U = boolean
// 입니다.
// 결과:
// {
//     first: number;
//     second: boolean;
// }
console.log(result12);
/*----------------------------------------------------------------------------------------------------*/
// 14. Generic을 사용한 학생 함수
console.log(print("--------------------------"));
console.log(print("14. Generic을 사용한 학생 함수"));
console.log(print("--------------------------"));
// 이제 지금까지 배운 학생과 연결해봅시다.
type Student = {
    name: string;
    age: number;
    score: number;
};
// 학생 배열:
const students: Student[] = [
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
// 첫 번째 학생을 가져오는 함수를 만들어보겠습니다.
function getFirst1<T>(items: T[]): T {
    return items[0];
}
// 사용:
const student1 = getFirst1(students);
console.log(student1);
// 여기서 TypeScript는 자동으로:
// T = Student
// 라고 판단합니다.
// 따라서 student는 Student 타입이 됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 15. Generic + find()
console.log(print("--------------------------"));
console.log(print("15. Generic + find()"));
console.log(print("--------------------------"));
// 이것도 굉장히 중요한 형태입니다.
function findItem<T>(
    items: T[],
    index: number
): T | undefined {
    return items[index];
}
// 학생 배열을 넣으면:
const student2 = findItem(students, 0);
// T는 Student가 됩니다.
// 따라서:
// student
// 는:
// Student | undefined
// 가 됩니다.
// Day 4의:
// Student | undefined
// 가 여기서 다시 등장합니다.
console.log(student2);
/*----------------------------------------------------------------------------------------------------*/
// 16. Generic에 조건을 걸기
console.log(print("--------------------------"));
console.log(print("16. Generic에 조건을 걸기"));
console.log(print("--------------------------"));
// Generic은 아무 타입이나 허용할 수도 있지만 제한할 수도 있습니다.
// 예를 들어 length가 있는 값만 받고 싶다고 해봅시다.
function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}
// 여기서:
// T extends { length: number }
// 은
// T는 반드시 length: number를 가지고 있어야 한다.
// 라는 뜻입니다.
// 문자열
console.log(getLength("Hello"));
// 문자열에는 length가 있으므로 정상입니다.
// 배열
console.log(getLength([1, 2, 3]));
// 배열에도 length가 있으므로 정상입니다.
// 객체
// console.log(
//     getLength({
//         name: '홍길동'
//     })
// );
console.log("오류");
// 이건 오류입니다.
// 객체에 length가 없기 때문입니다.
/*----------------------------------------------------------------------------------------------------*/
// 17. 오늘은 여기까지만 이해해도 충분합니다
// extends를 사용한 Generic 제한은 조금 어려운 내용입니다.
// 따라서 Day 6에서는 우선:
// <T>
// 를 제대로 이해하는 것이 가장 중요합니다.
/*----------------------------------------------------------------------------------------------------*/