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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, title = param.title, _footer = param.footer, footer = _footer === void 0 ? true : _footer, clas = param.clas;\n    _s();\n    var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();\n        });\n        return function() {\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: clas,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: \"container py-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 18\n                        },\n                        __self: _this,\n                        children: title\n                    }),\n                    children\n                ]\n            }),\n            footer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"footer\", {\n                className: \"text-primary bg-muted text-center p-2\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"container\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: \"Mauricio A. Castillo\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Alan Castillo\\\\Full Stack Developer Traning\\\\Carrera\\\\Portfolio\\\\components\\\\Layout.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                \"\\xa9 \",\n                                new Date().getFullYear(),\n                                \" All Rights Reserved\"\n                            ]\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbEI7QUFDSjtBQUNJO0FBQ0U7OztBQUVuQyxHQUFLLENBQUNLLE1BQU0sR0FBRyxRQUFRLFFBQXNDLENBQUM7UUFBNUNDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssa0JBQUVDLE1BQU0sRUFBTkEsTUFBTSx3QkFBRyxJQUFJLFlBQUVDLElBQUksU0FBSkEsSUFBSTs7SUFDcEQsR0FBSyxDQUFDQyxNQUFNLEdBQUdWLGtFQUFTO0lBRXhCQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2YsR0FBSyxDQUFDVSxpQkFBaUIsR0FBRyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1lBQ2xDVCxzREFBZTtRQUNqQixDQUFDO1FBQ0RPLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBa0IsbUJBQUVKLGlCQUFpQjtRQUN0REQsTUFBTSxDQUFDSSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRSxRQUFRO1lBQUZaLE1BQU0sQ0FBTkEscURBQWM7O1FBQzVELE1BQU0sQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNaTyxNQUFNLENBQUNJLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLENBQWtCLG1CQUFFTixpQkFBaUI7UUFDekQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLHVFQUNITyxDQUFHO1FBQUNDLFNBQVMsRUFBRVYsSUFBSTs7Ozs7Ozs7aUZBQ2pCUCwrQ0FBTTs7Ozs7Ozs7a0ZBQ05rQixDQUFJO2dCQUFDRCxTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7O29CQUU5QlosS0FBSyx5RUFBS2MsQ0FBRTt3QkFBQ0YsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7a0NBQUVaLEtBQUs7O29CQUU1Q0QsUUFBUTs7O1lBR1JFLE1BQU0seUVBQ0pBLENBQU07Z0JBQUNXLFNBQVMsRUFBQyxDQUF1Qzs7Ozs7OztnR0FDdERELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7Ozs2RkFDdkJHLENBQUU7Ozs7Ozs7c0NBQUMsQ0FBb0I7OzhGQUN2QkMsQ0FBQzs7Ozs7Ozs7Z0NBQUMsQ0FBTztnQ0FBQyxHQUFHLENBQUNDLElBQUksR0FBR0MsV0FBVztnQ0FBRyxDQUFvQjs7Ozs7Ozs7QUFNcEUsQ0FBQztHQWxDS3BCLE1BQU07O1FBQ0tMLDhEQUFTOzs7S0FEcEJLLE1BQU07QUFvQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qc3g/YzYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2QmFyXCI7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBmb290ZXIgPSB0cnVlLCBjbGFzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICBuUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIH07XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBuUHJvZ3Jlc3MuZG9uZSgpKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzfT5cclxuICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGUgJiYgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgIH1cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICB7Zm9vdGVyICYmIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBiZy1tdXRlZCB0ZXh0LWNlbnRlciBwLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMz5NYXVyaWNpbyBBLiBDYXN0aWxsbzwvaDM+XHJcbiAgICAgICAgICAgIDxwPiZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBBbGwgUmlnaHRzIFJlc2VydmVkPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiTmF2QmFyIiwiblByb2dyZXNzIiwiY2xhc3NuYW1lcyIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJmb290ZXIiLCJjbGFzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJzdGFydCIsImV2ZW50cyIsIm9uIiwiZG9uZSIsIm9mZiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsImgzIiwicCIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n");

/***/ })

});