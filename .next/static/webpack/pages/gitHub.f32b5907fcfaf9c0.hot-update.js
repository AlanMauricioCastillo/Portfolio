"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gitHub",{

/***/ "./pages/gitHub.js":
/*!*************************!*\
  !*** ./pages/gitHub.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _fetchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_fetchError */ \"./pages/_fetchError.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar GitHub = function(param) {\n    var user = param.user, statusCode = param.statusCode;\n    if (user.message === \"Not Found\" || statusCode) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fetchError__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        statusCode: statusCode,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n            lineNumber: 5,\n            columnNumber: 58\n        },\n        __self: _this\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"My GitHub\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n            lineNumber: 7,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"col-md-4 offset-md-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"card card-body border-light text-center\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 11,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: user.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            className: \"round-img\",\n                            src: user.avatar_url,\n                            alt: \"\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 12,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: \"text-muted\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 13,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: user.bio\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: user.blog,\n                            target: \"_blank\",\n                            className: \"btn btn-dark my-2\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 14,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Visit my Blog\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: user.html_url,\n                            className: \"btn btn-dark\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Visit GitHub Profile\"\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_c = GitHub;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GitHub);\nvar _c;\n$RefreshReg$(_c, \"GitHub\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naXRIdWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNIOztBQUV0QyxHQUFLLENBQUNFLE1BQU0sR0FBRyxRQUFRQyxRQUFnQixDQUFDO1FBQXZCQyxJQUFJLFNBQUpBLElBQUksRUFBRUQsVUFBVSxTQUFWQSxVQUFVO0lBQy9CLEVBQUUsRUFBRUMsSUFBSSxDQUFDQyxPQUFPLEtBQUssQ0FBVyxjQUFJRixVQUFVLEVBQUUsTUFBTSxzRUFBRUYsbURBQVU7UUFBRUUsVUFBVSxFQUFFQSxVQUFVOzs7Ozs7OztJQUMxRixNQUFNLHNFQUNMSCwwREFBTTtRQUFDTSxLQUFLLEVBQUMsQ0FBVzs7Ozs7Ozt1RkFDdEJDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7MkZBQ2pCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBc0I7Ozs7Ozs7Z0dBQ2xDRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBeUM7Ozs7Ozs7OzZGQUNyREMsQ0FBRTs7Ozs7OztzQ0FBRUwsSUFBSSxDQUFDTSxJQUFJOzs2RkFDYkMsQ0FBRzs0QkFBQ0gsU0FBUyxFQUFDLENBQVc7NEJBQUNJLEdBQUcsRUFBRVIsSUFBSSxDQUFDUyxVQUFVOzRCQUFFQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7Ozs7NkZBQ3REQyxDQUFDOzRCQUFDUCxTQUFTLEVBQUMsQ0FBWTs7Ozs7OztzQ0FBRUosSUFBSSxDQUFDWSxHQUFHOzs2RkFDbENDLENBQUM7NEJBQUNDLElBQUksRUFBRWQsSUFBSSxDQUFDZSxJQUFJOzRCQUFFQyxNQUFNLEVBQUMsQ0FBUTs0QkFBQ1osU0FBUyxFQUFDLENBQW1COzs7Ozs7O3NDQUFDLENBQWE7OzZGQUM5RVMsQ0FBQzs0QkFBQ0MsSUFBSSxFQUFFZCxJQUFJLENBQUNpQixRQUFROzRCQUFFYixTQUFTLEVBQUMsQ0FBYzs7Ozs7OztzQ0FBQyxDQUFvQjs7Ozs7OztBQUs5RSxDQUFDO0tBaEJJTixNQUFNOztBQXVDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dpdEh1Yi5qcz8zNGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBGZXRjaEVycm9yIGZyb20gXCIuL19mZXRjaEVycm9yXCI7XHJcblxyXG5jb25zdCBHaXRIdWIgPSAoe3VzZXIsIHN0YXR1c0NvZGV9KSA9PiB7XHJcbiAgaWYgKHVzZXIubWVzc2FnZSA9PT0gXCJOb3QgRm91bmRcIiB8fCBzdGF0dXNDb2RlKSByZXR1cm4gPEZldGNoRXJyb3IgIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9Lz47XHJcbiAgcmV0dXJuIChcclxuICA8TGF5b3V0IHRpdGxlPVwiTXkgR2l0SHViXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG9mZnNldC1tZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBib3JkZXItbGlnaHQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMT57dXNlci5uYW1lfTwvaDE+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kLWltZ1wiIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3VzZXIuYmlvfTwvcD5cclxuICAgICAgICAgIDxhIGhyZWY9e3VzZXIuYmxvZ30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIG15LTJcIj5WaXNpdCBteSBCbG9nPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj17dXNlci5odG1sX3VybH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCI+VmlzaXQgR2l0SHViIFByb2ZpbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbil9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9BbGFuTWF1cmljaW9DYXN0aWxsb2ApO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXMgPiAyMDAgPyByZXNwb25zZS5zdGF0dXMgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBzdGF0dXNDb2RlXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICBlcnJvcjogZXJyb3JcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0SHViO1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiRmV0Y2hFcnJvciIsIkdpdEh1YiIsInN0YXR1c0NvZGUiLCJ1c2VyIiwibWVzc2FnZSIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwiaW1nIiwic3JjIiwiYXZhdGFyX3VybCIsImFsdCIsInAiLCJiaW8iLCJhIiwiaHJlZiIsImJsb2ciLCJ0YXJnZXQiLCJodG1sX3VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/gitHub.js\n");

/***/ })

});