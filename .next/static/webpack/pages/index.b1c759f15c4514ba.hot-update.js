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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/checkbox */ \"./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/AppstoreOutlined */ \"./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MailOutlined */ \"./node_modules/@ant-design/icons/lib/icons/MailOutlined.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($id: Int, $done: Boolean) {\\n    toggleTaskDone(id: $id, done: $done) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation (input : {$title: String! }) {\\n    addTask(input: { title: $title }) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nconst AddTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject2());\nconst Home = ()=>{\n    _s();\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(AllTasksQuery);\n    const [toggleTaskDone, { loading: toggling, error: toggleError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ToggleTaskMutation);\n    const [addTaskDone, { loading: adding, error: addingError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(AddTaskMutation);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm();\n    const handleToggleTaskDone = async (event, taskId)=>{\n        const newDoneStatus = event.target.checked;\n        try {\n            await toggleTaskDone({\n                variables: {\n                    id: taskId,\n                    done: newDoneStatus\n                }\n            });\n        } catch (error) {\n            console.error(\"Error toggling task\", error);\n        }\n    };\n    const onSubmitAddTask = async (title)=>{\n        try {\n            console.log(title);\n            await addTaskDone({\n                variables: {\n                    input: {\n                        title: title\n                    }\n                }\n            });\n            form.resetFields();\n        } catch (error) {\n            console.error(\"Error adding task\", error);\n        }\n    };\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"mail\");\n    const onClickTab = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    const items = [\n        {\n            label: \"All\",\n            key: \"mail\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined)\n        },\n        {\n            label: \"Today\",\n            key: \"app\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined)\n        }\n    ];\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 99,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 100,\n        columnNumber: 21\n    }, undefined);\n    const undoneTasks = [\n        ...data.tasks\n    ].filter((task)=>!task.done);\n    const doneTasks = [\n        ...data.tasks\n    ].filter((task)=>task.done);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"ml-8 mt-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onClick: onClickTab,\n                    selectedKeys: [\n                        current\n                    ],\n                    mode: \"horizontal\",\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                labelCol: {\n                                    span: 48\n                                },\n                                wrapperCol: {\n                                    span: 48\n                                },\n                                style: {\n                                    maxWidth: 600\n                                },\n                                onSubmitCapture: (event)=>{\n                                    event.preventDefault();\n                                    const title = event.currentTarget[0].value;\n                                    onSubmitAddTask(title);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            placeholder: \"write todo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        htmlType: \"submit\",\n                                        className: \"ml-2\",\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: \"list-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    orientation: \"left\",\n                                    plain: true,\n                                    orientationMargin: \"0\",\n                                    children: \"Todo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 13\n                                }, undefined),\n                                undoneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                            checked: task.done,\n                                            children: task.title\n                                        }, \"task-\".concat(task.id), false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 141,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, task.id, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    orientation: \"left\",\n                                    plain: true,\n                                    orientationMargin: \"0\",\n                                    children: \"Completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 151,\n                                    columnNumber: 13\n                                }, undefined),\n                                doneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        className: \"mb-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                            checked: task.done,\n                                            className: \"line-through\",\n                                            children: task.title\n                                        }, \"task-\".concat(task.id), false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 157,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, task.id, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 156,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n            lineNumber: 107,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"XeSpCeUe2OsVh+R0ryEZ6i9QcmU=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLckIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0I5QjtHQXJJTW5COztRQUM2Qkosb0RBQVFBO1FBRXZDRCx1REFBV0E7UUFFWEEsdURBQVdBO1FBQ0VSLDZEQUFZd0I7OztLQU52Qlg7QUF1SU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNZW51LCBNZW51UHJvcHMsIENoZWNrYm94LCBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEFwcHN0b3JlT3V0bGluZWQsIE1haWxPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHR5cGUgeyBDaGVja2JveENoYW5nZUV2ZW50IH0gZnJvbSBcImFudGQvZXMvY2hlY2tib3hcIjtcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyB0YXNrIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IEFsbFRhc2tzUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICB0YXNrcyB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFRvZ2dsZVRhc2tNdXRhdGlvbiA9IGdxbGBcbiAgbXV0YXRpb24gKCRpZDogSW50LCAkZG9uZTogQm9vbGVhbikge1xuICAgIHRvZ2dsZVRhc2tEb25lKGlkOiAkaWQsIGRvbmU6ICRkb25lKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEFkZFRhc2tNdXRhdGlvbiA9IGdxbGBcbiAgbXV0YXRpb24gKGlucHV0IDogeyR0aXRsZTogU3RyaW5nISB9KSB7XG4gICAgYWRkVGFzayhpbnB1dDogeyB0aXRsZTogJHRpdGxlIH0pIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZG9uZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEFsbFRhc2tzUXVlcnkpO1xuICBjb25zdCBbdG9nZ2xlVGFza0RvbmUsIHsgbG9hZGluZzogdG9nZ2xpbmcsIGVycm9yOiB0b2dnbGVFcnJvciB9XSA9XG4gICAgdXNlTXV0YXRpb24oVG9nZ2xlVGFza011dGF0aW9uKTtcbiAgY29uc3QgW2FkZFRhc2tEb25lLCB7IGxvYWRpbmc6IGFkZGluZywgZXJyb3I6IGFkZGluZ0Vycm9yIH1dID1cbiAgICB1c2VNdXRhdGlvbihBZGRUYXNrTXV0YXRpb24pO1xuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVUYXNrRG9uZSA9IGFzeW5jIChcbiAgICBldmVudDogQ2hlY2tib3hDaGFuZ2VFdmVudCxcbiAgICB0YXNrSWQ6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCBuZXdEb25lU3RhdHVzID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRvZ2dsZVRhc2tEb25lKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaWQ6IHRhc2tJZCxcbiAgICAgICAgICBkb25lOiBuZXdEb25lU3RhdHVzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0b2dnbGluZyB0YXNrXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25TdWJtaXRBZGRUYXNrID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgYXdhaXQgYWRkVGFza0RvbmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyB0YXNrXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBvbkNsaWNrVGFiOiBNZW51UHJvcHNbXCJvbkNsaWNrXCJdID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcbiAgfTtcblxuICBjb25zdCBpdGVtczogTWVudVByb3BzW1wiaXRlbXNcIl0gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiQWxsXCIsXG4gICAgICBrZXk6IFwibWFpbFwiLFxuICAgICAgaWNvbjogPE1haWxPdXRsaW5lZCAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlRvZGF5XCIsXG4gICAgICBrZXk6IFwiYXBwXCIsXG4gICAgICBpY29uOiA8QXBwc3RvcmVPdXRsaW5lZCAvPixcbiAgICB9LFxuICBdO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnN0IHVuZG9uZVRhc2tzID0gWy4uLmRhdGEudGFza3MhXS5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmRvbmUpO1xuICBjb25zdCBkb25lVGFza3MgPSBbLi4uZGF0YS50YXNrcyFdLmZpbHRlcigodGFzaykgPT4gdGFzay5kb25lKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTggbXQtOFwiPlxuICAgICAgICA8TWVudVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tUYWJ9XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XG4gICAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA0OCB9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDQ4IH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiA2MDAgfX1cbiAgICAgICAgICAgICAgb25TdWJtaXRDYXB0dXJlPXsoZXZlbnQ6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IChldmVudC5jdXJyZW50VGFyZ2V0WzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAudmFsdWU7XG4gICAgICAgICAgICAgICAgb25TdWJtaXRBZGRUYXNrKHRpdGxlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJ3cml0ZSB0b2RvXCIgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cbiAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiIHBsYWluIG9yaWVudGF0aW9uTWFyZ2luPVwiMFwiPlxuICAgICAgICAgICAgICBUb2RvXG4gICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICB7dW5kb25lVGFza3MubWFwKCh0YXNrOiB0YXNrKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlVGFza0RvbmUoZXZlbnQsIHRhc2suaWQpfVxuICAgICAgICAgICAgICAgICAga2V5PXtgdGFzay0ke3Rhc2suaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2suZG9uZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7Lyoge3VuZG9uZVRhc2tzLmxlbmd0aCA+IDAgJiYgZG9uZVRhc2tzLmxlbmd0aCA+IDAgJiYgKCAqL31cbiAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiIHBsYWluIG9yaWVudGF0aW9uTWFyZ2luPVwiMFwiPlxuICAgICAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgIHsvKiApfSAqL31cbiAgICAgICAgICAgIHtkb25lVGFza3MubWFwKCh0YXNrKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZVRvZ2dsZVRhc2tEb25lKGV2ZW50LCB0YXNrLmlkKX1cbiAgICAgICAgICAgICAgICAgIGtleT17YHRhc2stJHt0YXNrLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLmRvbmV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lLXRocm91Z2hcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lbnUiLCJDaGVja2JveCIsIkRpdmlkZXIiLCJBcHBzdG9yZU91dGxpbmVkIiwiTWFpbE91dGxpbmVkIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsIkFsbFRhc2tzUXVlcnkiLCJUb2dnbGVUYXNrTXV0YXRpb24iLCJBZGRUYXNrTXV0YXRpb24iLCJIb21lIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInRvZ2dsZVRhc2tEb25lIiwidG9nZ2xpbmciLCJ0b2dnbGVFcnJvciIsImFkZFRhc2tEb25lIiwiYWRkaW5nIiwiYWRkaW5nRXJyb3IiLCJmb3JtIiwidXNlRm9ybSIsImhhbmRsZVRvZ2dsZVRhc2tEb25lIiwiZXZlbnQiLCJ0YXNrSWQiLCJuZXdEb25lU3RhdHVzIiwidGFyZ2V0IiwiY2hlY2tlZCIsInZhcmlhYmxlcyIsImlkIiwiZG9uZSIsImNvbnNvbGUiLCJvblN1Ym1pdEFkZFRhc2siLCJ0aXRsZSIsImxvZyIsImlucHV0IiwicmVzZXRGaWVsZHMiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIm9uQ2xpY2tUYWIiLCJlIiwia2V5IiwiaXRlbXMiLCJsYWJlbCIsImljb24iLCJwIiwibWVzc2FnZSIsInVuZG9uZVRhc2tzIiwidGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwiZG9uZVRhc2tzIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNlbGVjdGVkS2V5cyIsIm1vZGUiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwic3R5bGUiLCJtYXhXaWR0aCIsIm9uU3VibWl0Q2FwdHVyZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiSXRlbSIsInBsYWNlaG9sZGVyIiwiaHRtbFR5cGUiLCJ1bCIsIm9yaWVudGF0aW9uIiwicGxhaW4iLCJvcmllbnRhdGlvbk1hcmdpbiIsIm1hcCIsImxpIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});