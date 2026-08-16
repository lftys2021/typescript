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
/*----------------------------------------------------------------------------------------------------*/
// 과제 1. Promise
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 1. Promise");
    console.log("--------------------------");
}, 1000);
// 다음 함수를 만드세요.
function getNumber() {
    return new Promise(function (resolve) {
        resolve(100);
    });
}
// 100을 반환하세요.
// 출력:
// 100
setTimeout(function () {
    getNumber().then(function (number) {
        console.log(number);
    });
}, 2000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 2. async 함수
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 2. async 함수");
    console.log("--------------------------");
}, 3000);
// 다음 함수를 만드세요.
function getMessage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, "Hello TypeScript"];
        });
    });
}
// "Hello TypeScript"를 반환하세요.
setTimeout(function () {
    getMessage().then(function (message) {
        console.log(message);
    });
}, 4000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 3. await
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 3. await");
    console.log("--------------------------");
}, 5000);
// getMessage()를 await를 사용해서 출력하세요.
function printMessage() {
    var _this = this;
    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMessage()];
                case 1:
                    message = _a.sent();
                    console.log(message);
                    return [2 /*return*/];
            }
        });
    }); }, 6000);
}
printMessage();
/*----------------------------------------------------------------------------------------------------*/
// 과제 4. Interface
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 4. Interface");
    console.log("--------------------------");
}, 7000);
var user = {
    id: 1,
    name: "홍길동",
    age: 20,
};
setTimeout(function () {
    console.log(user);
}, 8000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 5. API 호출
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 5. API 호출");
    console.log("--------------------------");
}, 9000);
// 다음 API를 호출하세요.
// https://jsonplaceholder.typicode.com/posts
// 그리고 게시글 전체를 출력하세요.
function getPosts() {
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
                    return [2 /*return*/, posts];
            }
        });
    });
}
setTimeout(function () {
    getPosts().then(function (posts) {
        console.log(posts);
    });
}, 10000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 6. 게시글 Interface
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 6. 게시글 Interface");
    console.log("--------------------------");
}, 11000);
// 그리고 API 데이터를:
// Post[]
// 형태로 받으세요.
var post = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};
var posts = [
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
setTimeout(function () {
    console.log(posts);
}, 12000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 7. 게시글 5개
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 7. 게시글 5개");
    console.log("--------------------------");
}, 13000);
// API에서 가져온 게시글 중 처음 5개만 출력하세요.
// 힌트:
// slice()
function getPosts2() {
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
                    return [2 /*return*/, posts.slice(0, 5)];
            }
        });
    });
}
setTimeout(function () {
    getPosts2().then(function (posts) {
        console.log(posts);
    });
}, 14000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 8. 제목만 출력
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 8. 제목만 출력");
    console.log("--------------------------");
}, 15000);
// 게시글 100개에서:
// title
// 만 출력하세요.
// 힌트:
// map()
function getPosts3() {
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
                    return [2 /*return*/, posts.map(function (post) { return post.title; })];
            }
        });
    });
}
setTimeout(function () {
    getPosts3().then(function (titles) {
        console.log(titles);
    });
}, 16000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 9. 특정 게시글
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 9. 특정 게시글");
    console.log("--------------------------");
}, 17000);
// id가 10인 게시글을 찾아 출력하세요.
// 힌트:
// find()
function getPostById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, post;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts/".concat(id))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    post = _a.sent();
                    return [2 /*return*/, post];
            }
        });
    });
}
setTimeout(function () {
    getPostById(10).then(function (post) {
        console.log(post);
    });
}, 18000);
/*----------------------------------------------------------------------------------------------------*/
// 과제 10. API 오류 처리
setTimeout(function () {
    console.log("--------------------------");
    console.log("과제 10. API 오류 처리");
    console.log("--------------------------");
}, 19000);
// 다음 구조를 완성하세요.
function getPosts4() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/posts")];
                case 1:
                    response = _a.sent();
                    // response 확인
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts_1 = _a.sent();
                    return [2 /*return*/, posts_1];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching posts:", error_1);
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
// 여기서는 **try/catch + response.ok + Promise<Post[]>**를 모두 사용해보세요.
setTimeout(function () {
    getPosts4().then(function (posts) {
        console.log(posts);
    });
}, 20000);
/*----------------------------------------------------------------------------------------------------*/ 
