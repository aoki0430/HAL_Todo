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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/checkbox */ \"./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/AppstoreOutlined */ \"./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MailOutlined */ \"./node_modules/@ant-design/icons/lib/icons/MailOutlined.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($id: Int, $done: Boolean) {\\n    toggleTaskDone(id: $id, done: $done) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nconst Home = ()=>{\n    _s();\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(AllTasksQuery);\n    const [toggleTaskDone, { loading: toggling, error: toggleError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ToggleTaskMutation);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm();\n    const handleToggleTaskDone = async (event, taskId)=>{\n        const newDoneStatus = event.target.checked;\n        try {\n            await toggleTaskDone({\n                variables: {\n                    id: taskId,\n                    done: newDoneStatus\n                }\n            });\n        } catch (error) {\n            console.error(\"Error toggling task\", error);\n        }\n    };\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"mail\");\n    const onClickTab = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    const items = [\n        {\n            label: \"All\",\n            key: \"mail\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined)\n        },\n        {\n            label: \"Today\",\n            key: \"app\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        }\n    ];\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 71,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 72,\n        columnNumber: 21\n    }, undefined);\n    const undoneTasks = [\n        ...data.tasks\n    ].filter((task)=>!task.done);\n    const doneTasks = [\n        ...data.tasks\n    ].filter((task)=>task.done);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"SIMPLE TASK LIST\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                onClick: onClickTab,\n                selectedKeys: [\n                    current\n                ],\n                mode: \"horizontal\",\n                items: items\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"ml-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                labelCol: {\n                                    span: 8\n                                },\n                                wrapperCol: {\n                                    span: 16\n                                },\n                                style: {\n                                    maxWidth: 600\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                                    wrapperCol: {\n                                        offset: 8,\n                                        span: 16\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        placeholder: \"write todo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                htmlType: \"submit\",\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        className: \"list-none\",\n                        children: [\n                            undoneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                        children: task.title\n                                    }, \"task-\".concat(task.id), false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, task.id, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined)),\n                            undoneTasks.length > 0 && doneTasks.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {\n                                    className: \"my-4 border-t border-gray-300\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined),\n                            doneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                    className: \"mb-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                        className: \"line-through\",\n                                        children: task.title\n                                    }, \"task-\".concat(task.id), false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, task.id, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"TPfqdII26Wy73iUtNU8X+Q4L5TU=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FGTixRQUFnQixPQUFSckIsS0FBS2pCLEVBQUU7Ozs7O21DQUhmaUIsS0FBS2pCLEVBQUU7Ozs7OzRCQVNqQmMsWUFBWXlCLE1BQU0sR0FBRyxLQUFLckIsVUFBVXFCLE1BQU0sR0FBRyxtQkFDNUMsOERBQUNIOzBDQUNDLDRFQUFDSTtvQ0FBR2hCLFdBQVU7Ozs7Ozs7Ozs7OzRCQUdqQk4sVUFBVWlCLEdBQUcsQ0FBQyxDQUFDbEIscUJBQ2QsOERBQUNtQjtvQ0FBaUJaLFdBQVU7OENBQzFCLDRFQUFDaEQsMERBQVFBO3dDQUNQNkQsVUFBVSxDQUFDM0MsUUFBVUQscUJBQXFCQyxPQUFPdUIsS0FBS2pCLEVBQUU7d0NBRXhEd0IsV0FBVTtrREFFVFAsS0FBS3FCLEtBQUs7dUNBSE4sUUFBZ0IsT0FBUnJCLEtBQUtqQixFQUFFOzs7OzttQ0FIZmlCLEtBQUtqQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzVCO0dBdEdNaEI7O1FBQzZCSCxvREFBUUE7UUFFdkNELHVEQUFXQTtRQUNFUCw2REFBWW1COzs7S0FKdkJSO0FBd0dOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lbnUsIE1lbnVQcm9wcywgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCwgTWFpbE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgdHlwZSB7IENoZWNrYm94Q2hhbmdlRXZlbnQgfSBmcm9tIFwiYW50ZC9lcy9jaGVja2JveFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHRhc2sgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgQWxsVGFza3NRdWVyeSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHRhc2tzIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZG9uZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVG9nZ2xlVGFza011dGF0aW9uID0gZ3FsYFxuICBtdXRhdGlvbiAoJGlkOiBJbnQsICRkb25lOiBCb29sZWFuKSB7XG4gICAgdG9nZ2xlVGFza0RvbmUoaWQ6ICRpZCwgZG9uZTogJGRvbmUpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZG9uZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEFsbFRhc2tzUXVlcnkpO1xuICBjb25zdCBbdG9nZ2xlVGFza0RvbmUsIHsgbG9hZGluZzogdG9nZ2xpbmcsIGVycm9yOiB0b2dnbGVFcnJvciB9XSA9XG4gICAgdXNlTXV0YXRpb24oVG9nZ2xlVGFza011dGF0aW9uKTtcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlVGFza0RvbmUgPSBhc3luYyAoXG4gICAgZXZlbnQ6IENoZWNrYm94Q2hhbmdlRXZlbnQsXG4gICAgdGFza0lkOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3RG9uZVN0YXR1cyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0b2dnbGVUYXNrRG9uZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlkOiB0YXNrSWQsXG4gICAgICAgICAgZG9uZTogbmV3RG9uZVN0YXR1cyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdG9nZ2xpbmcgdGFza1wiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwibWFpbFwiKTtcbiAgY29uc3Qgb25DbGlja1RhYjogTWVudVByb3BzW1wib25DbGlja1wiXSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG5cbiAgY29uc3QgaXRlbXM6IE1lbnVQcm9wc1tcIml0ZW1zXCJdID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkFsbFwiLFxuICAgICAga2V5OiBcIm1haWxcIixcbiAgICAgIGljb246IDxNYWlsT3V0bGluZWQgLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJUb2RheVwiLFxuICAgICAga2V5OiBcImFwcFwiLFxuICAgICAgaWNvbjogPEFwcHN0b3JlT3V0bGluZWQgLz4sXG4gICAgfSxcbiAgXTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICBjb25zdCB1bmRvbmVUYXNrcyA9IFsuLi5kYXRhLnRhc2tzIV0uZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5kb25lKTtcbiAgY29uc3QgZG9uZVRhc2tzID0gWy4uLmRhdGEudGFza3MhXS5maWx0ZXIoKHRhc2spID0+IHRhc2suZG9uZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlNJTVBMRSBUQVNLIExJU1Q8L2gxPlxuICAgICAgPE1lbnVcbiAgICAgICAgb25DbGljaz17b25DbGlja1RhYn1cbiAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XG4gICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNiB9fVxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDYwMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gd3JhcHBlckNvbD17eyBvZmZzZXQ6IDgsIHNwYW46IDE2IH19PlxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJ3cml0ZSB0b2RvXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIj5BZGQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cbiAgICAgICAgICB7dW5kb25lVGFza3MubWFwKCh0YXNrOiB0YXNrKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfT5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlVGFza0RvbmUoZXZlbnQsIHRhc2suaWQpfVxuICAgICAgICAgICAgICAgIGtleT17YHRhc2stJHt0YXNrLmlkfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3VuZG9uZVRhc2tzLmxlbmd0aCA+IDAgJiYgZG9uZVRhc2tzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNCBib3JkZXItdCBib3JkZXItZ3JheS0zMDBcIiAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkb25lVGFza3MubWFwKCh0YXNrKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfSBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZVRvZ2dsZVRhc2tEb25lKGV2ZW50LCB0YXNrLmlkKX1cbiAgICAgICAgICAgICAgICBrZXk9e2B0YXNrLSR7dGFzay5pZH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmUtdGhyb3VnaFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZW51IiwiQ2hlY2tib3giLCJBcHBzdG9yZU91dGxpbmVkIiwiTWFpbE91dGxpbmVkIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsIkFsbFRhc2tzUXVlcnkiLCJUb2dnbGVUYXNrTXV0YXRpb24iLCJIb21lIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInRvZ2dsZVRhc2tEb25lIiwidG9nZ2xpbmciLCJ0b2dnbGVFcnJvciIsImZvcm0iLCJ1c2VGb3JtIiwiaGFuZGxlVG9nZ2xlVGFza0RvbmUiLCJldmVudCIsInRhc2tJZCIsIm5ld0RvbmVTdGF0dXMiLCJ0YXJnZXQiLCJjaGVja2VkIiwidmFyaWFibGVzIiwiaWQiLCJkb25lIiwiY29uc29sZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwib25DbGlja1RhYiIsImUiLCJsb2ciLCJrZXkiLCJpdGVtcyIsImxhYmVsIiwiaWNvbiIsInAiLCJtZXNzYWdlIiwidW5kb25lVGFza3MiLCJ0YXNrcyIsImZpbHRlciIsInRhc2siLCJkb25lVGFza3MiLCJoMSIsIm9uQ2xpY2siLCJzZWxlY3RlZEtleXMiLCJtb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsInN0eWxlIiwibWF4V2lkdGgiLCJJdGVtIiwib2Zmc2V0IiwicGxhY2Vob2xkZXIiLCJodG1sVHlwZSIsInVsIiwibWFwIiwibGkiLCJvbkNoYW5nZSIsInRpdGxlIiwibGVuZ3RoIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});