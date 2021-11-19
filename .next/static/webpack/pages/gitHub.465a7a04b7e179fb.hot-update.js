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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _fetchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_fetchError */ \"./pages/_fetchError.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar GitHub = function(param1) {\n    var user = param1.user, repo = param1.repo, statusCode = param1.statusCode;\n    var _this1 = _this;\n    if (user.message === \"Not Found\" || statusCode) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fetchError__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        statusCode: statusCode,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n            lineNumber: 6,\n            columnNumber: 12\n        },\n        __self: _this\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"My GitHub\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n            className: \"col-md-2\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col-md-4\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"card card-body border-light text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                            lineNumber: 13,\n                            columnNumber: 15\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: user.name\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                className: \"round-img\",\n                                src: user.avatar_url,\n                                alt: \"\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 17\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"text-muted\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: user.bio\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: user.html_url,\n                                className: \"btn btn-dark\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 17\n                                },\n                                __self: _this,\n                                children: \"Visit GitHub Profile\"\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col-md-8\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"card card-body bg-dark border-light\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"row\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"col-md-12\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                        className: \"text-center text-light\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: \"Repositories\"\n                                    })\n                                }),\n                                repo.map(function(param, index) {\n                                    var name = param.name, description = param.description, language = param.language, html_url = param.html_url;\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"col-md-4 p-2\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"card h-100 border-light\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this1,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                                className: \"card-body\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 21\n                                                },\n                                                __self: _this1,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                            lineNumber: 34,\n                                                            columnNumber: 23\n                                                        },\n                                                        __self: _this1,\n                                                        children: name\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                            lineNumber: 35,\n                                                            columnNumber: 23\n                                                        },\n                                                        __self: _this1,\n                                                        children: language\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                        className: \"card-text\",\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                            lineNumber: 36,\n                                                            columnNumber: 23\n                                                        },\n                                                        __self: _this1,\n                                                        children: description\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: html_url,\n                                                        className: \"btn btn-primary\",\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                            lineNumber: 37,\n                                                            columnNumber: 23\n                                                        },\n                                                        __self: _this1,\n                                                        children: \"Go to project\"\n                                                    })\n                                                ]\n                                            })\n                                        })\n                                    }, index);\n                                })\n                            ]\n                        })\n                    })\n                })\n            ]\n        })\n    }));\n};\n_c = GitHub;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GitHub);\nvar _c;\n$RefreshReg$(_c, \"GitHub\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naXRIdWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNIOztBQUV0QyxHQUFLLENBQUNFLE1BQU0sR0FBRyxRQUFRLFNBQXdCLENBQUM7UUFBOUJDLElBQUksVUFBSkEsSUFBSSxFQUFFQyxJQUFJLFVBQUpBLElBQUksRUFBRUMsVUFBVSxVQUFWQSxVQUFVOztJQUN0QyxFQUFFLEVBQUVGLElBQUksQ0FBQ0csT0FBTyxLQUFLLENBQVcsY0FBSUQsVUFBVSxFQUM1QyxNQUFNLHNFQUFFSixtREFBVTtRQUFDSSxVQUFVLEVBQUVBLFVBQVU7Ozs7Ozs7O0lBQzNDLE1BQU0sc0VBQ0hMLDBEQUFNO1FBQUNPLEtBQUssRUFBQyxDQUFXOzs7Ozs7O3dGQUN0QkMsQ0FBTztZQUFDQyxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7cUZBQzFCQyxDQUFHO29CQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7OztvR0FHbEJDLENBQUc7d0JBQUNELFNBQVMsRUFBQyxDQUF5Qzs7Ozs7Ozs7aUdBQ3JERSxDQUFFOzs7Ozs7OzBDQUFFUixJQUFJLENBQUNTLElBQUk7O2lHQUNiQyxDQUFHO2dDQUFDSixTQUFTLEVBQUMsQ0FBVztnQ0FBQ0ssR0FBRyxFQUFFWCxJQUFJLENBQUNZLFVBQVU7Z0NBQUVDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7OztpR0FDdERDLENBQUM7Z0NBQUNSLFNBQVMsRUFBQyxDQUFZOzs7Ozs7OzBDQUFFTixJQUFJLENBQUNlLEdBQUc7O2lHQUNsQ0MsQ0FBQztnQ0FBQ0MsSUFBSSxFQUFFakIsSUFBSSxDQUFDa0IsUUFBUTtnQ0FBRVosU0FBUyxFQUFDLENBQWM7Ozs7Ozs7MENBQUMsQ0FFakQ7Ozs7O3FGQUtQQyxDQUFHO29CQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7OzttR0FDdEJDLENBQUc7d0JBQUNELFNBQVMsRUFBQyxDQUFxQzs7Ozs7Ozt3R0FDakRDLENBQUc7NEJBQUNELFNBQVMsRUFBQyxDQUFLOzs7Ozs7OztxR0FDakJDLENBQUc7b0NBQUNELFNBQVMsRUFBQyxDQUFXOzs7Ozs7O21IQUN2QkUsQ0FBRTt3Q0FBQ0YsU0FBUyxFQUFDLENBQXdCOzs7Ozs7O2tEQUFDLENBQVk7OztnQ0FFcERMLElBQUksQ0FBQ2tCLEdBQUcsQ0FBQyxRQUFRLFFBQW9DQyxLQUFLO3dDQUE5Q1gsSUFBSSxTQUFKQSxJQUFJLEVBQUVZLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUosUUFBUSxTQUFSQSxRQUFRO2tEQUNoRCxNQUFNLHdEQUFMWCxDQUFHO3dDQUFDRCxTQUFTLEVBQUMsQ0FBYzs7Ozs7Ozt1SEFDMUJDLENBQUc7NENBQUNELFNBQVMsRUFBQyxDQUF5Qjs7Ozs7Ozs0SEFDckNDLENBQUc7Z0RBQUNELFNBQVMsRUFBQyxDQUFXOzs7Ozs7Ozt5SEFDdkJpQixDQUFFOzs7Ozs7O2tFQUFFZCxJQUFJOzt5SEFDUmUsQ0FBRTs7Ozs7OztrRUFBRUYsUUFBUTs7eUhBQ1pSLENBQUM7d0RBQUNSLFNBQVMsRUFBQyxDQUFXOzs7Ozs7O2tFQUFFZSxXQUFXOzt5SEFDcENMLENBQUM7d0RBQUNDLElBQUksRUFBRUMsUUFBUTt3REFBRVosU0FBUyxFQUFDLENBQWlCOzs7Ozs7O2tFQUFDLENBRS9DOzs7Ozt1Q0FSNkJjLEtBQUs7Ozs7Ozs7OztBQW1CeEQsQ0FBQztLQTlDS3JCLE1BQU07O0FBOEVaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0SHViLmpzPzM0ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IEZldGNoRXJyb3IgZnJvbSBcIi4vX2ZldGNoRXJyb3JcIjtcclxuXHJcbmNvbnN0IEdpdEh1YiA9ICh7IHVzZXIsIHJlcG8sIHN0YXR1c0NvZGUgfSkgPT4ge1xyXG4gIGlmICh1c2VyLm1lc3NhZ2UgPT09IFwiTm90IEZvdW5kXCIgfHwgc3RhdHVzQ29kZSlcclxuICAgIHJldHVybiA8RmV0Y2hFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSAvPjtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIk15IEdpdEh1YlwiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJvcmRlci1saWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt1c2VyLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmQtaW1nXCIgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3VzZXIuYmlvfTwvcD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VzZXIuaHRtbF91cmx9IGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICBWaXNpdCBHaXRIdWIgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJnLWRhcmsgYm9yZGVyLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XCI+UmVwb3NpdG9yaWVzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7cmVwby5tYXAoKHsgbmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBodG1sX3VybCB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwLTJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGJvcmRlci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoND57bGFuZ3VhZ2V9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtodG1sX3VybH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIHByb2plY3RcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0FsYW5NYXVyaWNpb0Nhc3RpbGxvYFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCByZXBvcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9BbGFuTWF1cmljaW9DYXN0aWxsby9yZXBvc2BcclxuICAgICk7XHJcbiAgICBjb25zdCByZXBvID0gYXdhaXQgcmVwb3MuanNvbigpO1xyXG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9XHJcbiAgICAgIHJlc3BvbnNlLnN0YXR1cyA+IDIwMCB8fCByZXBvLnN0YXR1cyA/IHJlc3BvbnNlLnN0YXR1cyA6IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICByZXBvLFxyXG4gICAgICAgIHN0YXR1c0NvZGUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaXRIdWI7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJGZXRjaEVycm9yIiwiR2l0SHViIiwidXNlciIsInJlcG8iLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInRpdGxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwibmFtZSIsImltZyIsInNyYyIsImF2YXRhcl91cmwiLCJhbHQiLCJwIiwiYmlvIiwiYSIsImhyZWYiLCJodG1sX3VybCIsIm1hcCIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsImgzIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/gitHub.js\n");

/***/ })

});