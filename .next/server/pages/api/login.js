"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "next/server":
/*!******************************!*\
  !*** external "next/server" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/server");

/***/ }),

/***/ "jose":
/*!***********************!*\
  !*** external "jose" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ "(api)/./libs/auth/index.js":
/*!****************************!*\
  !*** ./libs/auth/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getJwtSecretKey\": () => (/* binding */ getJwtSecretKey),\n/* harmony export */   \"verifyJwtToken\": () => (/* binding */ verifyJwtToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"jose\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jose__WEBPACK_IMPORTED_MODULE_0__]);\njose__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction getJwtSecretKey() {\n    const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;\n    if (!secret) {\n        throw new Error(\"JWT Secret key is not matched\");\n    }\n    return new TextEncoder().encode(secret);\n}\nasync function verifyJwtToken(token) {\n    try {\n        const { payload  } = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, getJwtSecretKey());\n        return payload;\n    } catch (error) {\n        return null;\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL2F1dGgvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBRTFCLFNBQVNDLGtCQUFrQjtJQUNoQyxNQUFNQyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLDBCQUEwQjtJQUVyRCxJQUFJLENBQUNILFFBQVE7UUFDWCxNQUFNLElBQUlJLE1BQU0saUNBQWlDO0lBQ25ELENBQUM7SUFFRCxPQUFPLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ047QUFDbEMsQ0FBQztBQUVNLGVBQWVPLGVBQWVDLEtBQUssRUFBRTtJQUMxQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBRyxNQUFNWCwrQ0FBU0EsQ0FBQ1UsT0FBT1Q7UUFFM0MsT0FBT1U7SUFDVCxFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPLElBQUk7SUFDYjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVjdXAtZnJvbnRlbmQvLi9saWJzL2F1dGgvaW5kZXguanM/ZGFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqd3RWZXJpZnkgfSBmcm9tIFwiam9zZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Snd0U2VjcmV0S2V5KCkge1xuICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19KV1RfU0VDUkVUX0tFWTtcblxuICBpZiAoIXNlY3JldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkpXVCBTZWNyZXQga2V5IGlzIG5vdCBtYXRjaGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzZWNyZXQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Snd0VG9rZW4odG9rZW4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbiwgZ2V0Snd0U2VjcmV0S2V5KCkpO1xuXG4gICAgcmV0dXJuIHBheWxvYWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0iXSwibmFtZXMiOlsiand0VmVyaWZ5IiwiZ2V0Snd0U2VjcmV0S2V5Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0pXVF9TRUNSRVRfS0VZIiwiRXJyb3IiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInZlcmlmeUp3dFRva2VuIiwidG9rZW4iLCJwYXlsb2FkIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/auth/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/login/index.js":
/*!**********************************!*\
  !*** ./pages/api/login/index.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"POST\": () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"jose\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"next/server\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/auth */ \"(api)/./libs/auth/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jose__WEBPACK_IMPORTED_MODULE_0__, _libs_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([jose__WEBPACK_IMPORTED_MODULE_0__, _libs_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nasync function POST(request) {\n    console.log(\"xxxx\");\n    const body = await request.json();\n    // Make that below if condition as your own backend api call to validate user\n    if (body.username === \"admin\" && body.password === \"admin\") {\n        const token = await new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT({\n            username: body.username,\n            role: \"admin\"\n        }).setProtectedHeader({\n            alg: \"HS256\"\n        }).setIssuedAt().setExpirationTime(\"2h\").sign((0,_libs_auth__WEBPACK_IMPORTED_MODULE_2__.getJwtSecretKey)());\n        const response = next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            success: true\n        }, {\n            status: 200,\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        response.cookies.set({\n            name: \"token\",\n            value: token,\n            path: \"/\"\n        });\n        return response;\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n        success: false\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUNVO0FBRTlDLGVBQWVHLEtBQUtDLE9BQU8sRUFBRTtJQUNsQ0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTUMsT0FBTyxNQUFNSCxRQUFRSSxJQUFJO0lBRS9CLDZFQUE2RTtJQUM3RSxJQUFJRCxLQUFLRSxRQUFRLEtBQUssV0FBV0YsS0FBS0csUUFBUSxLQUFLLFNBQVM7UUFDMUQsTUFBTUMsUUFBUSxNQUFNLElBQUlYLHlDQUFPQSxDQUFDO1lBQzlCUyxVQUFVRixLQUFLRSxRQUFRO1lBQ3ZCRyxNQUFNO1FBQ1IsR0FDR0Msa0JBQWtCLENBQUM7WUFBRUMsS0FBSztRQUFRLEdBQ2xDQyxXQUFXLEdBQ1hDLGlCQUFpQixDQUFDLE1BQ2xCQyxJQUFJLENBQUNmLDJEQUFlQTtRQUV2QixNQUFNZ0IsV0FBV2pCLDBEQUFpQixDQUNoQztZQUFFa0IsU0FBUyxJQUFJO1FBQUMsR0FDaEI7WUFBRUMsUUFBUTtZQUFLQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUFFO1FBR2pFSCxTQUFTSSxPQUFPLENBQUNDLEdBQUcsQ0FBQztZQUNuQkMsTUFBTTtZQUNOQyxPQUFPZDtZQUNQZSxNQUFNO1FBQ1I7UUFFQSxPQUFPUjtJQUNULENBQUM7SUFFRCxPQUFPakIsMERBQWlCLENBQUM7UUFBRWtCLFNBQVMsS0FBSztJQUFDO0FBQzVDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVjdXAtZnJvbnRlbmQvLi9wYWdlcy9hcGkvbG9naW4vaW5kZXguanM/ZTliNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWduSldUIH0gZnJvbSBcImpvc2VcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0Snd0U2VjcmV0S2V5IH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvYXV0aFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIGNvbnNvbGUubG9nKFwieHh4eFwiKVxuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgLy8gTWFrZSB0aGF0IGJlbG93IGlmIGNvbmRpdGlvbiBhcyB5b3VyIG93biBiYWNrZW5kIGFwaSBjYWxsIHRvIHZhbGlkYXRlIHVzZXJcbiAgaWYgKGJvZHkudXNlcm5hbWUgPT09IFwiYWRtaW5cIiAmJiBib2R5LnBhc3N3b3JkID09PSBcImFkbWluXCIpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IG5ldyBTaWduSldUKHtcbiAgICAgIHVzZXJuYW1lOiBib2R5LnVzZXJuYW1lLFxuICAgICAgcm9sZTogXCJhZG1pblwiLCBcbiAgICB9KVxuICAgICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogXCJIUzI1NlwiIH0pXG4gICAgICAuc2V0SXNzdWVkQXQoKVxuICAgICAgLnNldEV4cGlyYXRpb25UaW1lKFwiMmhcIikgXG4gICAgICAuc2lnbihnZXRKd3RTZWNyZXRLZXkoKSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBzdWNjZXNzOiB0cnVlIH0sXG4gICAgICB7IHN0YXR1czogMjAwLCBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0gfVxuICAgICk7XG5cbiAgICByZXNwb25zZS5jb29raWVzLnNldCh7XG4gICAgICBuYW1lOiBcInRva2VuXCIsXG4gICAgICB2YWx1ZTogdG9rZW4sXG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xufSJdLCJuYW1lcyI6WyJTaWduSldUIiwiTmV4dFJlc3BvbnNlIiwiZ2V0Snd0U2VjcmV0S2V5IiwiUE9TVCIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImpzb24iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidG9rZW4iLCJyb2xlIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0SXNzdWVkQXQiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJoZWFkZXJzIiwiY29va2llcyIsInNldCIsIm5hbWUiLCJ2YWx1ZSIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login/index.js"));
module.exports = __webpack_exports__;

})();