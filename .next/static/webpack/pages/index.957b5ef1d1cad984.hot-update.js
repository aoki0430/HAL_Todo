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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/checkbox */ \"./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/AppstoreOutlined */ \"./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MailOutlined */ \"./node_modules/@ant-design/icons/lib/icons/MailOutlined.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($id: Int, $done: Boolean) {\\n    toggleTaskDone(id: $id, done: $done) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($AddTaskInput: AddTaskInput) {\\n    addTask(input: $AddTaskInput) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nconst AddTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject2());\nconst Home = ()=>{\n    _s();\n    const { data, loading, error } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(AllTasksQuery);\n    const [toggleTaskDone, { loading: toggling, error: toggleError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ToggleTaskMutation);\n    const [addTaskDone, { loading: adding, error: addingError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(AddTaskMutation);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm();\n    const handleToggleTaskDone = async (event, taskId)=>{\n        const newDoneStatus = event.target.checked;\n        try {\n            await toggleTaskDone({\n                variables: {\n                    id: taskId,\n                    done: newDoneStatus\n                }\n            });\n        } catch (error) {\n            console.error(\"Error toggling task\", error);\n        }\n    };\n    const onSubmitAddTask = async (title)=>{\n        try {\n            await addTaskDone({\n                variables: {\n                    AddTaskInput: {\n                        title: title\n                    }\n                }\n            });\n            form.resetFields();\n        } catch (error) {\n            console.error(\"Error adding task\", error);\n        }\n    };\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"mail\");\n    const onClickTab = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    const items = [\n        {\n            label: \"All\",\n            key: \"mail\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined)\n        },\n        {\n            label: \"Today\",\n            key: \"app\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined)\n        }\n    ];\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 98,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 99,\n        columnNumber: 21\n    }, undefined);\n    const undoneTasks = [\n        ...data.tasks\n    ].filter((task)=>!task.done);\n    const doneTasks = [\n        ...data.tasks\n    ].filter((task)=>task.done);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"ml-8 mt-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onClick: onClickTab,\n                    selectedKeys: [\n                        current\n                    ],\n                    mode: \"horizontal\",\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                labelCol: {\n                                    span: 48\n                                },\n                                wrapperCol: {\n                                    span: 48\n                                },\n                                style: {\n                                    maxWidth: 600\n                                },\n                                onSubmitCapture: (event)=>onSubmitAddTask(event.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            placeholder: \"write todo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        htmlType: \"submit\",\n                                        onSubmit: (event)=>onSubmitAddTask(event.target.value),\n                                        className: \"ml-2\",\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: \"list-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    orientation: \"left\",\n                                    plain: true,\n                                    orientationMargin: \"0\",\n                                    children: \"Todo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, undefined),\n                                undoneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                            checked: task.done,\n                                            children: task.title\n                                        }, \"task-\".concat(task.id), false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, task.id, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    orientation: \"left\",\n                                    plain: true,\n                                    orientationMargin: \"0\",\n                                    children: \"Completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 13\n                                }, undefined),\n                                doneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        className: \"mb-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                            checked: task.done,\n                                            className: \"line-through\",\n                                            children: task.title\n                                        }, \"task-\".concat(task.id), false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 159,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, task.id, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 158,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"XeSpCeUe2OsVh+R0ryEZ6i9QcmU=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQWdCOUI7R0F2SU1uQjs7UUFDNkJKLG9EQUFRQTtRQUV2Q0QsdURBQVdBO1FBRVhBLHVEQUFXQTtRQUNFUiw2REFBWXdCOzs7S0FOdkJYO0FBeUlOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVudSwgTWVudVByb3BzLCBDaGVja2JveCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBBcHBzdG9yZU91dGxpbmVkLCBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB0eXBlIHsgQ2hlY2tib3hDaGFuZ2VFdmVudCB9IGZyb20gXCJhbnRkL2VzL2NoZWNrYm94XCI7XG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdGFzayB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBBbGxUYXNrc1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdGFza3Mge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkb25lXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUb2dnbGVUYXNrTXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uICgkaWQ6IEludCwgJGRvbmU6IEJvb2xlYW4pIHtcbiAgICB0b2dnbGVUYXNrRG9uZShpZDogJGlkLCBkb25lOiAkZG9uZSkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkb25lXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBBZGRUYXNrTXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uICgkQWRkVGFza0lucHV0OiBBZGRUYXNrSW5wdXQpIHtcbiAgICBhZGRUYXNrKGlucHV0OiAkQWRkVGFza0lucHV0KSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShBbGxUYXNrc1F1ZXJ5KTtcbiAgY29uc3QgW3RvZ2dsZVRhc2tEb25lLCB7IGxvYWRpbmc6IHRvZ2dsaW5nLCBlcnJvcjogdG9nZ2xlRXJyb3IgfV0gPVxuICAgIHVzZU11dGF0aW9uKFRvZ2dsZVRhc2tNdXRhdGlvbik7XG4gIGNvbnN0IFthZGRUYXNrRG9uZSwgeyBsb2FkaW5nOiBhZGRpbmcsIGVycm9yOiBhZGRpbmdFcnJvciB9XSA9XG4gICAgdXNlTXV0YXRpb24oQWRkVGFza011dGF0aW9uKTtcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlVGFza0RvbmUgPSBhc3luYyAoXG4gICAgZXZlbnQ6IENoZWNrYm94Q2hhbmdlRXZlbnQsXG4gICAgdGFza0lkOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3RG9uZVN0YXR1cyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0b2dnbGVUYXNrRG9uZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlkOiB0YXNrSWQsXG4gICAgICAgICAgZG9uZTogbmV3RG9uZVN0YXR1cyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdG9nZ2xpbmcgdGFza1wiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0QWRkVGFzayA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFkZFRhc2tEb25lKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgQWRkVGFza0lucHV0OiB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHRhc2tcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIm1haWxcIik7XG4gIGNvbnN0IG9uQ2xpY2tUYWI6IE1lbnVQcm9wc1tcIm9uQ2xpY2tcIl0gPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgXCIsIGUpO1xuICAgIHNldEN1cnJlbnQoZS5rZXkpO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW1zOiBNZW51UHJvcHNbXCJpdGVtc1wiXSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJBbGxcIixcbiAgICAgIGtleTogXCJtYWlsXCIsXG4gICAgICBpY29uOiA8TWFpbE91dGxpbmVkIC8+LFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiVG9kYXlcIixcbiAgICAgIGtleTogXCJhcHBcIixcbiAgICAgIGljb246IDxBcHBzdG9yZU91dGxpbmVkIC8+LFxuICAgIH0sXG4gIF07XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG5cbiAgY29uc3QgdW5kb25lVGFza3MgPSBbLi4uZGF0YS50YXNrcyFdLmZpbHRlcigodGFzaykgPT4gIXRhc2suZG9uZSk7XG4gIGNvbnN0IGRvbmVUYXNrcyA9IFsuLi5kYXRhLnRhc2tzIV0uZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmRvbmUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtOCBtdC04XCI+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgb25DbGljaz17b25DbGlja1RhYn1cbiAgICAgICAgICBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX1cbiAgICAgICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDQ4IH19XG4gICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogNDggfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDYwMCB9fVxuICAgICAgICAgICAgICBvblN1Ym1pdENhcHR1cmU9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICBvblN1Ym1pdEFkZFRhc2soKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIndyaXRlIHRvZG9cIiAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgb25TdWJtaXRBZGRUYXNrKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmVcIj5cbiAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiIHBsYWluIG9yaWVudGF0aW9uTWFyZ2luPVwiMFwiPlxuICAgICAgICAgICAgICBUb2RvXG4gICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICB7dW5kb25lVGFza3MubWFwKCh0YXNrOiB0YXNrKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlVGFza0RvbmUoZXZlbnQsIHRhc2suaWQpfVxuICAgICAgICAgICAgICAgICAga2V5PXtgdGFzay0ke3Rhc2suaWR9YH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rhc2suZG9uZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7Lyoge3VuZG9uZVRhc2tzLmxlbmd0aCA+IDAgJiYgZG9uZVRhc2tzLmxlbmd0aCA+IDAgJiYgKCAqL31cbiAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiIHBsYWluIG9yaWVudGF0aW9uTWFyZ2luPVwiMFwiPlxuICAgICAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgIHsvKiApfSAqL31cbiAgICAgICAgICAgIHtkb25lVGFza3MubWFwKCh0YXNrKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZVRvZ2dsZVRhc2tEb25lKGV2ZW50LCB0YXNrLmlkKX1cbiAgICAgICAgICAgICAgICAgIGtleT17YHRhc2stJHt0YXNrLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLmRvbmV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lLXRocm91Z2hcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lbnUiLCJDaGVja2JveCIsIkRpdmlkZXIiLCJBcHBzdG9yZU91dGxpbmVkIiwiTWFpbE91dGxpbmVkIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsIkFsbFRhc2tzUXVlcnkiLCJUb2dnbGVUYXNrTXV0YXRpb24iLCJBZGRUYXNrTXV0YXRpb24iLCJIb21lIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInRvZ2dsZVRhc2tEb25lIiwidG9nZ2xpbmciLCJ0b2dnbGVFcnJvciIsImFkZFRhc2tEb25lIiwiYWRkaW5nIiwiYWRkaW5nRXJyb3IiLCJmb3JtIiwidXNlRm9ybSIsImhhbmRsZVRvZ2dsZVRhc2tEb25lIiwiZXZlbnQiLCJ0YXNrSWQiLCJuZXdEb25lU3RhdHVzIiwidGFyZ2V0IiwiY2hlY2tlZCIsInZhcmlhYmxlcyIsImlkIiwiZG9uZSIsImNvbnNvbGUiLCJvblN1Ym1pdEFkZFRhc2siLCJ0aXRsZSIsIkFkZFRhc2tJbnB1dCIsInJlc2V0RmllbGRzIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNsaWNrVGFiIiwiZSIsImxvZyIsImtleSIsIml0ZW1zIiwibGFiZWwiLCJpY29uIiwicCIsIm1lc3NhZ2UiLCJ1bmRvbmVUYXNrcyIsInRhc2tzIiwiZmlsdGVyIiwidGFzayIsImRvbmVUYXNrcyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzZWxlY3RlZEtleXMiLCJtb2RlIiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsInN0eWxlIiwibWF4V2lkdGgiLCJvblN1Ym1pdENhcHR1cmUiLCJ2YWx1ZSIsIkl0ZW0iLCJwbGFjZWhvbGRlciIsImh0bWxUeXBlIiwib25TdWJtaXQiLCJ1bCIsIm9yaWVudGF0aW9uIiwicGxhaW4iLCJvcmllbnRhdGlvbk1hcmdpbiIsIm1hcCIsImxpIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});