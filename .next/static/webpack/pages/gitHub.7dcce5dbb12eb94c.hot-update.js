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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _fetchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_fetchError */ \"./pages/_fetchError.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar GitHub = function(param1) {\n    var user = param1.user, repo = param1.repo, statusCode = param1.statusCode;\n    var _this1 = _this;\n    if (user.message === \"Not Found\" || statusCode) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fetchError__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        statusCode: statusCode,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n            lineNumber: 6,\n            columnNumber: 12\n        },\n        __self: _this\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"My GitHub\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n            className: \"row pt-2\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-md-4 offset-md-4\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"card card-body border-light text-center\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                        lineNumber: 13,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: user.name\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                    className: \"round-img\",\n                                    src: user.avatar_url,\n                                    alt: \"\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                        lineNumber: 14,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    className: \"text-muted\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: user.bio\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    href: user.html_url,\n                                    className: \"btn btn-dark\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                        lineNumber: 16,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Visit GitHub Profile\"\n                                })\n                            ]\n                        })\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col-md-12\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"card card-body bg-dark border-light\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"row\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"col-md-12\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                        className: \"text-center text-light\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: \"Repositories\"\n                                    })\n                                }),\n                                repo.map(function(param, index) {\n                                    var name = param.name, description = param.description, language = param.language, html_url = param.html_url;\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"col-md-4 p-2\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"card h-100 border-light\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this1,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                                className: \"card-body\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 21\n                                                },\n                                                __self: _this1,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                            lineNumber: 32,\n                                                            columnNumber: 23\n                                                        },\n                                                        __self: _this1,\n                                                        children: name\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                            lineNumber: 33,\n                                                            columnNumber: 23\n                                                        },\n                                                        __self: _this1,\n                                                        children: language\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                        className: \"card-text\",\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                            lineNumber: 34,\n                                                            columnNumber: 23\n                                                        },\n                                                        __self: _this1,\n                                                        children: description\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: html_url,\n                                                        className: \"btn btn-primary\",\n                                                        __source: {\n                                                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\pages\\\\gitHub.js\",\n                                                            lineNumber: 35,\n                                                            columnNumber: 23\n                                                        },\n                                                        __self: _this1,\n                                                        children: \"Go to project\"\n                                                    })\n                                                ]\n                                            })\n                                        })\n                                    }, index);\n                                })\n                            ]\n                        })\n                    })\n                })\n            ]\n        })\n    }));\n};\n_c = GitHub;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GitHub);\nvar _c;\n$RefreshReg$(_c, \"GitHub\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naXRIdWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNIOztBQUV0QyxHQUFLLENBQUNFLE1BQU0sR0FBRyxRQUFRLFNBQXdCLENBQUM7UUFBOUJDLElBQUksVUFBSkEsSUFBSSxFQUFFQyxJQUFJLFVBQUpBLElBQUksRUFBRUMsVUFBVSxVQUFWQSxVQUFVOztJQUN0QyxFQUFFLEVBQUVGLElBQUksQ0FBQ0csT0FBTyxLQUFLLENBQVcsY0FBSUQsVUFBVSxFQUM1QyxNQUFNLHNFQUFFSixtREFBVTtRQUFDSSxVQUFVLEVBQUVBLFVBQVU7Ozs7Ozs7O0lBQzNDLE1BQU0sc0VBQ0hMLDBEQUFNO1FBQUNPLEtBQUssRUFBQyxDQUFXOzs7Ozs7O3dGQUN0QkMsQ0FBTztZQUFDQyxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7cUZBQzFCQyxDQUFHO29CQUFDRCxTQUFTLEVBQUMsQ0FBSzs7Ozs7OzttR0FDakJDLENBQUc7d0JBQUNELFNBQVMsRUFBQyxDQUFzQjs7Ozs7Ozt3R0FDbENDLENBQUc7NEJBQUNELFNBQVMsRUFBQyxDQUF5Qzs7Ozs7Ozs7cUdBQ3JERSxDQUFFOzs7Ozs7OzhDQUFFUixJQUFJLENBQUNTLElBQUk7O3FHQUNiQyxDQUFHO29DQUFDSixTQUFTLEVBQUMsQ0FBVztvQ0FBQ0ssR0FBRyxFQUFFWCxJQUFJLENBQUNZLFVBQVU7b0NBQUVDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7OztxR0FDdERDLENBQUM7b0NBQUNSLFNBQVMsRUFBQyxDQUFZOzs7Ozs7OzhDQUFFTixJQUFJLENBQUNlLEdBQUc7O3FHQUNsQ0MsQ0FBQztvQ0FBQ0MsSUFBSSxFQUFFakIsSUFBSSxDQUFDa0IsUUFBUTtvQ0FBRVosU0FBUyxFQUFDLENBQWM7Ozs7Ozs7OENBQUMsQ0FFakQ7Ozs7OztxRkFJTEMsQ0FBRztvQkFBQ0QsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7bUdBQ3ZCQyxDQUFHO3dCQUFDRCxTQUFTLEVBQUMsQ0FBcUM7Ozs7Ozs7d0dBQ2pEQyxDQUFHOzRCQUFDRCxTQUFTLEVBQUMsQ0FBSzs7Ozs7Ozs7cUdBQ2pCQyxDQUFHO29DQUFDRCxTQUFTLEVBQUMsQ0FBVzs7Ozs7OzttSEFDdkJFLENBQUU7d0NBQUNGLFNBQVMsRUFBQyxDQUF3Qjs7Ozs7OztrREFBQyxDQUFZOzs7Z0NBRXBETCxJQUFJLENBQUNrQixHQUFHLENBQUMsUUFBUSxRQUFvQ0MsS0FBSzt3Q0FBOUNYLElBQUksU0FBSkEsSUFBSSxFQUFFWSxXQUFXLFNBQVhBLFdBQVcsRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVKLFFBQVEsU0FBUkEsUUFBUTtrREFDaEQsTUFBTSx3REFBTFgsQ0FBRzt3Q0FBQ0QsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7dUhBQzFCQyxDQUFHOzRDQUFDRCxTQUFTLEVBQUMsQ0FBeUI7Ozs7Ozs7NEhBQ3JDQyxDQUFHO2dEQUFDRCxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7eUhBQ3ZCaUIsQ0FBRTs7Ozs7OztrRUFBRWQsSUFBSTs7eUhBQ1JlLENBQUU7Ozs7Ozs7a0VBQUVGLFFBQVE7O3lIQUNaUixDQUFDO3dEQUFDUixTQUFTLEVBQUMsQ0FBVzs7Ozs7OztrRUFBRWUsV0FBVzs7eUhBQ3BDTCxDQUFDO3dEQUFDQyxJQUFJLEVBQUVDLFFBQVE7d0RBQUVaLFNBQVMsRUFBQyxDQUFpQjs7Ozs7OztrRUFBQyxDQUUvQzs7Ozs7dUNBUjZCYyxLQUFLOzs7Ozs7Ozs7QUFtQnhELENBQUM7S0E1Q0tyQixNQUFNOztBQTRFWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dpdEh1Yi5qcz8zNGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBGZXRjaEVycm9yIGZyb20gXCIuL19mZXRjaEVycm9yXCI7XHJcblxyXG5jb25zdCBHaXRIdWIgPSAoeyB1c2VyLCByZXBvLCBzdGF0dXNDb2RlIH0pID0+IHtcclxuICBpZiAodXNlci5tZXNzYWdlID09PSBcIk5vdCBGb3VuZFwiIHx8IHN0YXR1c0NvZGUpXHJcbiAgICByZXR1cm4gPEZldGNoRXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz47XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCJNeSBHaXRIdWJcIj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93IHB0LTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBvZmZzZXQtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJvcmRlci1saWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMT57dXNlci5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZC1pbWdcIiBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e3VzZXIuYmlvfTwvcD5cclxuICAgICAgICAgICAgICA8YSBocmVmPXt1c2VyLmh0bWxfdXJsfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgIFZpc2l0IEdpdEh1YiBQcm9maWxlXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJnLWRhcmsgYm9yZGVyLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0XCI+UmVwb3NpdG9yaWVzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7cmVwby5tYXAoKHsgbmFtZSwgZGVzY3JpcHRpb24sIGxhbmd1YWdlLCBodG1sX3VybCB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBwLTJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGJvcmRlci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoND57bGFuZ3VhZ2V9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtodG1sX3VybH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIHByb2plY3RcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0FsYW5NYXVyaWNpb0Nhc3RpbGxvYFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCByZXBvcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9BbGFuTWF1cmljaW9DYXN0aWxsby9yZXBvc2BcclxuICAgICk7XHJcbiAgICBjb25zdCByZXBvID0gYXdhaXQgcmVwb3MuanNvbigpO1xyXG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9XHJcbiAgICAgIHJlc3BvbnNlLnN0YXR1cyA+IDIwMCB8fCByZXBvLnN0YXR1cyA/IHJlc3BvbnNlLnN0YXR1cyA6IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICByZXBvLFxyXG4gICAgICAgIHN0YXR1c0NvZGUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaXRIdWI7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJGZXRjaEVycm9yIiwiR2l0SHViIiwidXNlciIsInJlcG8iLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInRpdGxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwibmFtZSIsImltZyIsInNyYyIsImF2YXRhcl91cmwiLCJhbHQiLCJwIiwiYmlvIiwiYSIsImhyZWYiLCJodG1sX3VybCIsIm1hcCIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsImgzIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/gitHub.js\n");

/***/ })

});