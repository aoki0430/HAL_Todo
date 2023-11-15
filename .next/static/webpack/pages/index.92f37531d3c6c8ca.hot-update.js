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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/checkbox */ \"./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/AppstoreOutlined */ \"./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MailOutlined */ \"./node_modules/@ant-design/icons/lib/icons/MailOutlined.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($id: Int, $done: Boolean) {\\n    toggleTaskDone(id: $id, done: $done) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($AddTaskInput: AddTaskInput) {\\n    addTask(input: $AddTaskInput) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nconst AddTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject2());\nconst Home = ()=>{\n    _s();\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(AllTasksQuery);\n    const [toggleTaskDone, { loading: toggling, error: toggleError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ToggleTaskMutation);\n    const [addTaskDone, { loading: adding, error: addingError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(AddTaskMutation);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm();\n    const handleToggleTaskDone = async (event, taskId)=>{\n        const newDoneStatus = event.target.checked;\n        try {\n            await toggleTaskDone({\n                variables: {\n                    id: taskId,\n                    done: newDoneStatus\n                }\n            });\n        } catch (error) {\n            console.error(\"Error toggling task\", error);\n        }\n    };\n    const onSubmitAddTask = async (title)=>{\n        try {\n            await addTaskDone({\n                variables: {\n                    input: {\n                        title: title\n                    }\n                }\n            });\n            form.resetFields();\n        } catch (error) {\n            console.error(\"Error adding task\", error);\n        }\n    };\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"mail\");\n    const onClickTab = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    const items = [\n        {\n            label: \"All\",\n            key: \"mail\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined)\n        },\n        {\n            label: \"Today\",\n            key: \"app\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined)\n        }\n    ];\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 98,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 99,\n        columnNumber: 21\n    }, undefined);\n    const undoneTasks = [\n        ...data.tasks\n    ].filter((task)=>!task.done);\n    const doneTasks = [\n        ...data.tasks\n    ].filter((task)=>task.done);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"ml-8 mt-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onClick: onClickTab,\n                    selectedKeys: [\n                        current\n                    ],\n                    mode: \"horizontal\",\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                labelCol: {\n                                    span: 48\n                                },\n                                wrapperCol: {\n                                    span: 48\n                                },\n                                style: {\n                                    maxWidth: 600\n                                },\n                                onSubmitCapture: (event)=>onSubmitAddTask(event.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            placeholder: \"write todo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        htmlType: \"submit\",\n                                        onSubmit: (event)=>onSubmitAddTask(event.target.value),\n                                        className: \"ml-2\",\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: \"list-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    orientation: \"left\",\n                                    plain: true,\n                                    orientationMargin: \"0\",\n                                    children: \"Todo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, undefined),\n                                undoneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                            checked: task.done,\n                                            children: task.title\n                                        }, \"task-\".concat(task.id), false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, task.id, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    orientation: \"left\",\n                                    plain: true,\n                                    orientationMargin: \"0\",\n                                    children: \"Completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 13\n                                }, undefined),\n                                doneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        className: \"mb-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                            checked: task.done,\n                                            className: \"line-through\",\n                                            children: task.title\n                                        }, \"task-\".concat(task.id), false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 159,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, task.id, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 158,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"XeSpCeUe2OsVh+R0ryEZ6i9QcmU=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQWdCOUI7R0F2SU1uQjs7UUFDNkJKLG9EQUFRQTtRQUV2Q0QsdURBQVdBO1FBRVhBLHVEQUFXQTtRQUNFUiw2REFBWXdCOzs7S0FOdkJYO0FBeUlOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVudSwgTWVudVByb3BzLCBDaGVja2JveCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBBcHBzdG9yZU91dGxpbmVkLCBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB0eXBlIHsgQ2hlY2tib3hDaGFuZ2VFdmVudCB9IGZyb20gXCJhbnRkL2VzL2NoZWNrYm94XCI7XG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdGFzayB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBBbGxUYXNrc1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdGFza3Mge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkb25lXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUb2dnbGVUYXNrTXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uICgkaWQ6IEludCwgJGRvbmU6IEJvb2xlYW4pIHtcbiAgICB0b2dnbGVUYXNrRG9uZShpZDogJGlkLCBkb25lOiAkZG9uZSkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkb25lXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBBZGRUYXNrTXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uICgkQWRkVGFza0lucHV0OiBBZGRUYXNrSW5wdXQpIHtcbiAgICBhZGRUYXNrKGlucHV0OiAkQWRkVGFza0lucHV0KSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShBbGxUYXNrc1F1ZXJ5KTtcbiAgY29uc3QgW3RvZ2dsZVRhc2tEb25lLCB7IGxvYWRpbmc6IHRvZ2dsaW5nLCBlcnJvcjogdG9nZ2xlRXJyb3IgfV0gPVxuICAgIHVzZU11dGF0aW9uKFRvZ2dsZVRhc2tNdXRhdGlvbik7XG4gIGNvbnN0IFthZGRUYXNrRG9uZSwgeyBsb2FkaW5nOiBhZGRpbmcsIGVycm9yOiBhZGRpbmdFcnJvciB9XSA9XG4gICAgdXNlTXV0YXRpb24oQWRkVGFza011dGF0aW9uKTtcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlVGFza0RvbmUgPSBhc3luYyAoXG4gICAgZXZlbnQ6IENoZWNrYm94Q2hhbmdlRXZlbnQsXG4gICAgdGFza0lkOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3RG9uZVN0YXR1cyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0b2dnbGVUYXNrRG9uZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlkOiB0YXNrSWQsXG4gICAgICAgICAgZG9uZTogbmV3RG9uZVN0YXR1cyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdG9nZ2xpbmcgdGFza1wiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0QWRkVGFzayA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFkZFRhc2tEb25lKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgdGFza1wiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwibWFpbFwiKTtcbiAgY29uc3Qgb25DbGlja1RhYjogTWVudVByb3BzW1wib25DbGlja1wiXSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG5cbiAgY29uc3QgaXRlbXM6IE1lbnVQcm9wc1tcIml0ZW1zXCJdID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkFsbFwiLFxuICAgICAga2V5OiBcIm1haWxcIixcbiAgICAgIGljb246IDxNYWlsT3V0bGluZWQgLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJUb2RheVwiLFxuICAgICAga2V5OiBcImFwcFwiLFxuICAgICAgaWNvbjogPEFwcHN0b3JlT3V0bGluZWQgLz4sXG4gICAgfSxcbiAgXTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICBjb25zdCB1bmRvbmVUYXNrcyA9IFsuLi5kYXRhLnRhc2tzIV0uZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5kb25lKTtcbiAgY29uc3QgZG9uZVRhc2tzID0gWy4uLmRhdGEudGFza3MhXS5maWx0ZXIoKHRhc2spID0+IHRhc2suZG9uZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC04IG10LThcIj5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrVGFifVxuICAgICAgICAgIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfVxuICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNDggfX1cbiAgICAgICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA0OCB9fVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogNjAwIH19XG4gICAgICAgICAgICAgIG9uU3VibWl0Q2FwdHVyZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIG9uU3VibWl0QWRkVGFzaygoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwid3JpdGUgdG9kb1wiIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdEFkZFRhc2soKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZVwiPlxuICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCIgcGxhaW4gb3JpZW50YXRpb25NYXJnaW49XCIwXCI+XG4gICAgICAgICAgICAgIFRvZG9cbiAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgIHt1bmRvbmVUYXNrcy5tYXAoKHRhc2s6IHRhc2spID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17dGFzay5pZH0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVUb2dnbGVUYXNrRG9uZShldmVudCwgdGFzay5pZCl9XG4gICAgICAgICAgICAgICAgICBrZXk9e2B0YXNrLSR7dGFzay5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGFzay5kb25lfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHsvKiB7dW5kb25lVGFza3MubGVuZ3RoID4gMCAmJiBkb25lVGFza3MubGVuZ3RoID4gMCAmJiAoICovfVxuICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCIgcGxhaW4gb3JpZW50YXRpb25NYXJnaW49XCIwXCI+XG4gICAgICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgICAgey8qICl9ICovfVxuICAgICAgICAgICAge2RvbmVUYXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlVGFza0RvbmUoZXZlbnQsIHRhc2suaWQpfVxuICAgICAgICAgICAgICAgICAga2V5PXtgdGFzay0ke3Rhc2suaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2suZG9uZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmUtdGhyb3VnaFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVudSIsIkNoZWNrYm94IiwiRGl2aWRlciIsIkFwcHN0b3JlT3V0bGluZWQiLCJNYWlsT3V0bGluZWQiLCJncWwiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiQWxsVGFza3NRdWVyeSIsIlRvZ2dsZVRhc2tNdXRhdGlvbiIsIkFkZFRhc2tNdXRhdGlvbiIsIkhvbWUiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidG9nZ2xlVGFza0RvbmUiLCJ0b2dnbGluZyIsInRvZ2dsZUVycm9yIiwiYWRkVGFza0RvbmUiLCJhZGRpbmciLCJhZGRpbmdFcnJvciIsImZvcm0iLCJ1c2VGb3JtIiwiaGFuZGxlVG9nZ2xlVGFza0RvbmUiLCJldmVudCIsInRhc2tJZCIsIm5ld0RvbmVTdGF0dXMiLCJ0YXJnZXQiLCJjaGVja2VkIiwidmFyaWFibGVzIiwiaWQiLCJkb25lIiwiY29uc29sZSIsIm9uU3VibWl0QWRkVGFzayIsInRpdGxlIiwiaW5wdXQiLCJyZXNldEZpZWxkcyIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwib25DbGlja1RhYiIsImUiLCJsb2ciLCJrZXkiLCJpdGVtcyIsImxhYmVsIiwiaWNvbiIsInAiLCJtZXNzYWdlIiwidW5kb25lVGFza3MiLCJ0YXNrcyIsImZpbHRlciIsInRhc2siLCJkb25lVGFza3MiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2VsZWN0ZWRLZXlzIiwibW9kZSIsImxhYmVsQ29sIiwic3BhbiIsIndyYXBwZXJDb2wiLCJzdHlsZSIsIm1heFdpZHRoIiwib25TdWJtaXRDYXB0dXJlIiwidmFsdWUiLCJJdGVtIiwicGxhY2Vob2xkZXIiLCJodG1sVHlwZSIsIm9uU3VibWl0IiwidWwiLCJvcmllbnRhdGlvbiIsInBsYWluIiwib3JpZW50YXRpb25NYXJnaW4iLCJtYXAiLCJsaSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});