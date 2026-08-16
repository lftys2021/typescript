/*----------------------------------------------------------------------------------------------------*/
// 과제 1. Promise
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 1. Promise");
    console.log("--------------------------");
}, 1000);
// 다음 함수를 만드세요.
function getNumber(): Promise<number> {
    return new Promise((resolve) => {
        resolve(100);
    });
}
// 100을 반환하세요.
// 출력:
// 100
setTimeout(() => {
    getNumber().then((number) => {
        console.log(number);
    });
}, 2000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. async 함수
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 2. async 함수");
    console.log("--------------------------");
}, 3000);
// 다음 함수를 만드세요.
async function getMessage(): Promise<string> {
    return "Hello TypeScript";
}
// "Hello TypeScript"를 반환하세요.
setTimeout(() => {
    getMessage().then((message) => {
        console.log(message);
    });
}, 4000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. await
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 3. await");
    console.log("--------------------------");
}, 5000);
// getMessage()를 await를 사용해서 출력하세요.
function printMessage(): void {
    setTimeout(async () => {
        const message = await getMessage();
        console.log(message);
    }, 6000);
}
printMessage();
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. Interface
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 4. Interface");
    console.log("--------------------------");
}, 7000);
// 다음 API 데이터를 표현하는 Interface를 만드세요.
// {
//     "id": 1,
//     "name": "홍길동",
//     "age": 20
// }
// 조건:
// id → number
// name → string
// age → number
interface User {
    id: number;
    name: string;
    age: number;
}
const user: User = {
    id: 1,
    name: "홍길동",
    age: 20,
};
setTimeout(() => {
    console.log(user);
}, 8000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. API 호출
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 5. API 호출");
    console.log("--------------------------");
}, 9000);
// 다음 API를 호출하세요.
// https://jsonplaceholder.typicode.com/posts
// 그리고 게시글 전체를 출력하세요.
async function getPosts(): Promise<Post[]> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const posts: Post[] = await response.json();
    return posts;
}
setTimeout(() => {
    getPosts().then((posts) => {
        console.log(posts);
    });
}, 10000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. 게시글 Interface
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 6. 게시글 Interface");
    console.log("--------------------------");
}, 11000);
// 다음 형태의 Post Interface를 만드세요.
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
// 그리고 API 데이터를:
// Post[]
// 형태로 받으세요.
const post: Post = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};
const posts: Post[] = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 2,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
];
setTimeout(() => {
    console.log(posts);
}, 12000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. 게시글 5개
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 7. 게시글 5개");
    console.log("--------------------------");
}, 13000);
// API에서 가져온 게시글 중 처음 5개만 출력하세요.
// 힌트:
// slice()
async function getPosts2(): Promise<Post[]> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const posts: Post[] = await response.json();
    return posts.slice(0, 5);
}
setTimeout(() => {
    getPosts2().then((posts) => {
        console.log(posts);
    });
}, 14000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. 제목만 출력
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 8. 제목만 출력");
    console.log("--------------------------");
}, 15000);
// 게시글 100개에서:
// title
// 만 출력하세요.
// 힌트:
// map()
async function getPosts3(): Promise<string[]> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const posts: Post[] = await response.json();
    return posts.map((post) => post.title);
}
setTimeout(() => {
    getPosts3().then((titles) => {
        console.log(titles);
    });
}, 16000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 9. 특정 게시글
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 9. 특정 게시글");
    console.log("--------------------------");
}, 17000);
// id가 10인 게시글을 찾아 출력하세요.
// 힌트:
// find()
async function getPostById(id: number): Promise<Post | undefined> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post: Post = await response.json();
    return post;
}
setTimeout(() => {
    getPostById(10).then((post) => {
        console.log(post);
    });
}, 18000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 10. API 오류 처리
setTimeout(() => {
    console.log("--------------------------");
    console.log("과제 10. API 오류 처리");
    console.log("--------------------------");
}, 19000);
// 다음 구조를 완성하세요.
async function getPosts4(): Promise<Post[]> {
    try {
        // fetch
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // response 확인
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // json 변환
        const posts: Post[] = await response.json();

        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}
// 여기서는 **try/catch + response.ok + Promise<Post[]>**를 모두 사용해보세요.
setTimeout(() => {
    getPosts4().then((posts) => {
        console.log(posts);
    });
}, 20000);
/*----------------------------------------------------------------------------------------------------*/