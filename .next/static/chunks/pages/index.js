/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Far%2Fghq%2Fgithub.com%2Faoki0430%2FHAL_Todo%2Fpages%2Findex.tsx&page=%2F!":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Far%2Fghq%2Fgithub.com%2Faoki0430%2FHAL_Todo%2Fpages%2Findex.tsx&page=%2F! ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmFyJTJGZ2hxJTJGZ2l0aHViLmNvbSUyRmFva2kwNDMwJTJGSEFMX1RvZG8lMkZwYWdlcyUyRmluZGV4LnRzeCZwYWdlPSUyRiEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzI1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Far%2Fghq%2Fgithub.com%2Faoki0430%2FHAL_Todo%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ToggleTask($id: ID!) {\\n    toggleTask(id: $id) {\\n      id\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject1());\nconst toggleTaskDone = (checked)=>{};\nconst Home = ()=>{\n    _s();\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(AllTasksQuery);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"SIMPLE TASK LIST\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"list-none\",\n                children: data.tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"task-\".concat(task.id),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    id: \"task-done-status\",\n                                    type: \"checkbox\",\n                                    checked: task.done,\n                                    className: \"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 8\n                                }, undefined),\n                                task.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 6\n                        }, undefined)\n                    }, task.id, false, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOEM7QUFFOUMsTUFBTUUsZ0JBQWdCRixtREFBR0E7QUFVekIsTUFBTUcscUJBQXFCSCxtREFBR0E7QUFTOUIsTUFBTUksaUJBQWlCLENBQUNDLFdBRXhCO0FBRUEsTUFBTUMsT0FBaUI7O0lBQ3JCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRSxHQUFHUix3REFBUUEsQ0FBQ0M7SUFFMUMsSUFBSU0sU0FBUyxxQkFBTyw4REFBQ0U7a0JBQUU7Ozs7OztJQUN2QixJQUFJRCxPQUFPLHFCQUFPLDhEQUFDQzs7WUFBRTtZQUFRRCxNQUFNRSxPQUFPOzs7Ozs7O0lBRTFDLHFCQUNJOzswQkFDRSw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQ1hQLEtBQUtRLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHFCQUNmLDhEQUFDQztrQ0FDUiw0RUFBQ0M7NEJBQU1DLFNBQVMsUUFBZ0IsT0FBUkgsS0FBS0ksRUFBRTs7OENBQzdCLDhEQUFDQztvQ0FBTUQsSUFBRztvQ0FBbUJFLE1BQUs7b0NBQVdsQixTQUFTWSxLQUFLTyxJQUFJO29DQUFHVixXQUFVOzs7Ozs7Z0NBQ3BFRyxLQUFLUSxLQUFLOzs7Ozs7O3VCQUhKUixLQUFLSSxFQUFFOzs7Ozs7Ozs7Ozs7QUFVNUI7R0FyQk1mOztRQUM2Qkwsb0RBQVFBOzs7S0FEckNLO0FBdUJOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuXG5jb25zdCBBbGxUYXNrc1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdGFza3Mge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkb25lXG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFRvZ2dsZVRhc2tNdXRhdGlvbiA9IGdxbGBcbiAgbXV0YXRpb24gVG9nZ2xlVGFzaygkaWQ6IElEISkge1xuICAgIHRvZ2dsZVRhc2soaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIGRvbmVcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgdG9nZ2xlVGFza0RvbmUgPSAoY2hlY2tlZCkgPT4ge1xuICBcbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEFsbFRhc2tzUXVlcnkpXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPlxuXG4gIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDE+U0lNUExFIFRBU0sgTElTVDwvaDE+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cbiAgICAgICAgICB7ZGF0YS50YXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9PlxuXHQgICAgPGxhYmVsIGh0bWxGb3I9e2B0YXNrLSR7dGFzay5pZH1gfT5cblx0ICAgICAgPGlucHV0IGlkPVwidGFzay1kb25lLXN0YXR1c1wiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Rhc2suZG9uZX0gIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ibHVlLTYwMCBiZy1ncmF5LTEwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTYwMCBkYXJrOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctMiBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwXCIvPlxuICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiQWxsVGFza3NRdWVyeSIsIlRvZ2dsZVRhc2tNdXRhdGlvbiIsInRvZ2dsZVRhc2tEb25lIiwiY2hlY2tlZCIsIkhvbWUiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwicCIsIm1lc3NhZ2UiLCJoMSIsInVsIiwiY2xhc3NOYW1lIiwidGFza3MiLCJtYXAiLCJ0YXNrIiwibGkiLCJsYWJlbCIsImh0bWxGb3IiLCJpZCIsImlucHV0IiwidHlwZSIsImRvbmUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/esm/_tagged_template_literal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/esm/_tagged_template_literal.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _: function() { return /* binding */ _tagged_template_literal; },\n/* harmony export */   _tagged_template_literal: function() { return /* binding */ _tagged_template_literal; }\n/* harmony export */ });\nfunction _tagged_template_literal(strings, raw) {\n    if (!raw) raw = strings.slice(0);\n\n    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2VzbS9fdGFnZ2VkX3RlbXBsYXRlX2xpdGVyYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTztBQUNQOztBQUVBLDREQUE0RCxPQUFPLDZCQUE2QjtBQUNoRztBQUN5QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2VzbS9fdGFnZ2VkX3RlbXBsYXRlX2xpdGVyYWwuanM/YTdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gX3RhZ2dlZF90ZW1wbGF0ZV9saXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICAgIGlmICghcmF3KSByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTtcbn1cbmV4cG9ydCB7IF90YWdnZWRfdGVtcGxhdGVfbGl0ZXJhbCBhcyBfIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/esm/_tagged_template_literal.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Far%2Fghq%2Fgithub.com%2Faoki0430%2FHAL_Todo%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);