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

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: \"container py-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: children\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"text-white text-center p-2\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"container\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: \"Mauricio Castillo\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: [\n                                \"\\xa9 \",\n                                new Date().getFullYear()\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: \"All Rights Reserved\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2xCO0FBQ0o7QUFDSTs7O0FBSWpDLEdBQUssQ0FBQ0ksTUFBTSxHQUFHLFFBQVEsUUFBVSxDQUFDO1FBQWhCQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3hCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixrRUFBUztJQUV4QkMsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmLEdBQUssQ0FBQ00saUJBQWlCLEdBQUcsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQztZQUNsQ0wsc0RBQWU7UUFDakIsQ0FBQztRQUNERyxNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQWtCLG1CQUFFSixpQkFBaUI7UUFDdERELE1BQU0sQ0FBQ0ksTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBcUIsc0JBQUUsUUFBUTtZQUFGUixNQUFNLENBQU5BLHFEQUFjOztRQUM1RCxNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDWkcsTUFBTSxDQUFDSSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFrQixtQkFBRU4saUJBQWlCO1FBQ3pELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSx1RUFBQzs7aUZBRUpMLCtDQUFNOzs7Ozs7OztpRkFDTlksQ0FBSTtnQkFBQ0MsU0FBUyxFQUFDLENBQWdCOzs7Ozs7OzBCQUMvQlYsUUFBUTs7aUZBRVJXLENBQU07Z0JBQUNELFNBQVMsRUFBQyxDQUE0Qjs7Ozs7OztnR0FDM0NFLENBQUc7b0JBQUNGLFNBQVMsRUFBQyxDQUFXOzs7Ozs7Ozs2RkFDdkJHLENBQUU7Ozs7Ozs7c0NBQUMsQ0FBaUI7OzhGQUNwQkMsQ0FBQzs7Ozs7Ozs7Z0NBQUMsQ0FBTztnQ0FBQyxHQUFHLENBQUNDLElBQUksR0FBR0MsV0FBVzs7OzZGQUNoQ0YsQ0FBQzs7Ozs7OztzQ0FBQyxDQUFtQjs7Ozs7OztBQUk3QixDQUFDO0dBNUJJZixNQUFNOztRQUNLSiw4REFBUzs7O0tBRHBCSSxNQUFNO0FBOEJaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanN4P2M2MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL05hdkJhclwiO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuXHJcblxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgIG5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gblByb2dyZXNzLmRvbmUoKSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHJldHVybihcclxuICA8PlxyXG4gICAgPE5hdkJhciAvPlxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBwLTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDI+TWF1cmljaW8gQ2FzdGlsbG88L2gyPlxyXG4gICAgICAgIDxwPiZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvcD5cclxuICAgICAgICA8cD5BbGwgUmlnaHRzIFJlc2VydmVkPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIDwvPlxyXG4pfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIk5hdkJhciIsIm5Qcm9ncmVzcyIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJzdGFydCIsImV2ZW50cyIsIm9uIiwiZG9uZSIsIm9mZiIsIm1haW4iLCJjbGFzc05hbWUiLCJmb290ZXIiLCJkaXYiLCJoMiIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n");

/***/ })

});