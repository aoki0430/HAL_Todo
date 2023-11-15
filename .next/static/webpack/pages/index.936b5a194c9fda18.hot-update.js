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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/menu */ \"./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/checkbox */ \"./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/AppstoreOutlined */ \"./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MailOutlined */ \"./node_modules/@ant-design/icons/lib/icons/MailOutlined.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  query {\\n    tasks {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($id: Int, $done: Boolean) {\\n    toggleTaskDone(id: $id, done: $done) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  mutation ($input: AddTaskInput!) {\\n    addTask(input: $input) {\\n      id\\n      title\\n      done\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst AllTasksQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nconst ToggleTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject1());\nconst AddTaskMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject2());\nconst Home = ()=>{\n    _s();\n    const { data, loading, error, refetch } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(AllTasksQuery);\n    const [toggleTaskDone, { loading: toggling, error: toggleError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(ToggleTaskMutation);\n    const [addTaskDone, { loading: adding, error: addingError }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(AddTaskMutation);\n    const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm();\n    const handleToggleTaskDone = async (event, taskId)=>{\n        const newDoneStatus = event.target.checked;\n        try {\n            await toggleTaskDone({\n                variables: {\n                    id: taskId,\n                    done: newDoneStatus\n                }\n            });\n        } catch (error) {\n            console.error(\"Error toggling task\", error);\n        }\n    };\n    const onSubmitAddTask = async (title)=>{\n        try {\n            console.log(title);\n            await addTaskDone({\n                variables: {\n                    input: {\n                        title: title\n                    }\n                }\n            });\n            form.resetFields();\n            refetch();\n        } catch (error) {\n            console.error(\"Error adding task\", error);\n        }\n    };\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"mail\");\n    const onClickTab = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    const items = [\n        {\n            label: \"All\",\n            key: \"mail\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined)\n        },\n        {\n            label: \"Today\",\n            key: \"app\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, undefined)\n        }\n    ];\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 100,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n        lineNumber: 101,\n        columnNumber: 21\n    }, undefined);\n    const undoneTasks = [\n        ...data.tasks\n    ].filter((task)=>!task.done);\n    const doneTasks = [\n        ...data.tasks\n    ].filter((task)=>task.done);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"ml-8 mt-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onClick: onClickTab,\n                    selectedKeys: [\n                        current\n                    ],\n                    mode: \"horizontal\",\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-8 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex mt-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                form: form,\n                                className: \"flex-grow\",\n                                style: {\n                                    maxWidth: 600\n                                },\n                                onSubmitCapture: (event)=>{\n                                    event.preventDefault();\n                                    const title = event.currentTarget[0].value;\n                                    onSubmitAddTask(title);\n                                    form.resetFields();\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                                        name: \"taskTitle\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            placeholder: \"write todo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        htmlType: \"submit\",\n                                        className: \"ml-2\",\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: \"list-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    orientation: \"left\",\n                                    plain: true,\n                                    orientationMargin: \"0\",\n                                    children: \"Todo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, undefined),\n                                undoneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                            checked: task.done,\n                                            children: task.title\n                                        }, \"task-\".concat(task.id), false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, task.id, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_divider__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    orientation: \"left\",\n                                    plain: true,\n                                    orientationMargin: \"0\",\n                                    children: \"Completed\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 13\n                                }, undefined),\n                                doneTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                        className: \"mb-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            onChange: (event)=>handleToggleTaskDone(event, task.id),\n                                            checked: task.done,\n                                            className: \"line-through\",\n                                            children: task.title\n                                        }, \"task-\".concat(task.id), false, {\n                                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                            lineNumber: 159,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, task.id, false, {\n                                        fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                                        lineNumber: 158,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ar/ghq/github.com/aoki0430/HAL_Todo/pages/index.tsx\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"uAbK35CLAbp4L3Fr46otmDaVFZw=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        antd_lib_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWjtBQUFBO0FBRVA7QUFHNUQsTUFBTVksZ0JBQWdCSCxtREFBR0E7QUFVekIsTUFBTUkscUJBQXFCSixtREFBR0E7QUFVOUIsTUFBTUssa0JBQWtCTCxtREFBR0E7QUFVM0IsTUFBTU0sT0FBaUI7O0lBQ3JCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUdSLHdEQUFRQSxDQUFDQztJQUNuRCxNQUFNLENBQUNRLGdCQUFnQixFQUFFSCxTQUFTSSxRQUFRLEVBQUVILE9BQU9JLFdBQVcsRUFBRSxDQUFDLEdBQy9EWiwyREFBV0EsQ0FBQ0c7SUFDZCxNQUFNLENBQUNVLGFBQWEsRUFBRU4sU0FBU08sTUFBTSxFQUFFTixPQUFPTyxXQUFXLEVBQUUsQ0FBQyxHQUMxRGYsMkRBQVdBLENBQUNJO0lBQ2QsTUFBTSxDQUFDWSxLQUFLLEdBQUd4Qiw2REFBWTtJQUUzQixNQUFNMEIsdUJBQXVCLE9BQzNCQyxPQUNBQztRQUVBLE1BQU1DLGdCQUFnQkYsTUFBTUcsTUFBTSxDQUFDQyxPQUFPO1FBQzFDLElBQUk7WUFDRixNQUFNYixlQUFlO2dCQUNuQmMsV0FBVztvQkFDVEMsSUFBSUw7b0JBQ0pNLE1BQU1MO2dCQUNSO1lBQ0Y7UUFDRixFQUFFLE9BQU9iLE9BQU87WUFDZG1CLFFBQVFuQixLQUFLLENBQUMsdUJBQXVCQTtRQUN2QztJQUNGO0lBRUEsTUFBTW9CLGtCQUFrQixPQUFPQztRQUM3QixJQUFJO1lBQ0ZGLFFBQVFHLEdBQUcsQ0FBQ0Q7WUFDWixNQUFNaEIsWUFBWTtnQkFDaEJXLFdBQVc7b0JBQ1RPLE9BQU87d0JBQ0xGLE9BQU9BO29CQUNUO2dCQUNGO1lBQ0Y7WUFDQWIsS0FBS2dCLFdBQVc7WUFDaEJ2QjtRQUNGLEVBQUUsT0FBT0QsT0FBTztZQUNkbUIsUUFBUW5CLEtBQUssQ0FBQyxxQkFBcUJBO1FBQ3JDO0lBQ0Y7SUFFQSxNQUFNLENBQUN5QixTQUFTQyxXQUFXLEdBQUc1QywrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNNkMsYUFBbUMsQ0FBQ0M7UUFDeENULFFBQVFHLEdBQUcsQ0FBQyxVQUFVTTtRQUN0QkYsV0FBV0UsRUFBRUMsR0FBRztJQUNsQjtJQUVBLE1BQU1DLFFBQTRCO1FBQ2hDO1lBQ0VDLE9BQU87WUFDUEYsS0FBSztZQUNMRyxvQkFBTSw4REFBQzFDLGdGQUFZQTs7Ozs7UUFDckI7UUFDQTtZQUNFeUMsT0FBTztZQUNQRixLQUFLO1lBQ0xHLG9CQUFNLDhEQUFDM0Msb0ZBQWdCQTs7Ozs7UUFDekI7S0FDRDtJQUVELElBQUlVLFNBQVMscUJBQU8sOERBQUNrQztrQkFBRTs7Ozs7O0lBQ3ZCLElBQUlqQyxPQUFPLHFCQUFPLDhEQUFDaUM7O1lBQUU7WUFBUWpDLE1BQU1rQyxPQUFPOzs7Ozs7O0lBRTFDLE1BQU1DLGNBQWM7V0FBSXJDLEtBQUtzQyxLQUFLO0tBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLE9BQVMsQ0FBQ0EsS0FBS3BCLElBQUk7SUFDaEUsTUFBTXFCLFlBQVk7V0FBSXpDLEtBQUtzQyxLQUFLO0tBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtwQixJQUFJO0lBRTdELHFCQUNFO2tCQUNFLDRFQUFDc0I7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUN2RCxxREFBSUE7b0JBQ0h3RCxTQUFTZjtvQkFDVGdCLGNBQWM7d0JBQUNsQjtxQkFBUTtvQkFDdkJtQixNQUFLO29CQUNMZCxPQUFPQTs7Ozs7OzhCQUVULDhEQUFDVTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDekQscURBQUlBO2dDQUNId0IsTUFBTUE7Z0NBQ05pQyxXQUFVO2dDQUNWSSxPQUFPO29DQUFFQyxVQUFVO2dDQUFJO2dDQUN2QkMsaUJBQWlCLENBQUNwQztvQ0FDaEJBLE1BQU1xQyxjQUFjO29DQUNwQixNQUFNM0IsUUFBUSxNQUFPNEIsYUFBYSxDQUFDLEVBQUUsQ0FDbENDLEtBQUs7b0NBQ1I5QixnQkFBZ0JDO29DQUNoQmIsS0FBS2dCLFdBQVc7Z0NBQ2xCOztrREFFQSw4REFBQ3hDLDBEQUFTO3dDQUFDb0UsTUFBSztrREFDZCw0RUFBQ25FLHNEQUFLQTs0Q0FBQ29FLGFBQVk7Ozs7Ozs7Ozs7O2tEQUVyQiw4REFBQ3RFLHdEQUFNQTt3Q0FBQ3VFLFVBQVM7d0NBQVNiLFdBQVU7a0RBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUsvQyw4REFBQ2M7NEJBQUdkLFdBQVU7OzhDQUNaLDhEQUFDckQseURBQU9BO29DQUFDb0UsYUFBWTtvQ0FBT0MsS0FBSztvQ0FBQ0MsbUJBQWtCOzhDQUFJOzs7Ozs7Z0NBR3ZEdkIsWUFBWXdCLEdBQUcsQ0FBQyxDQUFDckIscUJBQ2hCLDhEQUFDc0I7a0RBQ0MsNEVBQUN6RSwwREFBUUE7NENBQ1AwRSxVQUFVLENBQUNsRCxRQUFVRCxxQkFBcUJDLE9BQU8yQixLQUFLckIsRUFBRTs0Q0FFeERGLFNBQVN1QixLQUFLcEIsSUFBSTtzREFFakJvQixLQUFLakIsS0FBSzsyQ0FITixRQUFnQixPQUFSaUIsS0FBS3JCLEVBQUU7Ozs7O3VDQUhmcUIsS0FBS3JCLEVBQUU7Ozs7OzhDQVdsQiw4REFBQzdCLHlEQUFPQTtvQ0FBQ29FLGFBQVk7b0NBQU9DLEtBQUs7b0NBQUNDLG1CQUFrQjs4Q0FBSTs7Ozs7O2dDQUl2RG5CLFVBQVVvQixHQUFHLENBQUMsQ0FBQ3JCLHFCQUNkLDhEQUFDc0I7d0NBQWlCbkIsV0FBVTtrREFDMUIsNEVBQUN0RCwwREFBUUE7NENBQ1AwRSxVQUFVLENBQUNsRCxRQUFVRCxxQkFBcUJDLE9BQU8yQixLQUFLckIsRUFBRTs0Q0FFeERGLFNBQVN1QixLQUFLcEIsSUFBSTs0Q0FDbEJ1QixXQUFVO3NEQUVUSCxLQUFLakIsS0FBSzsyQ0FKTixRQUFnQixPQUFSaUIsS0FBS3JCLEVBQUU7Ozs7O3VDQUhmcUIsS0FBS3JCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCOUI7R0F2SU1wQjs7UUFDc0NKLG9EQUFRQTtRQUVoREQsdURBQVdBO1FBRVhBLHVEQUFXQTtRQUNFUiw2REFBWXlCOzs7S0FOdkJaO0FBeUlOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVudSwgTWVudVByb3BzLCBDaGVja2JveCwgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBBcHBzdG9yZU91dGxpbmVkLCBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB0eXBlIHsgQ2hlY2tib3hDaGFuZ2VFdmVudCB9IGZyb20gXCJhbnRkL2VzL2NoZWNrYm94XCI7XG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdGFzayB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBBbGxUYXNrc1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgdGFza3Mge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkb25lXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUb2dnbGVUYXNrTXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uICgkaWQ6IEludCwgJGRvbmU6IEJvb2xlYW4pIHtcbiAgICB0b2dnbGVUYXNrRG9uZShpZDogJGlkLCBkb25lOiAkZG9uZSkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBkb25lXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBBZGRUYXNrTXV0YXRpb24gPSBncWxgXG4gIG11dGF0aW9uICgkaW5wdXQ6IEFkZFRhc2tJbnB1dCEpIHtcbiAgICBhZGRUYXNrKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgZG9uZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KEFsbFRhc2tzUXVlcnkpO1xuICBjb25zdCBbdG9nZ2xlVGFza0RvbmUsIHsgbG9hZGluZzogdG9nZ2xpbmcsIGVycm9yOiB0b2dnbGVFcnJvciB9XSA9XG4gICAgdXNlTXV0YXRpb24oVG9nZ2xlVGFza011dGF0aW9uKTtcbiAgY29uc3QgW2FkZFRhc2tEb25lLCB7IGxvYWRpbmc6IGFkZGluZywgZXJyb3I6IGFkZGluZ0Vycm9yIH1dID1cbiAgICB1c2VNdXRhdGlvbihBZGRUYXNrTXV0YXRpb24pO1xuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVUYXNrRG9uZSA9IGFzeW5jIChcbiAgICBldmVudDogQ2hlY2tib3hDaGFuZ2VFdmVudCxcbiAgICB0YXNrSWQ6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCBuZXdEb25lU3RhdHVzID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRvZ2dsZVRhc2tEb25lKHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaWQ6IHRhc2tJZCxcbiAgICAgICAgICBkb25lOiBuZXdEb25lU3RhdHVzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0b2dnbGluZyB0YXNrXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25TdWJtaXRBZGRUYXNrID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgYXdhaXQgYWRkVGFza0RvbmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgIHJlZmV0Y2goKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyB0YXNrXCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJtYWlsXCIpO1xuICBjb25zdCBvbkNsaWNrVGFiOiBNZW51UHJvcHNbXCJvbkNsaWNrXCJdID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcbiAgfTtcblxuICBjb25zdCBpdGVtczogTWVudVByb3BzW1wiaXRlbXNcIl0gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiQWxsXCIsXG4gICAgICBrZXk6IFwibWFpbFwiLFxuICAgICAgaWNvbjogPE1haWxPdXRsaW5lZCAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlRvZGF5XCIsXG4gICAgICBrZXk6IFwiYXBwXCIsXG4gICAgICBpY29uOiA8QXBwc3RvcmVPdXRsaW5lZCAvPixcbiAgICB9LFxuICBdO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xuXG4gIGNvbnN0IHVuZG9uZVRhc2tzID0gWy4uLmRhdGEudGFza3MhXS5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmRvbmUpO1xuICBjb25zdCBkb25lVGFza3MgPSBbLi4uZGF0YS50YXNrcyFdLmZpbHRlcigodGFzaykgPT4gdGFzay5kb25lKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTggbXQtOFwiPlxuICAgICAgICA8TWVudVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tUYWJ9XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XG4gICAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtOFwiPlxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDYwMCB9fVxuICAgICAgICAgICAgICBvblN1Ym1pdENhcHR1cmU9eyhldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gKGV2ZW50LmN1cnJlbnRUYXJnZXRbMF0gYXMgSFRNTElucHV0RWxlbWVudClcbiAgICAgICAgICAgICAgICAgIC52YWx1ZTtcbiAgICAgICAgICAgICAgICBvblN1Ym1pdEFkZFRhc2sodGl0bGUpO1xuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidGFza1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwid3JpdGUgdG9kb1wiIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ub25lXCI+XG4gICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIiBwbGFpbiBvcmllbnRhdGlvbk1hcmdpbj1cIjBcIj5cbiAgICAgICAgICAgICAgVG9kb1xuICAgICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgICAge3VuZG9uZVRhc2tzLm1hcCgodGFzazogdGFzaykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfT5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZVRvZ2dsZVRhc2tEb25lKGV2ZW50LCB0YXNrLmlkKX1cbiAgICAgICAgICAgICAgICAgIGtleT17YHRhc2stJHt0YXNrLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0YXNrLmRvbmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgey8qIHt1bmRvbmVUYXNrcy5sZW5ndGggPiAwICYmIGRvbmVUYXNrcy5sZW5ndGggPiAwICYmICggKi99XG4gICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIiBwbGFpbiBvcmllbnRhdGlvbk1hcmdpbj1cIjBcIj5cbiAgICAgICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICB7LyogKX0gKi99XG4gICAgICAgICAgICB7ZG9uZVRhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt0YXNrLmlkfSBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVUb2dnbGVUYXNrRG9uZShldmVudCwgdGFzay5pZCl9XG4gICAgICAgICAgICAgICAgICBrZXk9e2B0YXNrLSR7dGFzay5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGFzay5kb25lfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZW51IiwiQ2hlY2tib3giLCJEaXZpZGVyIiwiQXBwc3RvcmVPdXRsaW5lZCIsIk1haWxPdXRsaW5lZCIsImdxbCIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJBbGxUYXNrc1F1ZXJ5IiwiVG9nZ2xlVGFza011dGF0aW9uIiwiQWRkVGFza011dGF0aW9uIiwiSG9tZSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWZldGNoIiwidG9nZ2xlVGFza0RvbmUiLCJ0b2dnbGluZyIsInRvZ2dsZUVycm9yIiwiYWRkVGFza0RvbmUiLCJhZGRpbmciLCJhZGRpbmdFcnJvciIsImZvcm0iLCJ1c2VGb3JtIiwiaGFuZGxlVG9nZ2xlVGFza0RvbmUiLCJldmVudCIsInRhc2tJZCIsIm5ld0RvbmVTdGF0dXMiLCJ0YXJnZXQiLCJjaGVja2VkIiwidmFyaWFibGVzIiwiaWQiLCJkb25lIiwiY29uc29sZSIsIm9uU3VibWl0QWRkVGFzayIsInRpdGxlIiwibG9nIiwiaW5wdXQiLCJyZXNldEZpZWxkcyIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwib25DbGlja1RhYiIsImUiLCJrZXkiLCJpdGVtcyIsImxhYmVsIiwiaWNvbiIsInAiLCJtZXNzYWdlIiwidW5kb25lVGFza3MiLCJ0YXNrcyIsImZpbHRlciIsInRhc2siLCJkb25lVGFza3MiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2VsZWN0ZWRLZXlzIiwibW9kZSIsInN0eWxlIiwibWF4V2lkdGgiLCJvblN1Ym1pdENhcHR1cmUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIkl0ZW0iLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJodG1sVHlwZSIsInVsIiwib3JpZW50YXRpb24iLCJwbGFpbiIsIm9yaWVudGF0aW9uTWFyZ2luIiwibWFwIiwibGkiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});