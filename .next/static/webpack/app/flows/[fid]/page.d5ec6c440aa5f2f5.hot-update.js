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

/***/ "(app-pages-browser)/./src/components/FreeFlowEdge/EdgeLayout.js":
/*!***************************************************!*\
  !*** ./src/components/FreeFlowEdge/EdgeLayout.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EdgeLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Unstable_Grid2 */ \"(app-pages-browser)/./node_modules/@mui/material/Unstable_Grid2/Grid2.js\");\n/* harmony import */ var _components_FreeFlowEdge_EdgeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FreeFlowEdge/EdgeCard */ \"(app-pages-browser)/./src/components/FreeFlowEdge/EdgeCard.js\");\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Add */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var _AddEdgeSite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddEdgeSite */ \"(app-pages-browser)/./src/components/FreeFlowEdge/AddEdgeSite.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst cardList = [\n    {\n        heading: \"NodeRed\",\n        text: \"Site1\",\n        url: null\n    },\n    {\n        heading: \"NodeRed\",\n        text: \"Site2\",\n        url: \"http://47.245.114.166:1880/\"\n    },\n    {\n        heading: \"NodeRed\",\n        text: \"Site3\",\n        url: \"http://47.245.114.165:1880/\"\n    }\n];\nfunction EdgeLayout() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [alertOpen, setAlertOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [listItems, setListItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cardList);\n    const handleOpenAdd = ()=>{\n        setOpen(true);\n    };\n    const handleClose = ()=>{\n        setOpen(false);\n    };\n    const handleAddSite = (siteAddress, siteType, siteDescription)=>{\n        if (siteAddress.trim() === \"\") {\n            setAlertOpen(true);\n            return;\n        }\n        const newSite = {\n            heading: siteType,\n            text: siteDescription,\n            url: siteAddress\n        };\n        setListItems([\n            ...listItems,\n            newSite\n        ]);\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        container: true,\n        rowSpacing: 3,\n        columnSpacing: 3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                xs: 3,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    sx: {\n                        height: 300,\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        justifyContent: \"center\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            varient: \"outlined\",\n                            onClick: handleOpenAdd\n                        }, void 0, false, {\n                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/EdgeLayout.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddEdgeSite__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            open: open,\n                            handleClose: handleClose,\n                            handleAddSite: handleAddSite,\n                            alertOpen: alertOpen\n                        }, void 0, false, {\n                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/EdgeLayout.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/EdgeLayout.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/EdgeLayout.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            listItems.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    xs: 3,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FreeFlowEdge_EdgeCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            sx: {\n                                height: 300\n                            },\n                            heading: item.heading,\n                            text: item.text,\n                            url: item.url\n                        }, void 0, false, {\n                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/EdgeLayout.js\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/EdgeLayout.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this)\n                }, item.url, false, {\n                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/EdgeLayout.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/FreeFlowEdge/EdgeLayout.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(EdgeLayout, \"fUVRH8p/ff2ofj+GysY74+ErLfE=\");\n_c = EdgeLayout;\nvar _c;\n$RefreshReg$(_c, \"EdgeLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyZWVGbG93RWRnZS9FZGdlTGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0o7QUFFWTtBQUNVO0FBQ1o7QUFFTjtBQUd4QyxNQUFNTyxXQUFXO0lBQ2Y7UUFBRUMsU0FBUztRQUFXQyxNQUFNO1FBQVNDLEtBQUs7SUFBSztJQUMvQztRQUFFRixTQUFTO1FBQVdDLE1BQU07UUFBU0MsS0FBSztJQUE4QjtJQUN4RTtRQUFFRixTQUFTO1FBQVdDLE1BQU07UUFBU0MsS0FBSztJQUE4QjtDQUN6RTtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYSxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2UsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBLENBQUNNO0lBRTNDLE1BQU1XLGdCQUFnQjtRQUNwQkwsUUFBUTtJQUNWO0lBQ0EsTUFBTU0sY0FBYztRQUNsQk4sUUFBUTtJQUNWO0lBRUEsTUFBTU8sZ0JBQWdCLENBQUNDLGFBQWFDLFVBQVVDO1FBQzVDLElBQUlGLFlBQVlHLElBQUksT0FBTyxJQUFJO1lBQzdCVCxhQUFhO1lBQ2I7UUFDRjtRQUNBLE1BQU1VLFVBQVU7WUFDZGpCLFNBQVNjO1lBQ1RiLE1BQU1jO1lBQ05iLEtBQUtXO1FBQ1A7UUFDQUosYUFBYTtlQUFJRDtZQUFXUztTQUFRO1FBQ3BDWixRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ1Ysb0VBQUlBO1FBQUN1QixTQUFTO1FBQUNDLFlBQVk7UUFBR0MsZUFBZTs7MEJBQzVDLDhEQUFDekIsb0VBQUlBO2dCQUFDMEIsSUFBSTswQkFDUiw0RUFBQzNCLHlEQUFHQTtvQkFDRjRCLElBQUk7d0JBQ0ZDLFFBQVE7d0JBQ1JDLFNBQVM7d0JBQ1RDLGVBQWU7d0JBQ2ZDLGdCQUFnQjt3QkFDaEJDLFlBQVk7b0JBQ2Q7O3NDQUVBLDhEQUFDOUIsK0RBQU9BOzRCQUFDK0IsU0FBUTs0QkFBV0MsU0FBU25COzs7Ozs7c0NBQ3JDLDhEQUFDWixvREFBV0E7NEJBQ1ZNLE1BQU1BOzRCQUNOTyxhQUFhQTs0QkFDYkMsZUFBZUE7NEJBQ2ZOLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztZQUloQkUsVUFBVXNCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztnQkFDcEIscUJBQ0UsOERBQUNyQyxvRUFBSUE7b0JBQWdCMEIsSUFBSTs4QkFDdkIsNEVBQUMzQix5REFBR0E7a0NBQ0YsNEVBQUNFLHlFQUFRQTs0QkFDUDBCLElBQUk7Z0NBQUVDLFFBQVE7NEJBQUk7NEJBQ2xCdkIsU0FBUytCLEtBQUsvQixPQUFPOzRCQUNyQkMsTUFBTThCLEtBQUs5QixJQUFJOzRCQUNmQyxLQUFLNkIsS0FBSzdCLEdBQUc7Ozs7Ozs7Ozs7O21CQU5SNkIsS0FBSzdCLEdBQUc7Ozs7O1lBV3ZCOzs7Ozs7O0FBR047R0EvRHdCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GcmVlRmxvd0VkZ2UvRWRnZUxheW91dC5qcz9kOWM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVW5zdGFibGVfR3JpZDJcIjtcbmltcG9ydCBFZGdlQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0ZyZWVGbG93RWRnZS9FZGdlQ2FyZFwiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkXCI7XG5cbmltcG9ydCBBZGRFZGdlU2l0ZSBmcm9tIFwiLi9BZGRFZGdlU2l0ZVwiO1xuaW1wb3J0IHsgQWxleGFuZHJpYSB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmNvbnN0IGNhcmRMaXN0ID0gW1xuICB7IGhlYWRpbmc6IFwiTm9kZVJlZFwiLCB0ZXh0OiBcIlNpdGUxXCIsIHVybDogbnVsbCB9LFxuICB7IGhlYWRpbmc6IFwiTm9kZVJlZFwiLCB0ZXh0OiBcIlNpdGUyXCIsIHVybDogXCJodHRwOi8vNDcuMjQ1LjExNC4xNjY6MTg4MC9cIiB9LFxuICB7IGhlYWRpbmc6IFwiTm9kZVJlZFwiLCB0ZXh0OiBcIlNpdGUzXCIsIHVybDogXCJodHRwOi8vNDcuMjQ1LjExNC4xNjU6MTg4MC9cIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRnZUxheW91dCgpIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWxlcnRPcGVuLCBzZXRBbGVydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGlzdEl0ZW1zLCBzZXRMaXN0SXRlbXNdID0gdXNlU3RhdGUoY2FyZExpc3QpO1xuXG4gIGNvbnN0IGhhbmRsZU9wZW5BZGQgPSAoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkU2l0ZSA9IChzaXRlQWRkcmVzcywgc2l0ZVR5cGUsIHNpdGVEZXNjcmlwdGlvbikgPT4ge1xuICAgIGlmIChzaXRlQWRkcmVzcy50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHNldEFsZXJ0T3Blbih0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3U2l0ZSA9IHtcbiAgICAgIGhlYWRpbmc6IHNpdGVUeXBlLFxuICAgICAgdGV4dDogc2l0ZURlc2NyaXB0aW9uLFxuICAgICAgdXJsOiBzaXRlQWRkcmVzcyxcbiAgICB9O1xuICAgIHNldExpc3RJdGVtcyhbLi4ubGlzdEl0ZW1zLCBuZXdTaXRlXSk7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgcm93U3BhY2luZz17M30gY29sdW1uU3BhY2luZz17M30+XG4gICAgICA8R3JpZCB4cz17M30+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBZGRJY29uIHZhcmllbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZU9wZW5BZGR9PjwvQWRkSWNvbj5cbiAgICAgICAgICA8QWRkRWRnZVNpdGVcbiAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICBoYW5kbGVBZGRTaXRlPXtoYW5kbGVBZGRTaXRlfVxuICAgICAgICAgICAgYWxlcnRPcGVuPXthbGVydE9wZW59XG4gICAgICAgICAgPjwvQWRkRWRnZVNpdGU+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9HcmlkPlxuICAgICAge2xpc3RJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEdyaWQga2V5PXtpdGVtLnVybH0geHM9ezN9PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEVkZ2VDYXJkXG4gICAgICAgICAgICAgICAgc3g9e3sgaGVpZ2h0OiAzMDAgfX1cbiAgICAgICAgICAgICAgICBoZWFkaW5nPXtpdGVtLmhlYWRpbmd9XG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIHVybD17aXRlbS51cmx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkdyaWQiLCJFZGdlQ2FyZCIsIkFkZEljb24iLCJBZGRFZGdlU2l0ZSIsImNhcmRMaXN0IiwiaGVhZGluZyIsInRleHQiLCJ1cmwiLCJFZGdlTGF5b3V0Iiwib3BlbiIsInNldE9wZW4iLCJhbGVydE9wZW4iLCJzZXRBbGVydE9wZW4iLCJsaXN0SXRlbXMiLCJzZXRMaXN0SXRlbXMiLCJoYW5kbGVPcGVuQWRkIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVBZGRTaXRlIiwic2l0ZUFkZHJlc3MiLCJzaXRlVHlwZSIsInNpdGVEZXNjcmlwdGlvbiIsInRyaW0iLCJuZXdTaXRlIiwiY29udGFpbmVyIiwicm93U3BhY2luZyIsImNvbHVtblNwYWNpbmciLCJ4cyIsInN4IiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ2YXJpZW50Iiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FreeFlowEdge/EdgeLayout.js\n"));

/***/ })

});