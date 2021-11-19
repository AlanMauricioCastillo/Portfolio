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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _fetchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_fetchError */ \"./pages/_fetchError.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar GitHub = function(param) {\n    var user = param.user, statusCode = param.statusCode;\n    if (user.message === \"Not Found\" || statusCode) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fetchError__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n            lineNumber: 5,\n            columnNumber: 58\n        },\n        __self: _this\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n            lineNumber: 7,\n            columnNumber: 3\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"col-md-4 offset-md-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"card card-body text-center\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 11,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: user.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            className: \"round-img\",\n                            src: user.avatar_url,\n                            alt: \"\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 12,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: \"text-muted\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 13,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: user.bio\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: user.blog,\n                            target: \"_blank\",\n                            className: \"btn btn-dark my-2\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 14,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Visit my Blog\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: user.html_url,\n                            className: \"btn btn-dark\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Visit GitHub Profile\"\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n_c = GitHub;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GitHub);\nvar _c;\n$RefreshReg$(_c, \"GitHub\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naXRIdWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNIOztBQUV0QyxHQUFLLENBQUNFLE1BQU0sR0FBRyxRQUFRQyxRQUFnQixDQUFDO1FBQXZCQyxJQUFJLFNBQUpBLElBQUksRUFBRUQsVUFBVSxTQUFWQSxVQUFVO0lBQy9CLEVBQUUsRUFBRUMsSUFBSSxDQUFDQyxPQUFPLEtBQUssQ0FBVyxjQUFJRixVQUFVLEVBQUUsTUFBTSxzRUFBRUYsbURBQVU7Ozs7Ozs7O0lBQ2xFLE1BQU0sc0VBQ0xELDBEQUFNOzs7Ozs7O3VGQUNKTSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLOzs7Ozs7OzJGQUNqQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXNCOzs7Ozs7O2dHQUNsQ0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQTRCOzs7Ozs7Ozs2RkFDeENDLENBQUU7Ozs7Ozs7c0NBQUVKLElBQUksQ0FBQ0ssSUFBSTs7NkZBQ2JDLENBQUc7NEJBQUNILFNBQVMsRUFBQyxDQUFXOzRCQUFDSSxHQUFHLEVBQUVQLElBQUksQ0FBQ1EsVUFBVTs0QkFBRUMsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7OzZGQUN0REMsQ0FBQzs0QkFBQ1AsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7c0NBQUVILElBQUksQ0FBQ1csR0FBRzs7NkZBQ2xDQyxDQUFDOzRCQUFDQyxJQUFJLEVBQUViLElBQUksQ0FBQ2MsSUFBSTs0QkFBRUMsTUFBTSxFQUFDLENBQVE7NEJBQUNaLFNBQVMsRUFBQyxDQUFtQjs7Ozs7OztzQ0FBQyxDQUFhOzs2RkFDOUVTLENBQUM7NEJBQUNDLElBQUksRUFBRWIsSUFBSSxDQUFDZ0IsUUFBUTs0QkFBRWIsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7c0NBQUMsQ0FBb0I7Ozs7Ozs7QUFLOUUsQ0FBQztLQWhCSUwsTUFBTTs7QUF1Q1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9naXRIdWIuanM/MzRlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgRmV0Y2hFcnJvciBmcm9tIFwiLi9fZmV0Y2hFcnJvclwiO1xyXG5cclxuY29uc3QgR2l0SHViID0gKHt1c2VyLCBzdGF0dXNDb2RlfSkgPT4ge1xyXG4gIGlmICh1c2VyLm1lc3NhZ2UgPT09IFwiTm90IEZvdW5kXCIgfHwgc3RhdHVzQ29kZSkgcmV0dXJuIDxGZXRjaEVycm9yIC8+O1xyXG4gIHJldHVybiAoXHJcbiAgPExheW91dD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgb2Zmc2V0LW1kLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDE+e3VzZXIubmFtZX08L2gxPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZC1pbWdcIiBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPnt1c2VyLmJpb308L3A+XHJcbiAgICAgICAgICA8YSBocmVmPXt1c2VyLmJsb2d9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBteS0yXCI+VmlzaXQgbXkgQmxvZzwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9e3VzZXIuaHRtbF91cmx9IGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiPlZpc2l0IEdpdEh1YiBQcm9maWxlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG4pfTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvQWxhbk1hdXJpY2lvQ2FzdGlsbG9gKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzID4gMjAwID8gcmVzcG9uc2Uuc3RhdHVzIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgc3RhdHVzQ29kZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdEh1YjtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkZldGNoRXJyb3IiLCJHaXRIdWIiLCJzdGF0dXNDb2RlIiwidXNlciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJpbWciLCJzcmMiLCJhdmF0YXJfdXJsIiwiYWx0IiwicCIsImJpbyIsImEiLCJocmVmIiwiYmxvZyIsInRhcmdldCIsImh0bWxfdXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/gitHub.js\n");

/***/ })

});