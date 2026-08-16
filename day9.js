var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
setTimeout(function () {
    console.log("--------------------------");
    console.log("1. Promise 복습");
    console.log("--------------------------");
}, 1000);
// 비동기 작업의 결과를 나타내는 객체입니다.
var promise = new Promise(function (resolve) {
    resolve("완료");
});
// Promise<string>이라는 부분이 중요합니다.
// 이 Promise가 최종적으로 string을 반환한다.
// 는 뜻입니다.
// 사용:
setTimeout(function () {
    promise.then(function (result) {
        console.log(result);
    });
}, 2000);
// 출력:
// 완료
promise.catch(function (error) {
    console.log(error);
});
/*----------------------------------------------------------------------------------------------------*/
// 2. Promise<number>
setTimeout(function () {
    console.log("--------------------------");
    console.log("2. Promise<number>");
    console.log("--------------------------");
}, 3000);
// 숫자를 반환하는 Promise라면:
var promise1 = new Promise(function (resolve) {
    resolve(100);
});
setTimeout(function () {
    promise1.then(function (result) {
        console.log(result);
    });
}, 4000);
// 결과:
// 100
/*----------------------------------------------------------------------------------------------------*/
// 3. async 함수
setTimeout(function () {
    console.log("--------------------------");
    console.log("3. async 함수");
    console.log("--------------------------");
}, 5000);
// async가 붙은 함수는 기본적으로 Promise를 반환합니다.
function getName() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, "홍길동"];
        });
    });
}
// 여기서:
// Promise<string>
// 을 반환합니다.
// 사용:
setTimeout(function () {
    getName().then(function (name) {
        console.log(name);
    });
}, 6000);
/*----------------------------------------------------------------------------------------------------*/
// 4. await
setTimeout(function () {
    console.log("--------------------------");
    console.log("4. await");
    console.log("--------------------------");
}, 7000);
// await는 Promise가 완료될 때까지 기다립니다.
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var name;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getName()];
                case 1:
                    name = _a.sent();
                    console.log(name);
                    return [2 /*return*/];
            }
        });
    });
}
// 실행:
setTimeout(function () {
    test();
}, 8000);
// 결과:
// 홍길동
/*----------------------------------------------------------------------------------------------------*/
// 5. try / catch
setTimeout(function () {
    console.log("--------------------------");
    console.log("5. try / catch");
    console.log("--------------------------");
}, 9000);
// 비동기 작업에서는 오류 처리가 중요합니다.
function test1() {
    return __awaiter(this, void 0, void 0, function () {
        var name_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getName()];
                case 1:
                    name_1 = _a.sent();
                    console.log(name_1);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log("오류 발생");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
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
setTimeout(function () {
    test1();
}, 10000);
/*----------------------------------------------------------------------------------------------------*/
// 6. fetch()
setTimeout(function () {
    console.log("--------------------------");
    console.log("6. fetch()");
    console.log("--------------------------");
}, 11000);
// 이제 API를 호출해봅니다.
// JavaScript에서 배웠던 것과 동일합니다.
function getPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    console.log(response.status);
                    return [2 /*return*/];
            }
        });
    });
}
// 실행:
setTimeout(function () {
    getPosts();
}, 12000);
// 정상이라면:
// 200
// 이 출력됩니다.
/*----------------------------------------------------------------------------------------------------*/
// 7. response.json()
setTimeout(function () {
    console.log("--------------------------");
    console.log("7. response.json()");
    console.log("--------------------------");
}, 13000);
// API에서 데이터를 가져오려면:
// const data = await response.json();
// 합니다.
// 전체:
function getPosts1() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
setTimeout(function () {
    getPosts1();
}, 14000);
/*----------------------------------------------------------------------------------------------------*/
// 8. TypeScript에서 중요한 부분
setTimeout(function () {
    console.log("--------------------------");
    console.log("8. TypeScript에서 중요한 부분");
    console.log("--------------------------");
}, 15000);
var post = {
    userId: 1,
    id: 1,
    title: "제목",
    body: "내용"
};
setTimeout(function () {
    console.log(post);
}, 16000);
/*----------------------------------------------------------------------------------------------------*/
// 9. API 데이터에 Interface 적용
setTimeout(function () {
    console.log("--------------------------");
    console.log("9. API 데이터에 Interface 적용");
    console.log("--------------------------");
}, 17000);
function getPosts2() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
// 여기서 핵심은:
// const data: Post[]
// 입니다.
// API에서 가져온 데이터는 Post 객체 여러 개가 들어있는 배열이다.
// 라는 뜻입니다.
setTimeout(function () {
    getPosts2();
}, 18000);
/*----------------------------------------------------------------------------------------------------*/
// 10. 게시글 하나 가져오기
setTimeout(function () {
    console.log("--------------------------");
    console.log("10. 게시글 하나 가져오기");
    console.log("--------------------------");
}, 19000);
function getPost3() {
    return __awaiter(this, void 0, void 0, function () {
        var response, post;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts/1")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    post = _a.sent();
                    console.log(post);
                    console.log(post.title);
                    console.log(post.body);
                    return [2 /*return*/];
            }
        });
    });
}
// getPost();
// 이제 TypeScript가:
// post.title
// post.body
// post.id
// 등을 알고 있습니다.
setTimeout(function () {
    getPost3();
}, 20000);
/*----------------------------------------------------------------------------------------------------*/
// 11. 게시글 5개만 출력
setTimeout(function () {
    console.log("--------------------------");
    console.log("11. 게시글 5개만 출력");
    console.log("--------------------------");
}, 21000);
// 이건 이전 JavaScript에서 했던 내용과 연결됩니다.
function getPosts4() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = _a.sent();
                    posts.slice(0, 5).forEach(function (post) {
                        console.log(post.title);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
setTimeout(function () {
    getPosts4();
}, 22000);
/*----------------------------------------------------------------------------------------------------*/
// 12. 게시글 제목만 배열로 만들기
setTimeout(function () {
    console.log("--------------------------");
    console.log("12. 게시글 제목만 배열로 만들기");
    console.log("--------------------------");
}, 23000);
// map()도 사용할 수 있습니다.
function getPosts3() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts, titles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = _a.sent();
                    titles = posts.map(function (post) {
                        return post.title;
                    });
                    titles.forEach(function (title) {
                        console.log(title);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
setTimeout(function () {
    getPosts3();
}, 24000);
/*----------------------------------------------------------------------------------------------------*/
// 13. 특정 게시글 찾기
setTimeout(function () {
    console.log("--------------------------");
    console.log("13. 특정 게시글 찾기");
    console.log("--------------------------");
}, 25000);
// find():
function getPosts5() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts, post, titles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = _a.sent();
                    post = posts.find(function (post) { return post.id === 5; });
                    titles = post ? [post.title] : [];
                    titles.forEach(function (title) {
                        console.log(title);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
// 왜:
// Post | undefined
// 인가요?
// id === 5인 게시글이 없을 수도 있기 때문입니다.
setTimeout(function () {
    getPosts5();
}, 26000);
/*----------------------------------------------------------------------------------------------------*/
// 14. 상태 코드 확인
setTimeout(function () {
    console.log("--------------------------");
    console.log("14. 상태 코드 확인");
    console.log("--------------------------");
}, 27000);
// API를 사용할 때는 이것도 중요합니다.
// if (!response.ok) {
//     throw new Error("API 요청 실패");
// }
// 전체:
function getPosts6() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API 요청 실패");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = _a.sent();
                    console.log(posts);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// getPosts();
// 이 구조는 실제 API 통신에서도 자주 사용하는 기본 형태입니다.
setTimeout(function () {
    getPosts6();
}, 28000);
/*----------------------------------------------------------------------------------------------------*/
// 15. API 데이터를 함수의 반환값으로 만들기
setTimeout(function () {
    console.log("--------------------------");
    console.log("15. API 데이터를 함수의 반환값으로 만들기");
    console.log("--------------------------");
}, 29000);
// 조금 더 실무적인 형태입니다.
function getPosts7() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API 요청 실패");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = _a.sent();
                    return [2 /*return*/, posts];
            }
        });
    });
}
// 사용:
setTimeout(function () {
    getPosts7().then(function (posts) {
        console.log(posts);
    });
}, 30000);
// 또는:
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var posts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getPosts()];
                case 1:
                    posts = _a.sent();
                    console.log(posts);
                    return [2 /*return*/];
            }
        });
    });
}
setTimeout(function () {
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
