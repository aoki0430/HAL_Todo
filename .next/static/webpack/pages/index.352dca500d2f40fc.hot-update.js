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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/checkbox */ \"./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/AppstoreOutlined */ \"./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MailOutlined */ \"./node_modules/@ant-design/icons/lib/icons/MailOutlined.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($id: Int, $done: Boolean) {\\n    toggleTaskDone(id: $id, done: $done) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nconst Home = ()=>{\n    _s();\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(AllTasksQuery);\n    const [toggleTaskDone, { loading: toggling, error: toggleError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ToggleTaskMutation);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm();\n    const handleToggleTaskDone = async (event, taskId)=>{\n        const newDoneStatus = event.target.checked;\n        try {\n            await toggleTaskDone({\n                variables: {\n                    id: taskId,\n                    done: newDoneStatus\n                }\n            });\n        } catch (error) {\n            console.error(\"Error toggling task\", error);\n        }\n    };\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"mail\");\n    const onClickTab = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    const items = [\n        {\n            label: \"All\",\n            key: \"mail\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined)\n        },\n        {\n            label: \"Today\",\n            key: \"app\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        }\n    ];\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 71,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 72,\n        columnNumber: 21\n    }, undefined);\n    const undoneTasks = [\n        ...data.tasks\n    ].filter((task)=>!task.done);\n    const doneTasks = [\n        ...data.tasks\n    ].filter((task)=>task.done);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"SIMPLE TASK LIST\"\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                onClick: onClickTab,\n                selectedKeys: [\n                    current\n                ],\n                mode: \"horizontal\",\n                items: items\n            }, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex my-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        labelCol: {\n                            span: 8\n                        },\n                        wrapperCol: {\n                            span: 16\n                        },\n                        style: {\n                            maxWidth: 600\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                            wrapperCol: {\n                                offset: 8,\n                                span: 16\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                placeholder: \"write todo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                        htmlType: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"list-none\",\n                children: [\n                    undoneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                children: task.title\n                            }, \"task-\".concat(task.id), false, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, undefined)\n                        }, task.id, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined)),\n                    undoneTasks.length > 0 && doneTasks.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {\n                            className: \"my-4 border-t border-gray-300\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, undefined),\n                    doneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            className: \"mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    id: \"task-\".concat(task.id),\n                                    type: \"checkbox\",\n                                    checked: task.done,\n                                    onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                    className: \"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    htmlFor: \"task-\".concat(task.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"line-through\",\n                                        children: task.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, task.id, true, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"TPfqdII26Wy73iUtNU8X+Q4L5TU=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFOzs7OzsyQkFIZmlCLEtBQUtqQixFQUFFOzs7OztvQkFTakJjLFlBQVl5QixNQUFNLEdBQUcsS0FBS3JCLFVBQVVxQixNQUFNLEdBQUcsbUJBQzVDLDhEQUFDSDtrQ0FDQyw0RUFBQ0k7NEJBQUdoQixXQUFVOzs7Ozs7Ozs7OztvQkFHakJOLFVBQVVpQixHQUFHLENBQUMsQ0FBQ2xCLHFCQUNkLDhEQUFDbUI7NEJBQWlCWixXQUFVOzs4Q0FDMUIsOERBQUNpQjtvQ0FDQ3pDLElBQUksUUFBZ0IsT0FBUmlCLEtBQUtqQixFQUFFO29DQUNuQjBDLE1BQUs7b0NBQ0w1QyxTQUFTbUIsS0FBS2hCLElBQUk7b0NBQ2xCb0MsVUFBVSxDQUFDM0MsUUFBVUQscUJBQXFCQyxPQUFPdUIsS0FBS2pCLEVBQUU7b0NBQ3hEd0IsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDZDtvQ0FBTWlDLFNBQVMsUUFBZ0IsT0FBUjFCLEtBQUtqQixFQUFFOzhDQUM3Qiw0RUFBQzBCO3dDQUFLRixXQUFVO2tEQUFnQlAsS0FBS3FCLEtBQUs7Ozs7Ozs7Ozs7OzsyQkFUckNyQixLQUFLakIsRUFBRTs7Ozs7Ozs7Ozs7OztBQWdCMUI7R0F2R01oQjs7UUFDNkJILG9EQUFRQTtRQUV2Q0QsdURBQVdBO1FBQ0VQLDZEQUFZbUI7OztLQUp2QlI7QUF5R04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVudSwgTWVudVByb3BzLCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBBcHBzdG9yZU91dGxpbmVkLCBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB0eXBlIHsgQ2hlY2tib3hDaGFuZ2VFdmVudCB9IGZyb20gXCJhbnRkL2VzL2NoZWNrYm94XCI7XG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdGFzayB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBBbGxUYXNrc1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdGFza3Mge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkb25lXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUb2dnbGVUYXNrTXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uICgkaWQ6IEludCwgJGRvbmU6IEJvb2xlYW4pIHtcbiAgICB0b2dnbGVUYXNrRG9uZShpZDogJGlkLCBkb25lOiAkZG9uZSkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkb25lXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoQWxsVGFza3NRdWVyeSk7XG4gIGNvbnN0IFt0b2dnbGVUYXNrRG9uZSwgeyBsb2FkaW5nOiB0b2dnbGluZywgZXJyb3I6IHRvZ2dsZUVycm9yIH1dID1cbiAgICB1c2VNdXRhdGlvbihUb2dnbGVUYXNrTXV0YXRpb24pO1xuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVUYXNrRG9uZSA9IGFzeW5jIChcbiAgICBldmVudDogQ2hlY2tib3hDaGFuZ2VFdmVudCxcbiAgICB0YXNrSWQ6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCBuZXdEb25lU3RhdHVzID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRvZ2dsZVRhc2tEb25lKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaWQ6IHRhc2tJZCxcbiAgICAgICAgICBkb25lOiBuZXdEb25lU3RhdHVzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0b2dnbGluZyB0YXNrXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBvbkNsaWNrVGFiOiBNZW51UHJvcHNbXCJvbkNsaWNrXCJdID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcbiAgfTtcblxuICBjb25zdCBpdGVtczogTWVudVByb3BzW1wiaXRlbXNcIl0gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiQWxsXCIsXG4gICAgICBrZXk6IFwibWFpbFwiLFxuICAgICAgaWNvbjogPE1haWxPdXRsaW5lZCAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlRvZGF5XCIsXG4gICAgICBrZXk6IFwiYXBwXCIsXG4gICAgICBpY29uOiA8QXBwc3RvcmVPdXRsaW5lZCAvPixcbiAgICB9LFxuICBdO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnN0IHVuZG9uZVRhc2tzID0gWy4uLmRhdGEudGFza3MhXS5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmRvbmUpO1xuICBjb25zdCBkb25lVGFza3MgPSBbLi4uZGF0YS50YXNrcyFdLmZpbHRlcigodGFzaykgPT4gdGFzay5kb25lKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+U0lNUExFIFRBU0sgTElTVDwvaDE+XG4gICAgICA8TWVudVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrVGFifVxuICAgICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cbiAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG15LThcIj5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNiB9fVxuICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiA2MDAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGb3JtLkl0ZW0gd3JhcHBlckNvbD17eyBvZmZzZXQ6IDgsIHNwYW46IDE2IH19PlxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwid3JpdGUgdG9kb1wiIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgIDwvRm9ybT5cblxuICAgICAgICA8QnV0dG9uIGh0bWxUeXBlPVwic3VibWl0XCI+QWRkPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cbiAgICAgICAge3VuZG9uZVRhc2tzLm1hcCgodGFzazogdGFzaykgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9PlxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZVRvZ2dsZVRhc2tEb25lKGV2ZW50LCB0YXNrLmlkKX1cbiAgICAgICAgICAgICAga2V5PXtgdGFzay0ke3Rhc2suaWR9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XG4gICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICB7dW5kb25lVGFza3MubGVuZ3RoID4gMCAmJiBkb25lVGFza3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwXCIgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgICB7ZG9uZVRhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD17YHRhc2stJHt0YXNrLmlkfWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2suZG9uZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlVGFza0RvbmUoZXZlbnQsIHRhc2suaWQpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS02MDAgZGFyazpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLTIgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2B0YXNrLSR7dGFzay5pZH1gfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCI+e3Rhc2sudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVudSIsIkNoZWNrYm94IiwiQXBwc3RvcmVPdXRsaW5lZCIsIk1haWxPdXRsaW5lZCIsImdxbCIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJBbGxUYXNrc1F1ZXJ5IiwiVG9nZ2xlVGFza011dGF0aW9uIiwiSG9tZSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ0b2dnbGVUYXNrRG9uZSIsInRvZ2dsaW5nIiwidG9nZ2xlRXJyb3IiLCJmb3JtIiwidXNlRm9ybSIsImhhbmRsZVRvZ2dsZVRhc2tEb25lIiwiZXZlbnQiLCJ0YXNrSWQiLCJuZXdEb25lU3RhdHVzIiwidGFyZ2V0IiwiY2hlY2tlZCIsInZhcmlhYmxlcyIsImlkIiwiZG9uZSIsImNvbnNvbGUiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIm9uQ2xpY2tUYWIiLCJlIiwibG9nIiwia2V5IiwiaXRlbXMiLCJsYWJlbCIsImljb24iLCJwIiwibWVzc2FnZSIsInVuZG9uZVRhc2tzIiwidGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwiZG9uZVRhc2tzIiwiaDEiLCJvbkNsaWNrIiwic2VsZWN0ZWRLZXlzIiwibW9kZSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJzdHlsZSIsIm1heFdpZHRoIiwiSXRlbSIsIm9mZnNldCIsInBsYWNlaG9sZGVyIiwiaHRtbFR5cGUiLCJ1bCIsIm1hcCIsImxpIiwib25DaGFuZ2UiLCJ0aXRsZSIsImxlbmd0aCIsImhyIiwiaW5wdXQiLCJ0eXBlIiwiaHRtbEZvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});