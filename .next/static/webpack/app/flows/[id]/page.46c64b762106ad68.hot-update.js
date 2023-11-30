"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/flows/[id]/page",{

/***/ "(app-pages-browser)/./src/app/flows/[id]/page.js":
/*!************************************!*\
  !*** ./src/app/flows/[id]/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Divider */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Chip */ \"(app-pages-browser)/./node_modules/@mui/material/Chip/Chip.js\");\n/* harmony import */ var _components_flowDisplay_Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/flowDisplay/Edge */ \"(app-pages-browser)/./src/components/flowDisplay/Edge.js\");\n/* harmony import */ var _components_flowDisplay_Core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/flowDisplay/Core */ \"(app-pages-browser)/./src/components/flowDisplay/Core.js\");\n/* harmony import */ var _components_flowDisplay_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/flowDisplay/Dashboard */ \"(app-pages-browser)/./src/components/flowDisplay/Dashboard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction page() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [flow, setFlow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [edges, setEdges] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [core, setCore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [dashboard, setDashboard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/flows/\" + id, {\n            method: \"GET\"\n        }).then((res)=>res.json()).then((res)=>{\n            setFlow(res.data);\n            setEdges(res.data.edges.map((edgeFlowMap)=>edgeFlowMap.edge));\n            setCore(flow.core);\n            setDashboard(flow.dashboard);\n        });\n    }, [\n        id\n    ]);\n    console.log(core);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"h4\",\n                gutterBottom: true,\n                children: flow.name\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"body\",\n                gutterBottom: true,\n                children: flow.description\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    label: \"FreeflowEdge\"\n                }, void 0, false, {\n                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_flowDisplay_Edge__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                edgeList: edges\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    label: \"FreeflowCore\"\n                }, void 0, false, {\n                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_flowDisplay_Core__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                core: core\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    label: \"FreeflowDashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_flowDisplay_Dashboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                dashboard: dashboard\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/app/flows/[id]/page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"3PfC42cIMollZ9YWvSqnvwAhNYU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmxvd3MvW2lkXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNIO0FBQ0o7QUFDQTtBQUNOO0FBQ1c7QUFDQTtBQUNVO0FBRTNELFNBQVNXOztJQUNQLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdQLDBEQUFTQTtJQUN4QixNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUNhLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDaUIsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUMsQ0FBQztJQUU1Q0QsZ0RBQVNBLENBQUM7UUFDUm9CLE1BQU0sZ0JBQWdCVCxJQUFJO1lBQUVVLFFBQVE7UUFBTSxHQUN2Q0MsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDQztZQUNMVixRQUFRVSxJQUFJRSxJQUFJO1lBQ2hCVixTQUFTUSxJQUFJRSxJQUFJLENBQUNYLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLENBQUNDLGNBQWdCQSxZQUFZQyxJQUFJO1lBQzdEWCxRQUFRTCxLQUFLSSxJQUFJO1lBQ2pCRyxhQUFhUCxLQUFLTSxTQUFTO1FBQzdCO0lBQ0osR0FBRztRQUFDUDtLQUFHO0lBQ1BrQixRQUFRQyxHQUFHLENBQUNkO0lBRVoscUJBQ0UsOERBQUNkLDBGQUFHQTtRQUNGNkIsSUFBSTtZQUNGQyxTQUFTO1lBQ1RDLGVBQWU7WUFDZkMsV0FBVztRQUNiOzswQkFFQSw4REFBQy9CLDBGQUFVQTtnQkFBQ2dDLFNBQVE7Z0JBQUtDLFlBQVk7MEJBQ2xDeEIsS0FBS3lCLElBQUk7Ozs7OzswQkFFWiw4REFBQ2xDLDBGQUFVQTtnQkFBQ2dDLFNBQVE7Z0JBQU9DLFlBQVk7MEJBQ3BDeEIsS0FBSzBCLFdBQVc7Ozs7OzswQkFFbkIsOERBQUNqQyw2REFBT0E7MEJBQ04sNEVBQUNDLDBEQUFJQTtvQkFBQ2lDLE9BQU07Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDaEMsb0VBQUlBO2dCQUFDaUMsVUFBVTFCOzs7Ozs7MEJBQ2hCLDhEQUFDVCw2REFBT0E7MEJBQ04sNEVBQUNDLDBEQUFJQTtvQkFBQ2lDLE9BQU07Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDL0Isb0VBQUlBO2dCQUFDUSxNQUFNQTs7Ozs7OzBCQUNaLDhEQUFDWCw2REFBT0E7MEJBQ04sNEVBQUNDLDBEQUFJQTtvQkFBQ2lDLE9BQU07Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDOUIseUVBQVNBO2dCQUFDUyxXQUFXQTs7Ozs7Ozs7Ozs7O0FBRzVCO0dBL0NTUjs7UUFDUU4sc0RBQVNBOzs7QUFnRDFCLCtEQUFlTSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZmxvd3MvW2lkXS9wYWdlLmpzPzMxYTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0RpdmlkZXJcIjtcbmltcG9ydCBDaGlwIGZyb20gXCJAbXVpL21hdGVyaWFsL0NoaXBcIjtcbmltcG9ydCBFZGdlIGZyb20gXCJAL2NvbXBvbmVudHMvZmxvd0Rpc3BsYXkvRWRnZVwiO1xuaW1wb3J0IENvcmUgZnJvbSBcIkAvY29tcG9uZW50cy9mbG93RGlzcGxheS9Db3JlXCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvZmxvd0Rpc3BsYXkvRGFzaGJvYXJkXCI7XG5cbmZ1bmN0aW9uIHBhZ2UoKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xuICBjb25zdCBbZmxvdywgc2V0Rmxvd10gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtlZGdlcywgc2V0RWRnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29yZSwgc2V0Q29yZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtkYXNoYm9hcmQsIHNldERhc2hib2FyZF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcIi9hcGkvZmxvd3MvXCIgKyBpZCwgeyBtZXRob2Q6IFwiR0VUXCIgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldEZsb3cocmVzLmRhdGEpO1xuICAgICAgICBzZXRFZGdlcyhyZXMuZGF0YS5lZGdlcy5tYXAoKGVkZ2VGbG93TWFwKSA9PiBlZGdlRmxvd01hcC5lZGdlKSk7XG4gICAgICAgIHNldENvcmUoZmxvdy5jb3JlKTtcbiAgICAgICAgc2V0RGFzaGJvYXJkKGZsb3cuZGFzaGJvYXJkKTtcbiAgICAgIH0pO1xuICB9LCBbaWRdKTtcbiAgY29uc29sZS5sb2coY29yZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAge2Zsb3cubmFtZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICB7Zmxvdy5kZXNjcmlwdGlvbn1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxEaXZpZGVyPlxuICAgICAgICA8Q2hpcCBsYWJlbD1cIkZyZWVmbG93RWRnZVwiIC8+XG4gICAgICA8L0RpdmlkZXI+XG4gICAgICA8RWRnZSBlZGdlTGlzdD17ZWRnZXN9PjwvRWRnZT5cbiAgICAgIDxEaXZpZGVyPlxuICAgICAgICA8Q2hpcCBsYWJlbD1cIkZyZWVmbG93Q29yZVwiIC8+XG4gICAgICA8L0RpdmlkZXI+XG4gICAgICA8Q29yZSBjb3JlPXtjb3JlfSAvPlxuICAgICAgPERpdmlkZXI+XG4gICAgICAgIDxDaGlwIGxhYmVsPVwiRnJlZWZsb3dEYXNoYm9hcmRcIiAvPlxuICAgICAgPC9EaXZpZGVyPlxuICAgICAgPERhc2hib2FyZCBkYXNoYm9hcmQ9e2Rhc2hib2FyZH0+PC9EYXNoYm9hcmQ+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIlR5cG9ncmFwaHkiLCJ1c2VQYXJhbXMiLCJEaXZpZGVyIiwiQ2hpcCIsIkVkZ2UiLCJDb3JlIiwiRGFzaGJvYXJkIiwicGFnZSIsImlkIiwiZmxvdyIsInNldEZsb3ciLCJlZGdlcyIsInNldEVkZ2VzIiwiY29yZSIsInNldENvcmUiLCJkYXNoYm9hcmQiLCJzZXREYXNoYm9hcmQiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIm1hcCIsImVkZ2VGbG93TWFwIiwiZWRnZSIsImNvbnNvbGUiLCJsb2ciLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWluSGVpZ2h0IiwidmFyaWFudCIsImd1dHRlckJvdHRvbSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxhYmVsIiwiZWRnZUxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/flows/[id]/page.js\n"));

/***/ })

});