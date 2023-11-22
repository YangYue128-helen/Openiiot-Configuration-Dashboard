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

/***/ "(app-pages-browser)/./src/components/FreeFlowEdge/AddEdgeSite.js":
/*!****************************************************!*\
  !*** ./src/components/FreeFlowEdge/AddEdgeSite.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Dialog */ \"(app-pages-browser)/./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogActions */ \"(app-pages-browser)/./node_modules/@mui/material/DialogActions/DialogActions.js\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/DialogContent */ \"(app-pages-browser)/./node_modules/@mui/material/DialogContent/DialogContent.js\");\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/DialogContentText */ \"(app-pages-browser)/./node_modules/@mui/material/DialogContentText/DialogContentText.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"(app-pages-browser)/./node_modules/@mui/material/DialogTitle/DialogTitle.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Alert */ \"(app-pages-browser)/./node_modules/@mui/material/Alert/Alert.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst edgeTypes = [\n    {\n        value: \"NodeRed\"\n    },\n    {\n        value: \"Rest API\"\n    },\n    {\n        value: \"PG/Mysql\"\n    }\n];\nfunction AddEdgeSite(props) {\n    _s();\n    const { open, handleClose, handleAddSite, alertOpen } = props;\n    const [siteAddress, setSiteAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [siteType, setSiteType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"NodeRed\");\n    const [siteDescription, setSiteDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleTypeSelect = (event)=>{\n        setSiteType(event.target.value);\n    };\n    const handleUrlChange = (event)=>{\n        setSiteAddress(event.target.value);\n    };\n    const handleDescriptionChange = (event)=>{\n        setSiteDescription(event.target.value);\n    };\n    const onAddClick = ()=>{\n        handleAddSite(siteAddress, siteType, siteDescription);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        open: open,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: \"Add Another Edge Site\"\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: \"To add a new edge site, please select the type and enter your url if applicable.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        id: \"select-edge-site-type\",\n                        select: true,\n                        label: \"Select\",\n                        defaultValue: \"NodeRed\",\n                        value: siteType,\n                        onChange: handleTypeSelect,\n                        helperText: \"Please select the type of your edge site\",\n                        variant: \"standard\",\n                        children: edgeTypes.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                value: option.value,\n                                children: option.value\n                            }, option.value, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        autoFocus: true,\n                        margin: \"dense\",\n                        id: \"enter-site-url\",\n                        label: \"Site address\",\n                        type: \"url\",\n                        value: siteAddress,\n                        onChange: handleUrlChange,\n                        fullWidth: true,\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    alertOpen && siteAddress.trim() === \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        severity: \"error\",\n                        children: \"Site Address cannot be empty.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        autoFocus: true,\n                        margin: \"dense\",\n                        id: \"enter-site-description\",\n                        label: \"Description\",\n                        type: \"text\",\n                        value: siteDescription,\n                        onChange: handleDescriptionChange,\n                        fullWidth: true,\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        onClick: handleClose,\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        onClick: onAddClick,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/AddEdgeSite.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(AddEdgeSite, \"wyYQCMJH2SOwitwWUh7k5VEHJ4E=\");\n_c = AddEdgeSite;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddEdgeSite);\nvar _c;\n$RefreshReg$(_c, \"AddEdgeSite\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyZWVGbG93RWRnZS9BZGRFZGdlU2l0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNBO0FBQ2M7QUFDQTtBQUNRO0FBQ1o7QUFDSjtBQUNGO0FBQ047QUFDeEMsTUFBTVcsWUFBWTtJQUNoQjtRQUFFQyxPQUFPO0lBQVU7SUFDbkI7UUFBRUEsT0FBTztJQUFXO0lBQ3BCO1FBQUVBLE9BQU87SUFBVztDQUNyQjtBQUNELFNBQVNDLFlBQVlDLEtBQUs7O0lBQ3hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsU0FBUyxFQUFFLEdBQUdKO0lBQ3hELE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDb0IsVUFBVUMsWUFBWSxHQUFHckIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDc0IsaUJBQWlCQyxtQkFBbUIsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXZELE1BQU13QixtQkFBbUIsQ0FBQ0M7UUFDeEJKLFlBQVlJLE1BQU1DLE1BQU0sQ0FBQ2YsS0FBSztJQUNoQztJQUNBLE1BQU1nQixrQkFBa0IsQ0FBQ0Y7UUFDdkJOLGVBQWVNLE1BQU1DLE1BQU0sQ0FBQ2YsS0FBSztJQUNuQztJQUNBLE1BQU1pQiwwQkFBMEIsQ0FBQ0g7UUFDL0JGLG1CQUFtQkUsTUFBTUMsTUFBTSxDQUFDZixLQUFLO0lBQ3ZDO0lBQ0EsTUFBTWtCLGFBQWE7UUFDakJiLGNBQWNFLGFBQWFFLFVBQVVFO0lBQ3ZDO0lBQ0EscUJBQ0UsOERBQUNwQiw0REFBTUE7UUFBQ1ksTUFBTUE7OzBCQUNaLDhEQUFDUixpRUFBV0E7MEJBQUM7Ozs7OzswQkFDYiw4REFBQ0YsbUVBQWFBOztrQ0FDWiw4REFBQ0MsdUVBQWlCQTtrQ0FBQzs7Ozs7O2tDQUluQiw4REFBQ0UsK0RBQVNBO3dCQUNSdUIsSUFBRzt3QkFDSEMsTUFBTTt3QkFDTkMsT0FBTTt3QkFDTkMsY0FBYTt3QkFDYnRCLE9BQU9TO3dCQUNQYyxVQUFVVjt3QkFDVlcsWUFBVzt3QkFDWEMsU0FBUTtrQ0FFUDFCLFVBQVUyQixHQUFHLENBQUMsQ0FBQ0MsdUJBQ2QsOERBQUM5Qiw4REFBUUE7Z0NBQW9CRyxPQUFPMkIsT0FBTzNCLEtBQUs7MENBQzdDMkIsT0FBTzNCLEtBQUs7K0JBREEyQixPQUFPM0IsS0FBSzs7Ozs7Ozs7OztrQ0FLL0IsOERBQUNKLCtEQUFTQTt3QkFDUmdDLFNBQVM7d0JBQ1RDLFFBQU87d0JBQ1BWLElBQUc7d0JBQ0hFLE9BQU07d0JBQ05TLE1BQUs7d0JBQ0w5QixPQUFPTzt3QkFDUGdCLFVBQVVQO3dCQUNWZSxTQUFTO3dCQUNUTixTQUFROzs7Ozs7b0JBRVRuQixhQUFhQyxZQUFZeUIsSUFBSSxPQUFPLG9CQUNuQyw4REFBQ2xDLDJEQUFLQTt3QkFBQ21DLFVBQVM7a0NBQVE7Ozs7OztrQ0FFMUIsOERBQUNyQywrREFBU0E7d0JBQ1JnQyxTQUFTO3dCQUNUQyxRQUFPO3dCQUNQVixJQUFHO3dCQUNIRSxPQUFNO3dCQUNOUyxNQUFLO3dCQUNMOUIsT0FBT1c7d0JBQ1BZLFVBQVVOO3dCQUNWYyxTQUFTO3dCQUNUTixTQUFROzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNqQyxtRUFBYUE7O2tDQUNaLDhEQUFDRiw2REFBTUE7d0JBQUM0QyxTQUFTOUI7a0NBQWE7Ozs7OztrQ0FDOUIsOERBQUNkLDZEQUFNQTt3QkFBQzRDLFNBQVNoQjtrQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJDO0dBMUVTakI7S0FBQUE7QUE0RVQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJlZUZsb3dFZGdlL0FkZEVkZ2VTaXRlLmpzPzE5ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0RpYWxvZ0FjdGlvbnNcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaWFsb2dDb250ZW50VGV4dFwiO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbXVpL21hdGVyaWFsL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVJdGVtXCI7XG5pbXBvcnQgQWxlcnQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQWxlcnRcIjtcbmNvbnN0IGVkZ2VUeXBlcyA9IFtcbiAgeyB2YWx1ZTogXCJOb2RlUmVkXCIgfSxcbiAgeyB2YWx1ZTogXCJSZXN0IEFQSVwiIH0sXG4gIHsgdmFsdWU6IFwiUEcvTXlzcWxcIiB9LFxuXTtcbmZ1bmN0aW9uIEFkZEVkZ2VTaXRlKHByb3BzKSB7XG4gIGNvbnN0IHsgb3BlbiwgaGFuZGxlQ2xvc2UsIGhhbmRsZUFkZFNpdGUsIGFsZXJ0T3BlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IFtzaXRlQWRkcmVzcywgc2V0U2l0ZUFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaXRlVHlwZSwgc2V0U2l0ZVR5cGVdID0gdXNlU3RhdGUoXCJOb2RlUmVkXCIpO1xuICBjb25zdCBbc2l0ZURlc2NyaXB0aW9uLCBzZXRTaXRlRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlVHlwZVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgIHNldFNpdGVUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVVybENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNpdGVBZGRyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2l0ZURlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IG9uQWRkQ2xpY2sgPSAoKSA9PiB7XG4gICAgaGFuZGxlQWRkU2l0ZShzaXRlQWRkcmVzcywgc2l0ZVR5cGUsIHNpdGVEZXNjcmlwdGlvbik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvcGVuPXtvcGVufT5cbiAgICAgIDxEaWFsb2dUaXRsZT5BZGQgQW5vdGhlciBFZGdlIFNpdGU8L0RpYWxvZ1RpdGxlPlxuICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgICBUbyBhZGQgYSBuZXcgZWRnZSBzaXRlLCBwbGVhc2Ugc2VsZWN0IHRoZSB0eXBlIGFuZCBlbnRlciB5b3VyIHVybCBpZlxuICAgICAgICAgIGFwcGxpY2FibGUuXG4gICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBpZD1cInNlbGVjdC1lZGdlLXNpdGUtdHlwZVwiXG4gICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgbGFiZWw9XCJTZWxlY3RcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIk5vZGVSZWRcIlxuICAgICAgICAgIHZhbHVlPXtzaXRlVHlwZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVHlwZVNlbGVjdH1cbiAgICAgICAgICBoZWxwZXJUZXh0PVwiUGxlYXNlIHNlbGVjdCB0aGUgdHlwZSBvZiB5b3VyIGVkZ2Ugc2l0ZVwiXG4gICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtlZGdlVHlwZXMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAgICAgIHtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcbiAgICAgICAgICBpZD1cImVudGVyLXNpdGUtdXJsXCJcbiAgICAgICAgICBsYWJlbD1cIlNpdGUgYWRkcmVzc1wiXG4gICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgdmFsdWU9e3NpdGVBZGRyZXNzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVcmxDaGFuZ2V9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgLz5cbiAgICAgICAge2FsZXJ0T3BlbiAmJiBzaXRlQWRkcmVzcy50cmltKCkgPT09IFwiXCIgJiYgKFxuICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCI+U2l0ZSBBZGRyZXNzIGNhbm5vdCBiZSBlbXB0eS48L0FsZXJ0PlxuICAgICAgICApfVxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxuICAgICAgICAgIGlkPVwiZW50ZXItc2l0ZS1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtzaXRlRGVzY3JpcHRpb259XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURlc2NyaXB0aW9uQ2hhbmdlfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXG4gICAgICAgIC8+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25BZGRDbGlja30+QWRkPC9CdXR0b24+XG4gICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEVkZ2VTaXRlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dBY3Rpb25zIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0NvbnRlbnRUZXh0IiwiRGlhbG9nVGl0bGUiLCJUZXh0RmllbGQiLCJNZW51SXRlbSIsIkFsZXJ0IiwiZWRnZVR5cGVzIiwidmFsdWUiLCJBZGRFZGdlU2l0ZSIsInByb3BzIiwib3BlbiIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQWRkU2l0ZSIsImFsZXJ0T3BlbiIsInNpdGVBZGRyZXNzIiwic2V0U2l0ZUFkZHJlc3MiLCJzaXRlVHlwZSIsInNldFNpdGVUeXBlIiwic2l0ZURlc2NyaXB0aW9uIiwic2V0U2l0ZURlc2NyaXB0aW9uIiwiaGFuZGxlVHlwZVNlbGVjdCIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlVXJsQ2hhbmdlIiwiaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UiLCJvbkFkZENsaWNrIiwiaWQiLCJzZWxlY3QiLCJsYWJlbCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwiaGVscGVyVGV4dCIsInZhcmlhbnQiLCJtYXAiLCJvcHRpb24iLCJhdXRvRm9jdXMiLCJtYXJnaW4iLCJ0eXBlIiwiZnVsbFdpZHRoIiwidHJpbSIsInNldmVyaXR5Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FreeFlowEdge/AddEdgeSite.js\n"));

/***/ })

});