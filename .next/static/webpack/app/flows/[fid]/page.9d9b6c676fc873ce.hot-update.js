"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/flows/[fid]/page",{

/***/ "(app-pages-browser)/./src/components/FreeFlowCore/CoreLayout.js":
/*!***************************************************!*\
  !*** ./src/components/FreeFlowCore/CoreLayout.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/FormControl/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/FormGroup/FormGroup.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CoreLayout = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        firstName: \"\",\n        lastName: \"\",\n        email: \"\",\n        password: \"\"\n    });\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        // 在这里处理表单提交逻辑\n        console.log(\"Form Data:\", formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: \"名\",\n                                name: \"firstName\",\n                                value: formData.firstName,\n                                onChange: handleChange,\n                                margin: \"normal\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: \"姓\",\n                                name: \"lastName\",\n                                value: formData.lastName,\n                                onChange: handleChange,\n                                margin: \"normal\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: \"邮箱\",\n                                type: \"email\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleChange,\n                                margin: \"normal\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                label: \"密码\",\n                                type: \"password\",\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: handleChange,\n                                margin: \"normal\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        type: \"submit\",\n                        variant: \"contained\",\n                        color: \"primary\",\n                        children: \"提交\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CoreLayout, \"thFNGUBgePLvtEl6EEVHNyJH3Zg=\");\n_c = CoreLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoreLayout);\nvar _c;\n$RefreshReg$(_c, \"CoreLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyZWVGbG93Q29yZS9Db3JlTGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBUWpCO0FBRXZCLE1BQU1RLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztRQUN2Q1UsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLE1BQU1HLE1BQU07UUFDcENULFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ1EsS0FBSyxFQUFFQztRQUNWO0lBQ0Y7SUFFQSxNQUFNRSxlQUFlLENBQUNKO1FBQ3BCQSxNQUFNSyxjQUFjO1FBQ3BCLGNBQWM7UUFDZEMsUUFBUUMsR0FBRyxDQUFDLGNBQWNkO0lBQzVCO0lBRUEscUJBQ0UsOERBQUNGLGlJQUFHQTtrQkFDRiw0RUFBQ2lCO1lBQUtDLFVBQVVMO3NCQUNkLDRFQUFDaEIsaUlBQVdBOztrQ0FDViw4REFBQ0MsaUlBQVNBOzswQ0FDUiw4REFBQ0gsaUlBQVNBO2dDQUNSd0IsT0FBTTtnQ0FDTlQsTUFBSztnQ0FDTEMsT0FBT1QsU0FBU0UsU0FBUztnQ0FDekJnQixVQUFVWjtnQ0FDVmEsUUFBTztnQ0FDUEMsUUFBUTs7Ozs7OzBDQUVWLDhEQUFDM0IsaUlBQVNBO2dDQUNSd0IsT0FBTTtnQ0FDTlQsTUFBSztnQ0FDTEMsT0FBT1QsU0FBU0csUUFBUTtnQ0FDeEJlLFVBQVVaO2dDQUNWYSxRQUFPO2dDQUNQQyxRQUFROzs7Ozs7MENBRVYsOERBQUMzQixpSUFBU0E7Z0NBQ1J3QixPQUFNO2dDQUNOSSxNQUFLO2dDQUNMYixNQUFLO2dDQUNMQyxPQUFPVCxTQUFTSSxLQUFLO2dDQUNyQmMsVUFBVVo7Z0NBQ1ZhLFFBQU87Z0NBQ1BDLFFBQVE7Ozs7OzswQ0FFViw4REFBQzNCLGlJQUFTQTtnQ0FDUndCLE9BQU07Z0NBQ05JLE1BQUs7Z0NBQ0xiLE1BQUs7Z0NBQ0xDLE9BQU9ULFNBQVNLLFFBQVE7Z0NBQ3hCYSxVQUFVWjtnQ0FDVmEsUUFBTztnQ0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDMUIsaUlBQU1BO3dCQUFDMkIsTUFBSzt3QkFBU0MsU0FBUTt3QkFBWUMsT0FBTTtrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wRTtHQXJFTXhCO0tBQUFBO0FBdUVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZyZWVGbG93Q29yZS9Db3JlTGF5b3V0LmpzP2Y2MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBUZXh0RmllbGQsXG4gIEJ1dHRvbixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgVHlwb2dyYXBoeSxcbiAgQm94LFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBDb3JlTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgbGFzdE5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAuLi5mb3JtRGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyDlnKjov5nph4zlpITnkIbooajljZXmj5DkuqTpgLvovpFcbiAgICBjb25zb2xlLmxvZyhcIkZvcm0gRGF0YTpcIiwgZm9ybURhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCLlkI1cIlxuICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwi5aeTXCJcbiAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmxhc3ROYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCLpgq7nrrFcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIuWvhueggVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAg5o+Q5LqkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3JlTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsIlR5cG9ncmFwaHkiLCJCb3giLCJDb3JlTGF5b3V0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJvbkNoYW5nZSIsIm1hcmdpbiIsInJlcXVpcmVkIiwidHlwZSIsInZhcmlhbnQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FreeFlowCore/CoreLayout.js\n"));

/***/ })

});