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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/FormControl/FormControl.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/FormGroup/FormGroup.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,FormControl,FormGroup,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CoreLayout = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        mqtt_url: \"\",\n        tsdb_url: \"\",\n        s3_url: \"\"\n    });\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        // 在这里处理表单提交逻辑\n        console.log(\"Form Data:\", formData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            width: \"100%\",\n            minHeight: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                sx: {\n                    width: \"80%\",\n                    margin: 3\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                children: \"MQTT Broker\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: \"url\",\n                                name: \"mqtt_url\",\n                                value: formData.mqtt_url,\n                                onChange: handleChange,\n                                margin: \"normal\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                children: \"Time Series Database\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: \"url\",\n                                name: \"tsdb_url\",\n                                value: formData.tsdb_url,\n                                onChange: handleChange,\n                                margin: \"normal\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                children: \"S3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                label: \"邮箱\",\n                                type: \"email\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleChange,\n                                margin: \"normal\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_FormControl_FormGroup_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        type: \"submit\",\n                        variant: \"contained\",\n                        color: \"primary\",\n                        children: \"Confirm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowCore/CoreLayout.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CoreLayout, \"SX4gFt4Uj4kmuXrGbIupT+s2uQY=\");\n_c = CoreLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoreLayout);\nvar _c;\n$RefreshReg$(_c, \"CoreLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyZWVGbG93Q29yZS9Db3JlTGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQVFqQjtBQUV2QixNQUFNUSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7UUFDdkNVLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsTUFBTUcsTUFBTTtRQUNwQ1IsWUFBWTtZQUNWLEdBQUdELFFBQVE7WUFDWCxDQUFDTyxLQUFLLEVBQUVDO1FBQ1Y7SUFDRjtJQUVBLE1BQU1FLGVBQWUsQ0FBQ0o7UUFDcEJBLE1BQU1LLGNBQWM7UUFDcEIsY0FBYztRQUNkQyxRQUFRQyxHQUFHLENBQUMsY0FBY2I7SUFDNUI7SUFFQSxxQkFDRSw4REFBQ0YsaUlBQUdBO1FBQ0ZnQixJQUFJO1lBQ0ZDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxPQUFPO1lBQ1BDLFdBQVc7UUFDYjtrQkFFQSw0RUFBQ0M7WUFBS0MsVUFBVVY7c0JBQ2QsNEVBQUNmLGlJQUFXQTtnQkFBQ21CLElBQUk7b0JBQUVHLE9BQU87b0JBQU9JLFFBQVE7Z0JBQUU7O2tDQUN6Qyw4REFBQ3pCLGlJQUFTQTs7MENBQ1IsOERBQUNDLGlJQUFVQTswQ0FBQzs7Ozs7OzBDQUNaLDhEQUFDSixpSUFBU0E7Z0NBQ1I2QixPQUFNO2dDQUNOZixNQUFLO2dDQUNMQyxPQUFPUixTQUFTRSxRQUFRO2dDQUN4QnFCLFVBQVVsQjtnQ0FDVmdCLFFBQU87Z0NBQ1BHLFFBQVE7Ozs7OzswQ0FFViw4REFBQzNCLGlJQUFVQTswQ0FBQzs7Ozs7OzBDQUNaLDhEQUFDSixpSUFBU0E7Z0NBQ1I2QixPQUFNO2dDQUNOZixNQUFLO2dDQUNMQyxPQUFPUixTQUFTRyxRQUFRO2dDQUN4Qm9CLFVBQVVsQjtnQ0FDVmdCLFFBQU87Z0NBQ1BHLFFBQVE7Ozs7OzswQ0FFViw4REFBQzNCLGlJQUFVQTswQ0FBQzs7Ozs7OzBDQUNaLDhEQUFDSixpSUFBU0E7Z0NBQ1I2QixPQUFNO2dDQUNORyxNQUFLO2dDQUNMbEIsTUFBSztnQ0FDTEMsT0FBT1IsU0FBUzBCLEtBQUs7Z0NBQ3JCSCxVQUFVbEI7Z0NBQ1ZnQixRQUFPOzs7Ozs7Ozs7Ozs7a0NBR1gsOERBQUMzQixpSUFBTUE7d0JBQUMrQixNQUFLO3dCQUFTRSxTQUFRO3dCQUFZQyxPQUFNO2tDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BFO0dBcEVNN0I7S0FBQUE7QUFzRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJlZUZsb3dDb3JlL0NvcmVMYXlvdXQuanM/ZjYwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwLFxuICBUeXBvZ3JhcGh5LFxuICBCb3gsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmNvbnN0IENvcmVMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG1xdHRfdXJsOiBcIlwiLFxuICAgIHRzZGJfdXJsOiBcIlwiLFxuICAgIHMzX3VybDogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIOWcqOi/memHjOWkhOeQhuihqOWNleaPkOS6pOmAu+i+kVxuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBEYXRhOlwiLCBmb3JtRGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiBcIjgwJVwiLCBtYXJnaW46IDMgfX0+XG4gICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk1RVFQgQnJva2VyPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cInVybFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtcXR0X3VybFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5tcXR0X3VybH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5UaW1lIFNlcmllcyBEYXRhYmFzZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJ1cmxcIlxuICAgICAgICAgICAgICBuYW1lPVwidHNkYl91cmxcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudHNkYl91cmx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+UzM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwi6YKu566xXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3JlTGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsIlR5cG9ncmFwaHkiLCJCb3giLCJDb3JlTGF5b3V0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm1xdHRfdXJsIiwidHNkYl91cmwiLCJzM191cmwiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsIm1pbkhlaWdodCIsImZvcm0iLCJvblN1Ym1pdCIsIm1hcmdpbiIsImxhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInR5cGUiLCJlbWFpbCIsInZhcmlhbnQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FreeFlowCore/CoreLayout.js\n"));

/***/ })

});