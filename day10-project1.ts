// 프로젝트 1. Todo List
// 목표

// 가장 먼저 TypeScript로 데이터를 타입 안전하게 관리하는 방법을 익힙니다.

// 사용할 것:

// string
// number
// boolean
// Interface
// Array
// function
// filter()
// find()
// map()
/*----------------------------------------------------------------------------------------------------*/
// 1단계. Todo Interface
setTimeout(() => {
    console.log("--------------------------");
    console.log("1단계. Todo Interface");
    console.log("--------------------------");
}, 1000);
// 다음 구조를 만드세요.
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
// Todo 하나는:
// id          → number
// title       → string
// completed   → boolean
// 입니다.
const todo: Todo = {
    id: 1,
    title: "JavaScript 복습",
    completed: true
};
setTimeout(() => {
    console.log(todo.id); // 1
    console.log(todo.title); // JavaScript 복습
    console.log(todo.completed); // true
}, 2000);
/*----------------------------------------------------------------------------------------------------*/
// 2단계. Todo 배열
setTimeout(() => {
    console.log("--------------------------");
    console.log("2단계. Todo 배열");
    console.log("--------------------------");
}, 3000);
// 다음 데이터를 만드세요.
const todos: Todo[] = [
    {
        id: 1,
        title: "JavaScript 복습",
        completed: true
    },
    {
        id: 2,
        title: "TypeScript 공부",
        completed: false
    },
    {
        id: 3,
        title: "Vue.js 공부",
        completed: false
    }
];
const todo2: Todo = {
    id: 4,
    title: "React 공부",
    completed: false 
};
setTimeout(() => {
    console.log(todos);
    console.log(todo2);
}, 4000);
/*----------------------------------------------------------------------------------------------------*/
// 3단계. Todo 출력
setTimeout(() => {
    console.log("--------------------------");
    console.log("3단계. Todo 출력");
    console.log("--------------------------");
}, 5000);
// 함수:
function printTodos(todos: Todo[]): void {
    todos.forEach((todo) => {
        const status = todo.completed ? "완료" : "미완료";
        console.log(`${todo.id}. ${todo.title} - ${status}`);
    });
}
// 를 만들고 모든 Todo를 출력하세요.
// 예:
// 1. JavaScript 복습 - 완료
// 2. TypeScript 공부 - 미완료
// 3. Vue.js 공부 - 미완료
setTimeout(() => {
    printTodos(todos);
}, 6000);
/*----------------------------------------------------------------------------------------------------*/
// 4단계. Todo 추가
setTimeout(() => {
    console.log("--------------------------");
    console.log("4단계. Todo 추가");
    console.log("--------------------------");
}, 7000);
// 다음 함수를 만드세요.
function addTodo(
    todos: Todo[],
    title: string
): void {
    const newTodo: Todo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };

    todos.push(newTodo);
}
// 예:
addTodo(todos, "React 공부");
// 실행하면 Todo가 추가되어야 합니다.
setTimeout(() => {    
    console.log("=== 추가 후 ===");
    printTodos(todos);
}, 8000);
/*----------------------------------------------------------------------------------------------------*/
// 5단계. Todo 완료 처리
setTimeout(() => {
    console.log("--------------------------");
    console.log("5단계. Todo 완료 처리");
    console.log("--------------------------");
}, 9000);
// 다음 함수를 만드세요.
function completeTodo(
    todos: Todo[],
    id: number
): void {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = true;
    }
}
// 예:
completeTodo(todos, 2);
// 결과:
// TypeScript 공부 → 완료
setTimeout(() => {    
    console.log("=== TypeScript 공부 → 완료 ===");
    printTodos(todos);
}, 10000);
/*----------------------------------------------------------------------------------------------------*/
// 6단계. 완료된 Todo
setTimeout(() => {
    console.log("--------------------------");
    console.log("6단계. 완료된 Todo");
    console.log("--------------------------");
}, 11000);
// filter()를 사용하세요.
function getCompletedTodos(
    todos: Todo[]
): Todo[] {
    const result = todos.filter(
        todo => todo.completed === true
    );
    return result;
}
// 완료된 Todo만 반환합니다.
setTimeout(() => { 
    console.log(getCompletedTodos(todos));
}, 12000);
/*----------------------------------------------------------------------------------------------------*/
// 7단계. 미완료 Todo
setTimeout(() => {
    console.log("--------------------------");
    console.log("7단계. 미완료 Todo");
    console.log("--------------------------");
}, 13000);
function getIncompleteTodos(
    todos: Todo[]
): Todo[] {
    const result = todos.filter(
        todo => todo.completed === false
    );
    return result;
}
setTimeout(() => { 
    console.log(getIncompleteTodos(todos));
}, 14000);
/*----------------------------------------------------------------------------------------------------*/
// 8단계. Todo 삭제
setTimeout(() => {
    console.log("--------------------------");
    console.log("8단계. Todo 삭제");
    console.log("--------------------------");
}, 15000);
function deleteTodo(
    todos: Todo[],
    id: number
): void {
    return todos.filter(
        todo => todo.id !== id
    );
}
// filter()를 활용해보세요.
setTimeout(() => { 
    console.log("삭제 전");
    console.log(todos);

    todos = deleteTodo(todos, 2);

    console.log("삭제 후");
    console.log(todos);
}, 16000);
/*----------------------------------------------------------------------------------------------------*/
