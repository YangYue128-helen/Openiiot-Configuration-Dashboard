"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/flows/layout",{

/***/ "(app-pages-browser)/./src/app/flows/layout.js":
/*!*********************************!*\
  !*** ./src/app/flows/layout.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stepper */ \"(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js\");\n/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Step */ \"(app-pages-browser)/./node_modules/@mui/material/Step/Step.js\");\n/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/StepLabel */ \"(app-pages-browser)/./node_modules/@mui/material/StepLabel/StepLabel.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FreeFlowEdge_EdgeLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FreeFlowEdge/EdgeLayout */ \"(app-pages-browser)/./src/components/FreeFlowEdge/EdgeLayout.js\");\n/* harmony import */ var _components_FreeFlowCore_CoreLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FreeFlowCore/CoreLayout */ \"(app-pages-browser)/./src/components/FreeFlowCore/CoreLayout.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst steps = [\n    \"FreeFlow Edge\",\n    \"FreeFlow Core\",\n    \"Dashboard\"\n];\nconst layout = (param)=>{\n    let { children } = param;\n    _s();\n    const { fid } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [skipped, setSkipped] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(new Set());\n    const isStepOptional = (step)=>{\n        return step === 2;\n    };\n    const isStepSkipped = (step)=>{\n        return skipped.has(step);\n    };\n    const handleNext = ()=>{\n        let newSkipped = skipped;\n        if (isStepSkipped(activeStep)) {\n            newSkipped = new Set(newSkipped.values());\n            newSkipped.delete(activeStep);\n        }\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n        setSkipped(newSkipped);\n    };\n    const handleBack = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep - 1);\n    };\n    const handleSkip = ()=>{\n        if (!isStepOptional(activeStep)) {\n            // You probably want to guard against something like this,\n            // it should never occur unless someone's actively trying to break something.\n            throw new Error(\"You can't skip a step that isn't optional.\");\n        }\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n        setSkipped((prevSkipped)=>{\n            const newSkipped = new Set(prevSkipped.values());\n            newSkipped.add(activeStep);\n            return newSkipped;\n        });\n    };\n    const handleReset = ()=>{\n        setActiveStep(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            minHeight: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sx: {\n                    flex: 1\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        variant: \"h6\",\n                        gutterBottom: true,\n                        children: [\n                            \"Flow \",\n                            fid\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        sx: {\n                            width: \"100%\"\n                        },\n                        activeStep: activeStep,\n                        children: steps.map((label, index)=>{\n                            const stepProps = {};\n                            const labelProps = {};\n                            if (isStepOptional(index)) {\n                                labelProps.optional = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    variant: \"caption\",\n                                    children: \"Optional\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, undefined);\n                            }\n                            if (isStepSkipped(index)) {\n                                stepProps.completed = false;\n                            }\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Step__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                ...stepProps,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    ...labelProps,\n                                    children: label\n                                }, void 0, false, {\n                                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, label, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            activeStep === steps.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        variant: \"h2\",\n                        sx: {\n                            mt: 2,\n                            mb: 1\n                        },\n                        children: \"All steps completed - you're finished\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            pt: 2\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                sx: {\n                                    flex: \"1 1 auto\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                onClick: handleReset,\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                lineNumber: 102,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sx: {\n                            flex: \"1\",\n                            flexDirection: \"column\",\n                            width: \"100%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                sx: {\n                                    mt: 2,\n                                    mb: 1\n                                },\n                                variant: \"h6\",\n                                children: [\n                                    \"Step \",\n                                    activeStep + 1,\n                                    \" \",\n                                    steps[activeStep]\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                component: \"main\",\n                                sx: {\n                                    flexGrow: 1,\n                                    bgcolor: \"background.default\",\n                                    mt: [\n                                        \"48px\",\n                                        \"56px\",\n                                        \"64px\"\n                                    ],\n                                    p: 3\n                                },\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            pt: 2,\n                            p: 2,\n                            justifyContent: \"space-between\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                color: \"inherit\",\n                                disabled: activeStep === 0,\n                                onClick: handleBack,\n                                sx: {\n                                    mr: 1\n                                },\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                sx: {\n                                    flex: \"1 1 auto\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                lineNumber: 147,\n                                columnNumber: 13\n                            }, undefined),\n                            isStepOptional(activeStep) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                color: \"inherit\",\n                                onClick: handleSkip,\n                                sx: {\n                                    mr: 1\n                                },\n                                children: \"Skip\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                lineNumber: 149,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                component: Link,\n                                onClick: handleNext,\n                                children: activeStep === steps.length - 1 ? \"Finish\" : \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                                lineNumber: 154,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/layout.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(layout, \"MI9IQWrTHtaD8pywxhNh4DAlb/c=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (layout);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmxvd3MvbGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDUTtBQUNaO0FBQ007QUFDRTtBQUNOO0FBQ1U7QUFDRTtBQUNOO0FBRWtCO0FBQ2xCO0FBQ2tCO0FBRTlELE1BQU1hLFFBQVE7SUFBQztJQUFpQjtJQUFpQjtDQUFZO0FBRTdELE1BQU1DLFNBQVM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzFCLE1BQU0sRUFBRUMsR0FBRyxFQUFFLEdBQUdQLDBEQUFTQTtJQUN6QixNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR2xCLHFEQUFjLENBQUM7SUFDbkQsTUFBTSxDQUFDbUIsU0FBU0MsV0FBVyxHQUFHcEIscURBQWMsQ0FBQyxJQUFJcUI7SUFFakQsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCLE9BQU9BLFNBQVM7SUFDbEI7SUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQ0Q7UUFDckIsT0FBT0osUUFBUU0sR0FBRyxDQUFDRjtJQUNyQjtJQUVBLE1BQU1HLGFBQWE7UUFDakIsSUFBSUMsYUFBYVI7UUFDakIsSUFBSUssY0FBY1AsYUFBYTtZQUM3QlUsYUFBYSxJQUFJTixJQUFJTSxXQUFXQyxNQUFNO1lBQ3RDRCxXQUFXRSxNQUFNLENBQUNaO1FBQ3BCO1FBRUFDLGNBQWMsQ0FBQ1ksaUJBQW1CQSxpQkFBaUI7UUFDbkRWLFdBQVdPO0lBQ2I7SUFFQSxNQUFNSSxhQUFhO1FBQ2pCYixjQUFjLENBQUNZLGlCQUFtQkEsaUJBQWlCO0lBQ3JEO0lBRUEsTUFBTUUsYUFBYTtRQUNqQixJQUFJLENBQUNWLGVBQWVMLGFBQWE7WUFDL0IsMERBQTBEO1lBQzFELDZFQUE2RTtZQUM3RSxNQUFNLElBQUlnQixNQUFNO1FBQ2xCO1FBRUFmLGNBQWMsQ0FBQ1ksaUJBQW1CQSxpQkFBaUI7UUFDbkRWLFdBQVcsQ0FBQ2M7WUFDVixNQUFNUCxhQUFhLElBQUlOLElBQUlhLFlBQVlOLE1BQU07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QUM3RCw2REFBTUE7Z0NBQUNzRCxXQUFXUTtnQ0FBTVQsU0FBUy9COzBDQUMvQlQsZUFBZUosTUFBTXVDLE1BQU0sR0FBRyxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81RDtHQWhKTXRDOztRQUNZTCxzREFBU0E7OztBQWdKM0IsK0RBQWVLLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9mbG93cy9sYXlvdXQuanM/ZGNiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcFwiO1xuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwTGFiZWxcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW1wb3J0IEVkZ2VMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9GcmVlRmxvd0VkZ2UvRWRnZUxheW91dFwiO1xuaW1wb3J0IHsgU3RlcENvbnRlbnQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IENvcmVMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9GcmVlRmxvd0NvcmUvQ29yZUxheW91dFwiO1xuXG5jb25zdCBzdGVwcyA9IFtcIkZyZWVGbG93IEVkZ2VcIiwgXCJGcmVlRmxvdyBDb3JlXCIsIFwiRGFzaGJvYXJkXCJdO1xuXG5jb25zdCBsYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgZmlkIH0gPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtza2lwcGVkLCBzZXRTa2lwcGVkXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBTZXQoKSk7XG5cbiAgY29uc3QgaXNTdGVwT3B0aW9uYWwgPSAoc3RlcCkgPT4ge1xuICAgIHJldHVybiBzdGVwID09PSAyO1xuICB9O1xuXG4gIGNvbnN0IGlzU3RlcFNraXBwZWQgPSAoc3RlcCkgPT4ge1xuICAgIHJldHVybiBza2lwcGVkLmhhcyhzdGVwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGxldCBuZXdTa2lwcGVkID0gc2tpcHBlZDtcbiAgICBpZiAoaXNTdGVwU2tpcHBlZChhY3RpdmVTdGVwKSkge1xuICAgICAgbmV3U2tpcHBlZCA9IG5ldyBTZXQobmV3U2tpcHBlZC52YWx1ZXMoKSk7XG4gICAgICBuZXdTa2lwcGVkLmRlbGV0ZShhY3RpdmVTdGVwKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKTtcbiAgICBzZXRTa2lwcGVkKG5ld1NraXBwZWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2tpcCA9ICgpID0+IHtcbiAgICBpZiAoIWlzU3RlcE9wdGlvbmFsKGFjdGl2ZVN0ZXApKSB7XG4gICAgICAvLyBZb3UgcHJvYmFibHkgd2FudCB0byBndWFyZCBhZ2FpbnN0IHNvbWV0aGluZyBsaWtlIHRoaXMsXG4gICAgICAvLyBpdCBzaG91bGQgbmV2ZXIgb2NjdXIgdW5sZXNzIHNvbWVvbmUncyBhY3RpdmVseSB0cnlpbmcgdG8gYnJlYWsgc29tZXRoaW5nLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbid0IHNraXAgYSBzdGVwIHRoYXQgaXNuJ3Qgb3B0aW9uYWwuXCIpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xuICAgIHNldFNraXBwZWQoKHByZXZTa2lwcGVkKSA9PiB7XG4gICAgICBjb25zdCBuZXdTa2lwcGVkID0gbmV3IFNldChwcmV2U2tpcHBlZC52YWx1ZXMoKSk7XG4gICAgICBuZXdTa2lwcGVkLmFkZChhY3RpdmVTdGVwKTtcbiAgICAgIHJldHVybiBuZXdTa2lwcGVkO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgbWluSGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICBGbG93IHtmaWR9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFN0ZXBwZXIgc3g9e3sgd2lkdGg6IFwiMTAwJVwiIH19IGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9PlxuICAgICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcFByb3BzID0ge307XG4gICAgICAgICAgICBjb25zdCBsYWJlbFByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoaXNTdGVwT3B0aW9uYWwoaW5kZXgpKSB7XG4gICAgICAgICAgICAgIGxhYmVsUHJvcHMub3B0aW9uYWwgPSAoXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj5PcHRpb25hbDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1N0ZXBTa2lwcGVkKGluZGV4KSkge1xuICAgICAgICAgICAgICBzdGVwUHJvcHMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3RlcCBrZXk9e2xhYmVsfSB7Li4uc3RlcFByb3BzfT5cbiAgICAgICAgICAgICAgICA8U3RlcExhYmVsIHsuLi5sYWJlbFByb3BzfT57bGFiZWx9PC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvU3RlcHBlcj5cbiAgICAgIDwvQm94PlxuICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCA/IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIHN4PXt7IG10OiAyLCBtYjogMSB9fT5cbiAgICAgICAgICAgIEFsbCBzdGVwcyBjb21wbGV0ZWQgLSB5b3UmYXBvcztyZSBmaW5pc2hlZFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBwdDogMiB9fT5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19IC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fT5SZXNldDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKSA6IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxXCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG10OiAyLCBtYjogMSB9fSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgU3RlcCB7YWN0aXZlU3RlcCArIDF9IHtzdGVwc1thY3RpdmVTdGVwXX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogXCJiYWNrZ3JvdW5kLmRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBtdDogW1wiNDhweFwiLCBcIjU2cHhcIiwgXCI2NHB4XCJdLFxuICAgICAgICAgICAgICAgIHA6IDMsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgIHB0OiAyLFxuICAgICAgICAgICAgICBwOiAyLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XG4gICAgICAgICAgICAgIHN4PXt7IG1yOiAxIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4OiBcIjEgMSBhdXRvXCIgfX0gLz5cbiAgICAgICAgICAgIHtpc1N0ZXBPcHRpb25hbChhY3RpdmVTdGVwKSAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlU2tpcH0gc3g9e3sgbXI6IDEgfX0+XG4gICAgICAgICAgICAgICAgU2tpcFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSBvbkNsaWNrPXtoYW5kbGVOZXh0fT5cbiAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyBcIkZpbmlzaFwiIDogXCJOZXh0XCJ9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbGF5b3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJCb3giLCJCdXR0b24iLCJTdGVwcGVyIiwiU3RlcCIsIlN0ZXBMYWJlbCIsIlR5cG9ncmFwaHkiLCJ1c2VQYXJhbXMiLCJFZGdlTGF5b3V0IiwiU3RlcENvbnRlbnQiLCJDb3JlTGF5b3V0Iiwic3RlcHMiLCJsYXlvdXQiLCJjaGlsZHJlbiIsImZpZCIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwic2tpcHBlZCIsInNldFNraXBwZWQiLCJTZXQiLCJpc1N0ZXBPcHRpb25hbCIsInN0ZXAiLCJpc1N0ZXBTa2lwcGVkIiwiaGFzIiwiaGFuZGxlTmV4dCIsIm5ld1NraXBwZWQiLCJ2YWx1ZXMiLCJkZWxldGUiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJoYW5kbGVTa2lwIiwiRXJyb3IiLCJwcmV2U2tpcHBlZCIsImFkZCIsImhhbmRsZVJlc2V0Iiwic3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1pbkhlaWdodCIsImZsZXgiLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwid2lkdGgiLCJtYXAiLCJsYWJlbCIsImluZGV4Iiwic3RlcFByb3BzIiwibGFiZWxQcm9wcyIsIm9wdGlvbmFsIiwiY29tcGxldGVkIiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJtdCIsIm1iIiwicHQiLCJvbkNsaWNrIiwiY29tcG9uZW50IiwiZmxleEdyb3ciLCJiZ2NvbG9yIiwicCIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJkaXNhYmxlZCIsIm1yIiwiTGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/flows/layout.js\n"));

/***/ })

});