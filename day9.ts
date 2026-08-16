// Day 9. 비동기 + API
// 오늘의 목표:
// Promise
//   ↓
// async / await
//   ↓
// fetch()
//   ↓
// API 응답
//   ↓
// interface로 데이터 타입 지정
//   ↓
// TypeScript로 API 데이터 다루기
/*----------------------------------------------------------------------------------------------------*/
// 1. Promise 복습
setTimeout(() => {   
    console.log("--------------------------");
    console.log("1. Promise 복습");
    console.log("--------------------------");
}, 1000);
// 비동기 작업의 결과를 나타내는 객체입니다.
const promise: Promise<string> = new Promise((resolve) => {
    resolve("완료");
});
// Promise<string>이라는 부분이 중요합니다.
// 이 Promise가 최종적으로 string을 반환한다.
// 는 뜻입니다.
// 사용:
setTimeout(() => { 
    promise.then((result) => {
        console.log(result);
    });
}, 2000);
// 출력:
// 완료
promise.catch((error) => {
    console.log(error);
});
/*----------------------------------------------------------------------------------------------------*/
// 2. Promise<number>
setTimeout(() => {
    console.log("--------------------------");
    console.log("2. Promise<number>");
    console.log("--------------------------");
}, 3000);
// 숫자를 반환하는 Promise라면:
const promise1: Promise<number> = new Promise((resolve) => {
    resolve(100);
});
setTimeout(() => { 
    promise1.then((result) => {
        console.log(result);
    });
}, 4000);
// 결과:
// 100
/*----------------------------------------------------------------------------------------------------*/
// 3. async 함수
setTimeout(() => {
    console.log("--------------------------");
    console.log("3. async 함수");
    console.log("--------------------------");
}, 5000);
// async가 붙은 함수는 기본적으로 Promise를 반환합니다.
async function getName(): Promise<string> {
    return "홍길동";
}
// 여기서:
// Promise<string>
// 을 반환합니다.
// 사용:
setTimeout(() => { 
    getName().then((name) => {
        console.log(name);
    });
}, 6000);
/*----------------------------------------------------------------------------------------------------*/
// 4. await
setTimeout(() => {
    console.log("--------------------------");
    console.log("4. await");
    console.log("--------------------------");
}, 7000);
// await는 Promise가 완료될 때까지 기다립니다.
async function test(): Promise<void> {
    const name = await getName();
    console.log(name);
}
// 실행:
setTimeout(() => {
    test();
}, 8000);
// 결과:
// 홍길동
/*----------------------------------------------------------------------------------------------------*/
// 5. try / catch
setTimeout(() => {
    console.log("--------------------------");
    console.log("5. try / catch");
    console.log("--------------------------");
}, 9000);
// 비동기 작업에서는 오류 처리가 중요합니다.
async function test1(): Promise<void> {
    try {
        const name = await getName();
        console.log(name);
    } catch (error) {
    console.log("오류 발생");
    }
}
// 구조는:
// try
//  ↓
// 비동기 작업
//  ↓
// 성공
// catch
//  ↓
// 실패
// 입니다.
setTimeout(() => {
    test1();
}, 10000);
/*----------------------------------------------------------------------------------------------------*/
// 6. fetch()
setTimeout(() => {
    console.log("--------------------------");
    console.log("6. fetch()");
    console.log("--------------------------");
}, 11000);
// 이제 API를 호출해봅니다.
// JavaScript에서 배웠던 것과 동일합니다.
async function getPosts(): Promise<void> {
    const response = await fetch(
       "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.status);
}
// 실행:
setTimeout(() => {
    getPosts();
}, 12000);
// 정상이라면:
// 200
// 이 출력됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 7. response.json()
setTimeout(() => {
    console.log("--------------------------");
    console.log("7. response.json()");
    console.log("--------------------------");
}, 13000);
// API에서 데이터를 가져오려면:
// const data = await response.json();
// 합니다.
// 전체:
async function getPosts1(): Promise<void> {
    const response = await fetch(
       "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.json();
    console.log(data);
}
setTimeout(() => {
    getPosts1();
}, 14000);
/*----------------------------------------------------------------------------------------------------*/
// 8. TypeScript에서 중요한 부분
setTimeout(() => {
    console.log("--------------------------");
    console.log("8. TypeScript에서 중요한 부분");
    console.log("--------------------------");
}, 15000);
// 여기까지는 JavaScript와 거의 같습니다.
// 하지만 TypeScript에서는 API에서 어떤 데이터가 오는지 타입을 지정하는 것이 중요합니다.
// JSONPlaceholder의 게시글을 예로 들면:
// {
//     "userId": 1,
//     "id": 1,
//     "title": "제목",
//     "body": "내용"
// }
// 이런 형태입니다.
// Interface를 만들 수 있습니다.
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const post: Post = {
    userId: 1,
    id: 1,
    title: "제목",
    body: "내용"
};
setTimeout(() => {
    console.log(post);
}, 16000);
/*----------------------------------------------------------------------------------------------------*/
// 9. API 데이터에 Interface 적용
setTimeout(() => {
    console.log("--------------------------");
    console.log("9. API 데이터에 Interface 적용");
    console.log("--------------------------");
}, 17000);
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function getPosts2(): Promise<void> {
    const response = await fetch(
       "https://jsonplaceholder.typicode.com/posts"
    );
    const data: Post[] = await response.json();
    console.log(data);
}
// 여기서 핵심은:
// const data: Post[]
// 입니다.
// API에서 가져온 데이터는 Post 객체 여러 개가 들어있는 배열이다.
// 라는 뜻입니다.
setTimeout(() => {
    getPosts2();
}, 18000);
/*----------------------------------------------------------------------------------------------------*/
// 10. 게시글 하나 가져오기
setTimeout(() => {
    console.log("--------------------------");
    console.log("10. 게시글 하나 가져오기");
    console.log("--------------------------");
}, 19000);
// API 주소를:
// /posts/1
// 로 바꾸면 게시글 하나가 옵니다.
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function getPost3(): Promise<void> {
    const response = await fetch(
       "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post: Post = await response.json();
    console.log(post);
    console.log(post.title);
    console.log(post.body);
}
// getPost();
// 이제 TypeScript가:
// post.title
// post.body
// post.id
// 등을 알고 있습니다.
setTimeout(() => {
    getPost3();
}, 20000);
/*----------------------------------------------------------------------------------------------------*/
// 11. 게시글 5개만 출력
setTimeout(() => {
    console.log("--------------------------");
    console.log("11. 게시글 5개만 출력");
    console.log("--------------------------");
}, 21000);
// 이건 이전 JavaScript에서 했던 내용과 연결됩니다.
async function getPosts4(): Promise<void> {
    const response = await fetch(
       "https://jsonplaceholder.typicode.com/posts"
    );
    const posts: Post[] = await response.json();
    posts.slice(0, 5).forEach((post) => {
        console.log(post.title);
    });
}
setTimeout(() => {
    getPosts4();
}, 22000);
/*----------------------------------------------------------------------------------------------------*/
// 12. 게시글 제목만 배열로 만들기
setTimeout(() => {
    console.log("--------------------------");
    console.log("12. 게시글 제목만 배열로 만들기");
    console.log("--------------------------");
}, 23000);
// map()도 사용할 수 있습니다.
async function getPosts3(): Promise<void> {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    const posts: Post[] = await response.json();

    const titles: string[] = posts.map((post) => {
        return post.title;
    });

    titles.forEach((title) => {
        console.log(title);
    });
}
setTimeout(() => {
    getPosts3();
}, 24000);
/*----------------------------------------------------------------------------------------------------*/
// 13. 특정 게시글 찾기
setTimeout(() => {
    console.log("--------------------------");
    console.log("13. 특정 게시글 찾기");
    console.log("--------------------------");
}, 25000);
// find():
async function getPosts5(): Promise<void> {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const posts: Post[] = await response.json();

    const post: Post | undefined = posts.find(
        post => post.id === 5
    );
    let titles = post ? [post.title] : [];
    titles.forEach((title) => {
        console.log(title);
    });
}
// 왜:
// Post | undefined
// 인가요?
// id === 5인 게시글이 없을 수도 있기 때문입니다.
setTimeout(() => {
    getPosts5();
}, 26000);
/*----------------------------------------------------------------------------------------------------*/
// 14. 상태 코드 확인
setTimeout(() => {
    console.log("--------------------------");
    console.log("14. 상태 코드 확인");
    console.log("--------------------------");
}, 27000);
// API를 사용할 때는 이것도 중요합니다.
// if (!response.ok) {
//     throw new Error("API 요청 실패");
// }
// 전체:
async function getPosts6(): Promise<void> {
    try {
        const response = await fetch(
           "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
            throw new Error("API 요청 실패");
        }
        const posts: Post[] = await response.json();
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
}
// getPosts();
// 이 구조는 실제 API 통신에서도 자주 사용하는 기본 형태입니다.
setTimeout(() => {
    getPosts6();
}, 28000);
/*----------------------------------------------------------------------------------------------------*/
// 15. API 데이터를 함수의 반환값으로 만들기
setTimeout(() => {
    console.log("--------------------------");
    console.log("15. API 데이터를 함수의 반환값으로 만들기");
    console.log("--------------------------");
}, 29000);
// 조금 더 실무적인 형태입니다.
async function getPosts7(): Promise<Post[]> {
    const response = await fetch(
       "https://jsonplaceholder.typicode.com/posts"
    );
    if (!response.ok) {
        throw new Error("API 요청 실패");
    }
    const posts: Post[] = await response.json();
    return posts;
}
// 사용:
setTimeout(() => {
    getPosts7().then((posts) => {
        console.log(posts);
    });
}, 30000);
// 또는:
async function main(): Promise<void> {
    const posts = await getPosts();
    console.log(posts);
}
setTimeout(() => {
    main();
}, 31000);
// 이 구조를 기억해두세요.
// API 함수
// ↓
// Promise<Post[]>
// ↓
// await
// ↓
// Post[]
/*----------------------------------------------------------------------------------------------------*/