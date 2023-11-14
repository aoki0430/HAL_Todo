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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/AppstoreOutlined */ \"./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MailOutlined */ \"./node_modules/@ant-design/icons/lib/icons/MailOutlined.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($id: Int, $done: Boolean) {\\n    toggleTaskDone(id: $id, done: $done) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nconst Home = ()=>{\n    _s();\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(AllTasksQuery);\n    const [toggleTaskDone, { loading: toggling, error: toggleError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ToggleTaskMutation);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm();\n    const handleToggleTaskDone = async (event, taskId)=>{\n        const newDoneStatus = event.target.checked;\n        try {\n            await toggleTaskDone({\n                variables: {\n                    id: taskId,\n                    done: newDoneStatus\n                }\n            });\n        } catch (error) {\n            console.error(\"Error toggling task\", error);\n        }\n    };\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"mail\");\n    const onClickTab = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    const items = [\n        {\n            label: \"Navigation One\",\n            key: \"mail\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        },\n        {\n            label: \"Navigation Two\",\n            key: \"app\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            disabled: true\n        }\n    ];\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 71,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 72,\n        columnNumber: 21\n    }, undefined);\n    const undoneTasks = [\n        ...data.tasks\n    ].filter((task)=>!task.done);\n    const doneTasks = [\n        ...data.tasks\n    ].filter((task)=>task.done);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"SIMPLE TASK LIST\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                onClick: onClickTab,\n                selectedKeys: [\n                    current\n                ],\n                mode: \"horizontal\",\n                items: items\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex my-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        labelCol: {\n                            span: 8\n                        },\n                        wrapperCol: {\n                            span: 16\n                        },\n                        style: {\n                            maxWidth: 600\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                            wrapperCol: {\n                                offset: 8,\n                                span: 16\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                placeholder: \"write todo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                        type: \"primary\",\n                        htmlType: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"list-none\",\n                children: [\n                    undoneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    id: \"task-\".concat(task.id),\n                                    type: \"checkbox\",\n                                    checked: task.done,\n                                    onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                    className: \"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    htmlFor: \"task-\".concat(task.id),\n                                    children: task.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, task.id, true, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined)),\n                    undoneTasks.length > 0 && doneTasks.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {\n                            className: \"my-4 border-t border-gray-300\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, undefined),\n                    doneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            className: \"mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    id: \"task-\".concat(task.id),\n                                    type: \"checkbox\",\n                                    checked: task.done,\n                                    onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                    className: \"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    htmlFor: \"task-\".concat(task.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"line-through\",\n                                        children: task.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, task.id, true, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"TPfqdII26Wy73iUtNU8X+Q4L5TU=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxDQUFDOUMsUUFBVUQscUJBQXFCQyxPQUFPd0IsS0FBS2xCLEVBQUU7b0NBQ3hEeUIsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDZjtvQ0FBTStCLFNBQVMsUUFBZ0IsT0FBUnZCLEtBQUtsQixFQUFFOzhDQUFLa0IsS0FBS3dCLEtBQUs7Ozs7Ozs7MkJBUnZDeEIsS0FBS2xCLEVBQUU7Ozs7O29CQVdqQmUsWUFBWTRCLE1BQU0sR0FBRyxLQUFLeEIsVUFBVXdCLE1BQU0sR0FBRyxtQkFDNUMsOERBQUNMO2tDQUNDLDRFQUFDTTs0QkFBR25CLFdBQVU7Ozs7Ozs7Ozs7O29CQUdqQk4sVUFBVWtCLEdBQUcsQ0FBQyxDQUFDbkIscUJBQ2QsOERBQUNvQjs0QkFBaUJiLFdBQVU7OzhDQUMxQiw4REFBQ2M7b0NBQ0N2QyxJQUFJLFFBQWdCLE9BQVJrQixLQUFLbEIsRUFBRTtvQ0FDbkJrQyxNQUFLO29DQUNMcEMsU0FBU29CLEtBQUtqQixJQUFJO29DQUNsQnVDLFVBQVUsQ0FBQzlDLFFBQVVELHFCQUFxQkMsT0FBT3dCLEtBQUtsQixFQUFFO29DQUN4RHlCLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ2Y7b0NBQU0rQixTQUFTLFFBQWdCLE9BQVJ2QixLQUFLbEIsRUFBRTs4Q0FDN0IsNEVBQUMyQjt3Q0FBS0YsV0FBVTtrREFBZ0JQLEtBQUt3QixLQUFLOzs7Ozs7Ozs7Ozs7MkJBVHJDeEIsS0FBS2xCLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFnQjFCO0dBNUdNaEI7O1FBQzZCSCxvREFBUUE7UUFFdkNELHVEQUFXQTtRQUNFTiw2REFBWWtCOzs7S0FKdkJSO0FBOEdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lbnUsIE1lbnVQcm9wcyB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBBcHBzdG9yZU91dGxpbmVkLCBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyB0YXNrIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IEFsbFRhc2tzUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICB0YXNrcyB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2dsZVRhc2tNdXRhdGlvbiA9IGdxbGBcbiAgbXV0YXRpb24gKCRpZDogSW50LCAkZG9uZTogQm9vbGVhbikge1xuICAgIHRvZ2dsZVRhc2tEb25lKGlkOiAkaWQsIGRvbmU6ICRkb25lKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShBbGxUYXNrc1F1ZXJ5KTtcbiAgY29uc3QgW3RvZ2dsZVRhc2tEb25lLCB7IGxvYWRpbmc6IHRvZ2dsaW5nLCBlcnJvcjogdG9nZ2xlRXJyb3IgfV0gPVxuICAgIHVzZU11dGF0aW9uKFRvZ2dsZVRhc2tNdXRhdGlvbik7XG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVRhc2tEb25lID0gYXN5bmMgKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICB0YXNrSWQ6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCBuZXdEb25lU3RhdHVzID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRvZ2dsZVRhc2tEb25lKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaWQ6IHRhc2tJZCxcbiAgICAgICAgICBkb25lOiBuZXdEb25lU3RhdHVzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0b2dnbGluZyB0YXNrXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBvbkNsaWNrVGFiOiBNZW51UHJvcHNbXCJvbkNsaWNrXCJdID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcbiAgfTtcblxuICBjb25zdCBpdGVtczogTWVudVByb3BzW1wiaXRlbXNcIl0gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiTmF2aWdhdGlvbiBPbmVcIixcbiAgICAgIGtleTogXCJtYWlsXCIsXG4gICAgICBpY29uOiA8TWFpbE91dGxpbmVkIC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiTmF2aWdhdGlvbiBUd29cIixcbiAgICAgIGtleTogXCJhcHBcIixcbiAgICAgIGljb246IDxBcHBzdG9yZU91dGxpbmVkIC8+LFxuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgXTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICBjb25zdCB1bmRvbmVUYXNrcyA9IFsuLi5kYXRhLnRhc2tzIV0uZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5kb25lKTtcbiAgY29uc3QgZG9uZVRhc2tzID0gWy4uLmRhdGEudGFza3MhXS5maWx0ZXIoKHRhc2spID0+IHRhc2suZG9uZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlNJTVBMRSBUQVNLIExJU1Q8L2gxPlxuICAgICAgPE1lbnVcbiAgICAgICAgb25DbGljaz17b25DbGlja1RhYn1cbiAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XG4gICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteS04XCI+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTYgfX1cbiAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogNjAwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Rm9ybS5JdGVtIHdyYXBwZXJDb2w9e3sgb2Zmc2V0OiA4LCBzcGFuOiAxNiB9fT5cbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIndyaXRlIHRvZG9cIiAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgQWRkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ub25lXCI+XG4gICAgICAgIHt1bmRvbmVUYXNrcy5tYXAoKHRhc2s6IHRhc2spID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD17YHRhc2stJHt0YXNrLmlkfWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2suZG9uZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlVGFza0RvbmUoZXZlbnQsIHRhc2suaWQpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS02MDAgZGFyazpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLTIgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2B0YXNrLSR7dGFzay5pZH1gfT57dGFzay50aXRsZX08L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICB7dW5kb25lVGFza3MubGVuZ3RoID4gMCAmJiBkb25lVGFza3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwXCIgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgICB7ZG9uZVRhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD17YHRhc2stJHt0YXNrLmlkfWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2suZG9uZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlVGFza0RvbmUoZXZlbnQsIHRhc2suaWQpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS02MDAgZGFyazpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLTIgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2B0YXNrLSR7dGFzay5pZH1gfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCI+e3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVudSIsIkFwcHN0b3JlT3V0bGluZWQiLCJNYWlsT3V0bGluZWQiLCJncWwiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiQWxsVGFza3NRdWVyeSIsIlRvZ2dsZVRhc2tNdXRhdGlvbiIsIkhvbWUiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidG9nZ2xlVGFza0RvbmUiLCJ0b2dnbGluZyIsInRvZ2dsZUVycm9yIiwiZm9ybSIsInVzZUZvcm0iLCJoYW5kbGVUb2dnbGVUYXNrRG9uZSIsImV2ZW50IiwidGFza0lkIiwibmV3RG9uZVN0YXR1cyIsInRhcmdldCIsImNoZWNrZWQiLCJ2YXJpYWJsZXMiLCJpZCIsImRvbmUiLCJjb25zb2xlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNsaWNrVGFiIiwiZSIsImxvZyIsImtleSIsIml0ZW1zIiwibGFiZWwiLCJpY29uIiwiZGlzYWJsZWQiLCJwIiwibWVzc2FnZSIsInVuZG9uZVRhc2tzIiwidGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwiZG9uZVRhc2tzIiwiaDEiLCJvbkNsaWNrIiwic2VsZWN0ZWRLZXlzIiwibW9kZSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJzdHlsZSIsIm1heFdpZHRoIiwiSXRlbSIsIm9mZnNldCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImh0bWxUeXBlIiwidWwiLCJtYXAiLCJsaSIsImlucHV0Iiwib25DaGFuZ2UiLCJodG1sRm9yIiwidGl0bGUiLCJsZW5ndGgiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});