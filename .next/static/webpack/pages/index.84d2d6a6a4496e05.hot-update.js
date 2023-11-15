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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/checkbox */ \"./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/AppstoreOutlined */ \"./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MailOutlined */ \"./node_modules/@ant-design/icons/lib/icons/MailOutlined.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($id: Int, $done: Boolean) {\\n    toggleTaskDone(id: $id, done: $done) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($input: AddTaskInput!) {\\n    addTask(input: $input) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nconst AddTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject2());\nconst Home = ()=>{\n    _s();\n    const { data, loading, error, refetch } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(AllTasksQuery);\n    const [toggleTaskDone, { loading: toggling, error: toggleError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ToggleTaskMutation);\n    const [addTaskDone, { loading: adding, error: addingError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(AddTaskMutation);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm();\n    const handleToggleTaskDone = async (event, taskId)=>{\n        const newDoneStatus = event.target.checked;\n        try {\n            await toggleTaskDone({\n                variables: {\n                    id: taskId,\n                    done: newDoneStatus\n                }\n            });\n        } catch (error) {\n            console.error(\"Error toggling task\", error);\n        }\n    };\n    const onSubmitAddTask = async (title)=>{\n        try {\n            console.log(title);\n            await addTaskDone({\n                variables: {\n                    input: {\n                        title: title\n                    }\n                }\n            });\n            form.resetFields();\n            refetch();\n        } catch (error) {\n            console.error(\"Error adding task\", error);\n        }\n    };\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"mail\");\n    const onClickTab = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    const items = [\n        {\n            label: \"All\",\n            key: \"mail\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined)\n        },\n        {\n            label: \"Today\",\n            key: \"app\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, undefined)\n        }\n    ];\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 100,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 101,\n        columnNumber: 21\n    }, undefined);\n    const undoneTasks = [\n        ...data.tasks\n    ].filter((task)=>!task.done);\n    const doneTasks = [\n        ...data.tasks\n    ].filter((task)=>task.done);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"mx-16 mt-8 flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onClick: onClickTab,\n                    selectedKeys: [\n                        current\n                    ],\n                    mode: \"horizontal\",\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    form: form,\n                    className: \"my-8flex flex-grow w-full\",\n                    onSubmitCapture: (event)=>{\n                        event.preventDefault();\n                        const title = event.currentTarget[0].value;\n                        onSubmitAddTask(title);\n                        form.resetFields();\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                            name: \"taskTitle\",\n                            className: \"flex-glow\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                placeholder: \"write todo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                            htmlType: \"submit\",\n                            className: \"ml-2\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    className: \"list-none\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            orientation: \"left\",\n                            plain: true,\n                            orientationMargin: \"0\",\n                            children: \"Todo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined),\n                        undoneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                    checked: task.done,\n                                    children: task.title\n                                }, \"task-\".concat(task.id), false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, task.id, false, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            orientation: \"left\",\n                            plain: true,\n                            orientationMargin: \"0\",\n                            children: \"Completed\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 148,\n                            columnNumber: 11\n                        }, undefined),\n                        doneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                className: \"mb-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                    checked: task.done,\n                                    className: \"line-through\",\n                                    children: task.title\n                                }, \"task-\".concat(task.id), false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, task.id, false, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"uAbK35CLAbp4L3Fr46otmDaVFZw=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aERELHVEQUFXQTtRQUVYQSx1REFBV0E7UUFDRVIsNkRBQVl5Qjs7O0tBTnZCWjtBQW1JTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lbnUsIE1lbnVQcm9wcywgQ2hlY2tib3gsIERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCwgTWFpbE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgdHlwZSB7IENoZWNrYm94Q2hhbmdlRXZlbnQgfSBmcm9tIFwiYW50ZC9lcy9jaGVja2JveFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHRhc2sgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgQWxsVGFza3NRdWVyeSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHRhc2tzIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZG9uZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVG9nZ2xlVGFza011dGF0aW9uID0gZ3FsYFxuICBtdXRhdGlvbiAoJGlkOiBJbnQsICRkb25lOiBCb29sZWFuKSB7XG4gICAgdG9nZ2xlVGFza0RvbmUoaWQ6ICRpZCwgZG9uZTogJGRvbmUpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZG9uZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQWRkVGFza011dGF0aW9uID0gZ3FsYFxuICBtdXRhdGlvbiAoJGlucHV0OiBBZGRUYXNrSW5wdXQhKSB7XG4gICAgYWRkVGFzayhpbnB1dDogJGlucHV0KSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGRvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yLCByZWZldGNoIH0gPSB1c2VRdWVyeShBbGxUYXNrc1F1ZXJ5KTtcbiAgY29uc3QgW3RvZ2dsZVRhc2tEb25lLCB7IGxvYWRpbmc6IHRvZ2dsaW5nLCBlcnJvcjogdG9nZ2xlRXJyb3IgfV0gPVxuICAgIHVzZU11dGF0aW9uKFRvZ2dsZVRhc2tNdXRhdGlvbik7XG4gIGNvbnN0IFthZGRUYXNrRG9uZSwgeyBsb2FkaW5nOiBhZGRpbmcsIGVycm9yOiBhZGRpbmdFcnJvciB9XSA9XG4gICAgdXNlTXV0YXRpb24oQWRkVGFza011dGF0aW9uKTtcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlVGFza0RvbmUgPSBhc3luYyAoXG4gICAgZXZlbnQ6IENoZWNrYm94Q2hhbmdlRXZlbnQsXG4gICAgdGFza0lkOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3RG9uZVN0YXR1cyA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0b2dnbGVUYXNrRG9uZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlkOiB0YXNrSWQsXG4gICAgICAgICAgZG9uZTogbmV3RG9uZVN0YXR1cyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdG9nZ2xpbmcgdGFza1wiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0QWRkVGFzayA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICAgIGF3YWl0IGFkZFRhc2tEb25lKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICByZWZldGNoKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgdGFza1wiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwibWFpbFwiKTtcbiAgY29uc3Qgb25DbGlja1RhYjogTWVudVByb3BzW1wib25DbGlja1wiXSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG5cbiAgY29uc3QgaXRlbXM6IE1lbnVQcm9wc1tcIml0ZW1zXCJdID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkFsbFwiLFxuICAgICAga2V5OiBcIm1haWxcIixcbiAgICAgIGljb246IDxNYWlsT3V0bGluZWQgLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJUb2RheVwiLFxuICAgICAga2V5OiBcImFwcFwiLFxuICAgICAgaWNvbjogPEFwcHN0b3JlT3V0bGluZWQgLz4sXG4gICAgfSxcbiAgXTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICBjb25zdCB1bmRvbmVUYXNrcyA9IFsuLi5kYXRhLnRhc2tzIV0uZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5kb25lKTtcbiAgY29uc3QgZG9uZVRhc2tzID0gWy4uLmRhdGEudGFza3MhXS5maWx0ZXIoKHRhc2spID0+IHRhc2suZG9uZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0xNiBtdC04IGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrVGFifVxuICAgICAgICAgIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfVxuICAgICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJteS04ZmxleCBmbGV4LWdyb3cgdy1mdWxsXCJcbiAgICAgICAgICBvblN1Ym1pdENhcHR1cmU9eyhldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IChldmVudC5jdXJyZW50VGFyZ2V0WzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICAgICAgb25TdWJtaXRBZGRUYXNrKHRpdGxlKTtcbiAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidGFza1RpdGxlXCIgY2xhc3NOYW1lPVwiZmxleC1nbG93XCI+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJ3cml0ZSB0b2RvXCIgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZVwiPlxuICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiIHBsYWluIG9yaWVudGF0aW9uTWFyZ2luPVwiMFwiPlxuICAgICAgICAgICAgVG9kb1xuICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICB7dW5kb25lVGFza3MubWFwKCh0YXNrOiB0YXNrKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfT5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlVGFza0RvbmUoZXZlbnQsIHRhc2suaWQpfVxuICAgICAgICAgICAgICAgIGtleT17YHRhc2stJHt0YXNrLmlkfWB9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGFzay5kb25lfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHsvKiB7dW5kb25lVGFza3MubGVuZ3RoID4gMCAmJiBkb25lVGFza3MubGVuZ3RoID4gMCAmJiAoICovfVxuICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiIHBsYWluIG9yaWVudGF0aW9uTWFyZ2luPVwiMFwiPlxuICAgICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgIHsvKiApfSAqL31cbiAgICAgICAgICB7ZG9uZVRhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVUb2dnbGVUYXNrRG9uZShldmVudCwgdGFzay5pZCl9XG4gICAgICAgICAgICAgICAga2V5PXtgdGFzay0ke3Rhc2suaWR9YH1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLmRvbmV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lbnUiLCJDaGVja2JveCIsIkRpdmlkZXIiLCJBcHBzdG9yZU91dGxpbmVkIiwiTWFpbE91dGxpbmVkIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsIkFsbFRhc2tzUXVlcnkiLCJUb2dnbGVUYXNrTXV0YXRpb24iLCJBZGRUYXNrTXV0YXRpb24iLCJIb21lIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJ0b2dnbGVUYXNrRG9uZSIsInRvZ2dsaW5nIiwidG9nZ2xlRXJyb3IiLCJhZGRUYXNrRG9uZSIsImFkZGluZyIsImFkZGluZ0Vycm9yIiwiZm9ybSIsInVzZUZvcm0iLCJoYW5kbGVUb2dnbGVUYXNrRG9uZSIsImV2ZW50IiwidGFza0lkIiwibmV3RG9uZVN0YXR1cyIsInRhcmdldCIsImNoZWNrZWQiLCJ2YXJpYWJsZXMiLCJpZCIsImRvbmUiLCJjb25zb2xlIiwib25TdWJtaXRBZGRUYXNrIiwidGl0bGUiLCJsb2ciLCJpbnB1dCIsInJlc2V0RmllbGRzIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNsaWNrVGFiIiwiZSIsImtleSIsIml0ZW1zIiwibGFiZWwiLCJpY29uIiwicCIsIm1lc3NhZ2UiLCJ1bmRvbmVUYXNrcyIsInRhc2tzIiwiZmlsdGVyIiwidGFzayIsImRvbmVUYXNrcyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzZWxlY3RlZEtleXMiLCJtb2RlIiwib25TdWJtaXRDYXB0dXJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJJdGVtIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiaHRtbFR5cGUiLCJ1bCIsIm9yaWVudGF0aW9uIiwicGxhaW4iLCJvcmllbnRhdGlvbk1hcmdpbiIsIm1hcCIsImxpIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});