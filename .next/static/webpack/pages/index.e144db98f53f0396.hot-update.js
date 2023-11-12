"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($id: number, $done: boolean){\\n    toggleTaskDone($id, $done) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject1());\nconst toggleTaskDone = (event)=>{\n    const newDoneStatus = event.target.checked;\n    console.log(newDoneStatus);\n};\nconst Home = ()=>{\n    _s();\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(AllTasksQuery);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"SIMPLE TASK LIST\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"list-none\",\n                children: data.tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            htmlFor: \"task-\".concat(task.id),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    id: \"task-done-status\",\n                                    type: \"checkbox\",\n                                    checked: task.done,\n                                    onChange: toggleTaskDone,\n                                    className: \"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined),\n                                task.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined)\n                    }, task.id, false, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0M7QUFHL0MsTUFBTUUsZ0JBQWdCRixtREFBR0E7QUFVekIsTUFBTUcscUJBQXFCSCxtREFBR0E7QUFVOUIsTUFBTUksaUJBQWlCLENBQUNDO0lBQ3RCLE1BQU1DLGdCQUFnQkQsTUFBTUUsTUFBTSxDQUFDQyxPQUFPO0lBQzFDQyxRQUFRQyxHQUFHLENBQUNKO0FBQ2Q7QUFFQSxNQUFNSyxPQUFpQjs7SUFDckIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFLEdBQUdiLHdEQUFRQSxDQUFDQztJQUUxQyxJQUFJVyxTQUFTLHFCQUFPLDhEQUFDRTtrQkFBRTs7Ozs7O0lBQ3ZCLElBQUlELE9BQU8scUJBQU8sOERBQUNDOztZQUFFO1lBQVFELE1BQU1FLE9BQU87Ozs7Ozs7SUFFMUMscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBR0MsV0FBVTswQkFDWFAsS0FBS1EsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2YsOERBQUNDO2tDQUNDLDRFQUFDQzs0QkFBTUMsU0FBUyxRQUFnQixPQUFSSCxLQUFLSSxFQUFFOzs4Q0FDN0IsOERBQUNDO29DQUNDRCxJQUFHO29DQUNIRSxNQUFLO29DQUNMcEIsU0FBU2MsS0FBS08sSUFBSTtvQ0FDbEJDLFVBQVUxQjtvQ0FDVmUsV0FBVTs7Ozs7O2dDQUVYRyxLQUFLUyxLQUFLOzs7Ozs7O3VCQVROVCxLQUFLSSxFQUFFOzs7Ozs7Ozs7Ozs7QUFnQjFCO0dBM0JNZjs7UUFDNkJWLG9EQUFRQTs7O0tBRHJDVTtBQTZCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHRhc2sgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgQWxsVGFza3NRdWVyeSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHRhc2tzIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZG9uZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVG9nZ2xlVGFza011dGF0aW9uID0gZ3FsYFxuICBtdXRhdGlvbiAoJGlkOiBudW1iZXIsICRkb25lOiBib29sZWFuKXtcbiAgICB0b2dnbGVUYXNrRG9uZSgkaWQsICRkb25lKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IHRvZ2dsZVRhc2tEb25lID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICBjb25zdCBuZXdEb25lU3RhdHVzID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gIGNvbnNvbGUubG9nKG5ld0RvbmVTdGF0dXMpO1xufTtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEFsbFRhc2tzUXVlcnkpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5TSU1QTEUgVEFTSyBMSVNUPC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cbiAgICAgICAge2RhdGEudGFza3MubWFwKCh0YXNrOiB0YXNrKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dGFzay5pZH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHRhc2stJHt0YXNrLmlkfWB9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInRhc2stZG9uZS1zdGF0dXNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGFzay5kb25lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVUYXNrRG9uZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS02MDAgZGFyazpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLTIgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiQWxsVGFza3NRdWVyeSIsIlRvZ2dsZVRhc2tNdXRhdGlvbiIsInRvZ2dsZVRhc2tEb25lIiwiZXZlbnQiLCJuZXdEb25lU3RhdHVzIiwidGFyZ2V0IiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInAiLCJtZXNzYWdlIiwiaDEiLCJ1bCIsImNsYXNzTmFtZSIsInRhc2tzIiwibWFwIiwidGFzayIsImxpIiwibGFiZWwiLCJodG1sRm9yIiwiaWQiLCJpbnB1dCIsInR5cGUiLCJkb25lIiwib25DaGFuZ2UiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});