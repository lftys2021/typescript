/*----------------------------------------------------------------------------------------------------*/
// 과제 1. Generic 함수
console.log(getValue("--------------------------"));
console.log(getValue("과제 1. Generic 함수"));
console.log(getValue("--------------------------"));
// 다음 함수를 완성하세요.
function getValue<T>(value: T): T {
    // 작성
    return value;
}

// 다음 세 코드가 모두 작동하도록 하세요.
console.log(getValue("Hello"));
console.log(getValue(123));
console.log(getValue(true));
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. 배열의 첫 번째 값
console.log(getValue("--------------------------"));
console.log(getValue("과제 2. 배열의 첫 번째 값"));
console.log(getValue("--------------------------"));
// 다음 함수를 작성하세요.
function first<T>(items: T[]): T {
    // 작성
    return items[0];
}
// 예:
console.log(first([1, 2, 3]));
// 출력:
// 1
// 그리고:
console.log(first(["A", "B", "C"]));
// 출력:
// A
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. 배열의 마지막 값
console.log(getValue("--------------------------"));
console.log(getValue("과제 3. 배열의 마지막 값"));
console.log(getValue("--------------------------"));
// 이번에는 마지막 값을 반환하는 Generic 함수를 작성하세요.
function last<T>(items: T[]): T {
    // 작성
    return items[items.length - 1];
}
// 예:
console.log(last([10, 20, 30]));
// 출력:
// 30
// 힌트:
// items.length
console.log(last(["A", "B", "C"]));
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. Pair
console.log(getValue("--------------------------"));
console.log(getValue("과제 4. Pair"));
console.log(getValue("--------------------------"));
// 두 개의 서로 다른 타입을 받을 수 있는 함수를 만드세요.
function makePair<T, U>(first: T, second: U): {
    first: T;
    second: U;
} {
    return {
        first,
        second
    };
}
// 예:
console.log(
    makePair("홍길동", 20)
);
// 결과:
// {
//     first: "홍길동",
//     second: 20
// }
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. 학생 Generic
console.log(getValue("--------------------------"));
console.log(getValue("과제 5. 학생 Generic"));
console.log(getValue("--------------------------"));
// 다음 Type Alias를 사용하세요.
type Student = {
    name: string;
    age: number;
    score: number;
};
// 그리고 Generic 함수를 이용해 배열의 첫 번째 학생을 가져오세요.
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
function first1<T>(items: T[]): T {
    return items[0];
}
// getFirst() 또는 직접 만든 Generic 함수를 이용해서 첫 번째 학생을 출력하세요.
console.log(first1(students));
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. Generic Box
console.log(getValue("--------------------------"));
console.log(getValue("과제 6. Generic Box"));
console.log(getValue("--------------------------"));
// 다음 Interface를 완성하세요.
interface Box<T> {
    value: T;
}
// 그리고 다음 세 개를 만드세요.
// 문자열 Box
// 숫자 Box
// 학생 Box
// 학생은:
type Student1 = {
    name: string;
    age: number;
    score: number;
};

const stringBox: Box<string> = {
    value: "홍길동"
};

const numberBox: Box<number> = {
    value: 22
};

const studentBox: Box<Student1> = {
    value: {
        name: "이영희",
        age: 21,
        score: 90
    }
};
// 를 사용하세요.
console.log(stringBox);
console.log(numberBox);
console.log(studentBox);
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. Generic Result
console.log(getValue("--------------------------"));
console.log(getValue("과제 7. Generic Result"));
console.log(getValue("--------------------------"));
// 다음 Type Alias를 만드세요.
type Result<T> = {
    success: boolean;
    data: T;
};
// 그리고 다음을 만드세요.
// 문자열 결과
const result1: Result<string> = {
    success: true,
    data: "로그인 성공"
};
// 숫자 결과
const result2: Result<number> = {
    success: true,
    data: 100
};
// 학생 결과
const result3: Result<Student> = {
    success: true,
    data: {
        name: "홍길동",
        age: 20,
        score: 95
    }
};
console.log(result1);
console.log(result2);
console.log(result3);
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. Generic + length
console.log(getValue("--------------------------"));
console.log(getValue("과제 8. Generic + length"));
console.log(getValue("--------------------------"));
// 다음 함수를 완성해보세요.
function getLength<T extends { length: number }>(
    value: T
): number {
    // 작성
    return value.length;
}
// 다음 코드가 정상적으로 작동해야 합니다.
console.log(getLength("Hello"));
console.log(getLength([1, 2, 3, 4, 5]));
// 각각:
// 5
// 5
// 가 출력되어야 합니다.
/*----------------------------------------------------------------------------------------------------*/