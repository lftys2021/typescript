// 프로젝트 3. 게시판

// 여기가 Day 10의 최종 보스입니다.

// 이 프로젝트에서는 Day 9에서 배운:

// async
// await
// fetch
// Promise
// Interface
// API

// 를 전부 사용합니다.

// API는 학습용으로:

// https://jsonplaceholder.typicode.com/posts

// 를 사용하면 됩니다.

// 1단계. Post Interface
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }
// 2단계. 게시글 가져오기

// 다음 함수를 만드세요.

// async function getPosts(): Promise<Post[]>

// 내부에서:

// const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
// );

// 를 사용합니다.

// 그리고:

// if (!response.ok) {
//     throw new Error("게시글을 가져오지 못했습니다.");
// }

// 를 추가하세요.

// 마지막으로:

// const posts: Post[] = await response.json();


// return posts;
// 3단계. 게시글 목록 출력
// function printPosts(
//     posts: Post[]
// ): void

// 예:

// 1. sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// 2. qui est esse
// 3. ea molestias quasi exercitationem repellat qui ipsa sit aut
// ...
// 4단계. 게시글 5개
// function getFirstFivePosts(
//     posts: Post[]
// ): Post[]

// slice() 사용.

// return posts.slice(0, 5);
// 5단계. 게시글 검색

// 제목으로 검색:

// function searchPosts(
//     posts: Post[],
//     keyword: string
// ): Post[]

// filter()와 includes()를 사용하세요.

// 힌트:

// post.title.includes(keyword)
// 6단계. 게시글 하나 조회
// async function getPost(
//     id: number
// ): Promise<Post>

// 예:

// const post = await getPost(10);


// console.log(post);

// API:

// /posts/10

// 을 사용합니다.

// 7단계. 게시글 제목만 가져오기

// map() 사용.

// function getTitles(
//     posts: Post[]
// ): string[]

// 결과:

// [
//     "sunt aut facere...",
//     "qui est esse",
//     ...
// ]
// 8단계. 특정 사용자의 게시글

// userId를 이용합니다.

// function getPostsByUser(
//     posts: Post[],
//     userId: number
// ): Post[]

// 예:

// getPostsByUser(posts, 1);
// 9단계. Generic 적용

// 여기서 Day 6의 Generic을 다시 사용합니다.

// 다음 타입을 만드세요.

// interface ApiResponse<T> {
//     data: T;
//     success: boolean;
// }

// 그리고:

// const result: ApiResponse<Post[]> = {
//     data: posts,
//     success: true
// };

// 를 만들어보세요.

// 이 과제는 Generic이 왜 필요한지 다시 확인하는 단계입니다.

// 10단계. 메인 프로그램

// 마지막에는 지금까지 만든 기능을 연결합니다.

// async function main(): Promise<void> {


//     try {


//         const posts = await getPosts();


//         console.log("=== 전체 게시글 ===");


//         printPosts(posts);


//         console.log("=== 첫 5개 ===");


//         const firstFive = getFirstFivePosts(posts);


//         printPosts(firstFive);


//         console.log("=== 검색 결과 ===");


//         const result = searchPosts(
//             posts,
//             "qui"
//         );


//         printPosts(result);


//     } catch (error) {


//         console.error(error);
//     }
// }


// main();