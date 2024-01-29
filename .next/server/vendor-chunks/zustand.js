"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zustand";
exports.ids = ["vendor-chunks/zustand"];
exports.modules = {

/***/ "(ssr)/./node_modules/zustand/esm/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/zustand/esm/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create: () => (/* binding */ create),\n/* harmony export */   createStore: () => (/* reexport safe */ zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore),\n/* harmony export */   \"default\": () => (/* binding */ react),\n/* harmony export */   useStore: () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/vanilla */ \"(ssr)/./node_modules/zustand/esm/vanilla.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector.js */ \"(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js\");\n\n\n\n\nconst { useDebugValue } = react__WEBPACK_IMPORTED_MODULE_1__;\nconst { useSyncExternalStoreWithSelector } = use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__;\nlet didWarnAboutEqualityFn = false;\nconst identity = (arg)=>arg;\nfunction useStore(api, selector = identity, equalityFn) {\n    if (( false ? 0 : void 0) !== \"production\" && equalityFn && !didWarnAboutEqualityFn) {\n        console.warn(\"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937\");\n        didWarnAboutEqualityFn = true;\n    }\n    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getInitialState, selector, equalityFn);\n    useDebugValue(slice);\n    return slice;\n}\nconst createImpl = (createState)=>{\n    if (( false ? 0 : void 0) !== \"production\" && typeof createState !== \"function\") {\n        console.warn(\"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.\");\n    }\n    const api = typeof createState === \"function\" ? (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore)(createState) : createState;\n    const useBoundStore = (selector, equalityFn)=>useStore(api, selector, equalityFn);\n    Object.assign(useBoundStore, api);\n    return useBoundStore;\n};\nconst create = (createState)=>createState ? createImpl(createState) : createImpl;\nvar react = (createState)=>{\n    if (( false ? 0 : void 0) !== \"production\") {\n        console.warn(\"[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`.\");\n    }\n    return create(createState);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUNDO0FBQ3VEO0FBRXhGLE1BQU0sRUFBRUcsYUFBYSxFQUFFLEdBQUdGLGtDQUFZQTtBQUN0QyxNQUFNLEVBQUVHLGdDQUFnQyxFQUFFLEdBQUdGLDBFQUEyQkE7QUFDeEUsSUFBSUcseUJBQXlCO0FBQzdCLE1BQU1DLFdBQVcsQ0FBQ0MsTUFBUUE7QUFDMUIsU0FBU0MsU0FBU0MsR0FBRyxFQUFFQyxXQUFXSixRQUFRLEVBQUVLLFVBQVU7SUFDcEQsSUFBSSxDQUFDLE1BQWUsR0FBRyxDQUFvQixHQUFHLEtBQUssT0FBTyxnQkFBZ0JBLGNBQWMsQ0FBQ04sd0JBQXdCO1FBQy9HUyxRQUFRQyxJQUFJLENBQ1Y7UUFFRlYseUJBQXlCO0lBQzNCO0lBQ0EsTUFBTVcsUUFBUVosaUNBQ1pLLElBQUlRLFNBQVMsRUFDYlIsSUFBSVMsUUFBUSxFQUNaVCxJQUFJVSxjQUFjLElBQUlWLElBQUlXLGVBQWUsRUFDekNWLFVBQ0FDO0lBRUZSLGNBQWNhO0lBQ2QsT0FBT0E7QUFDVDtBQUNBLE1BQU1LLGFBQWEsQ0FBQ0M7SUFDbEIsSUFBSSxDQUFDLE1BQWUsR0FBRyxDQUFvQixHQUFHLEtBQUssT0FBTyxnQkFBZ0IsT0FBT0EsZ0JBQWdCLFlBQVk7UUFDM0dSLFFBQVFDLElBQUksQ0FDVjtJQUVKO0lBQ0EsTUFBTU4sTUFBTSxPQUFPYSxnQkFBZ0IsYUFBYXRCLDREQUFXQSxDQUFDc0IsZUFBZUE7SUFDM0UsTUFBTUMsZ0JBQWdCLENBQUNiLFVBQVVDLGFBQWVILFNBQVNDLEtBQUtDLFVBQVVDO0lBQ3hFYSxPQUFPQyxNQUFNLENBQUNGLGVBQWVkO0lBQzdCLE9BQU9jO0FBQ1Q7QUFDQSxNQUFNRyxTQUFTLENBQUNKLGNBQWdCQSxjQUFjRCxXQUFXQyxlQUFlRDtBQUN4RSxJQUFJTSxRQUFRLENBQUNMO0lBQ1gsSUFBSSxDQUFDLE1BQWUsR0FBRyxDQUFvQixHQUFHLEtBQUssT0FBTyxjQUFjO1FBQ3RFUixRQUFRQyxJQUFJLENBQ1Y7SUFFSjtJQUNBLE9BQU9XLE9BQU9KO0FBQ2hCO0FBRThDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3p1c3RhbmQvZXNtL2luZGV4Lm1qcz8yZTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnenVzdGFuZC92YW5pbGxhJztcbmV4cG9ydCAqIGZyb20gJ3p1c3RhbmQvdmFuaWxsYSc7XG5pbXBvcnQgUmVhY3RFeHBvcnRzIGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTeW5jRXh0ZXJuYWxTdG9yZUV4cG9ydHMgZnJvbSAndXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS93aXRoLXNlbGVjdG9yLmpzJztcblxuY29uc3QgeyB1c2VEZWJ1Z1ZhbHVlIH0gPSBSZWFjdEV4cG9ydHM7XG5jb25zdCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIH0gPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZUV4cG9ydHM7XG5sZXQgZGlkV2FybkFib3V0RXF1YWxpdHlGbiA9IGZhbHNlO1xuY29uc3QgaWRlbnRpdHkgPSAoYXJnKSA9PiBhcmc7XG5mdW5jdGlvbiB1c2VTdG9yZShhcGksIHNlbGVjdG9yID0gaWRlbnRpdHksIGVxdWFsaXR5Rm4pIHtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmIGVxdWFsaXR5Rm4gJiYgIWRpZFdhcm5BYm91dEVxdWFsaXR5Rm4pIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIltERVBSRUNBVEVEXSBVc2UgYGNyZWF0ZVdpdGhFcXVhbGl0eUZuYCBpbnN0ZWFkIG9mIGBjcmVhdGVgIG9yIHVzZSBgdXNlU3RvcmVXaXRoRXF1YWxpdHlGbmAgaW5zdGVhZCBvZiBgdXNlU3RvcmVgLiBUaGV5IGNhbiBiZSBpbXBvcnRlZCBmcm9tICd6dXN0YW5kL3RyYWRpdGlvbmFsJy4gaHR0cHM6Ly9naXRodWIuY29tL3BtbmRycy96dXN0YW5kL2Rpc2N1c3Npb25zLzE5MzdcIlxuICAgICk7XG4gICAgZGlkV2FybkFib3V0RXF1YWxpdHlGbiA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc2xpY2UgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihcbiAgICBhcGkuc3Vic2NyaWJlLFxuICAgIGFwaS5nZXRTdGF0ZSxcbiAgICBhcGkuZ2V0U2VydmVyU3RhdGUgfHwgYXBpLmdldEluaXRpYWxTdGF0ZSxcbiAgICBzZWxlY3RvcixcbiAgICBlcXVhbGl0eUZuXG4gICk7XG4gIHVzZURlYnVnVmFsdWUoc2xpY2UpO1xuICByZXR1cm4gc2xpY2U7XG59XG5jb25zdCBjcmVhdGVJbXBsID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiB0eXBlb2YgY3JlYXRlU3RhdGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIFBhc3NpbmcgYSB2YW5pbGxhIHN0b3JlIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gSW5zdGVhZCB1c2UgYGltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnenVzdGFuZCdgLlwiXG4gICAgKTtcbiAgfVxuICBjb25zdCBhcGkgPSB0eXBlb2YgY3JlYXRlU3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNyZWF0ZVN0b3JlKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZVN0YXRlO1xuICBjb25zdCB1c2VCb3VuZFN0b3JlID0gKHNlbGVjdG9yLCBlcXVhbGl0eUZuKSA9PiB1c2VTdG9yZShhcGksIHNlbGVjdG9yLCBlcXVhbGl0eUZuKTtcbiAgT2JqZWN0LmFzc2lnbih1c2VCb3VuZFN0b3JlLCBhcGkpO1xuICByZXR1cm4gdXNlQm91bmRTdG9yZTtcbn07XG5jb25zdCBjcmVhdGUgPSAoY3JlYXRlU3RhdGUpID0+IGNyZWF0ZVN0YXRlID8gY3JlYXRlSW1wbChjcmVhdGVTdGF0ZSkgOiBjcmVhdGVJbXBsO1xudmFyIHJlYWN0ID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIERlZmF1bHQgZXhwb3J0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgdXNlIGBpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICd6dXN0YW5kJ2AuXCJcbiAgICApO1xuICB9XG4gIHJldHVybiBjcmVhdGUoY3JlYXRlU3RhdGUpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlLCByZWFjdCBhcyBkZWZhdWx0LCB1c2VTdG9yZSB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiUmVhY3RFeHBvcnRzIiwidXNlU3luY0V4dGVybmFsU3RvcmVFeHBvcnRzIiwidXNlRGVidWdWYWx1ZSIsInVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIiwiZGlkV2FybkFib3V0RXF1YWxpdHlGbiIsImlkZW50aXR5IiwiYXJnIiwidXNlU3RvcmUiLCJhcGkiLCJzZWxlY3RvciIsImVxdWFsaXR5Rm4iLCJlbnYiLCJNT0RFIiwiY29uc29sZSIsIndhcm4iLCJzbGljZSIsInN1YnNjcmliZSIsImdldFN0YXRlIiwiZ2V0U2VydmVyU3RhdGUiLCJnZXRJbml0aWFsU3RhdGUiLCJjcmVhdGVJbXBsIiwiY3JlYXRlU3RhdGUiLCJ1c2VCb3VuZFN0b3JlIiwiT2JqZWN0IiwiYXNzaWduIiwiY3JlYXRlIiwicmVhY3QiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/zustand/esm/shallow.mjs":
/*!**********************************************!*\
  !*** ./node_modules/zustand/esm/shallow.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shallow),\n/* harmony export */   shallow: () => (/* binding */ shallow$1)\n/* harmony export */ });\nfunction shallow$1(objA, objB) {\n    if (Object.is(objA, objB)) {\n        return true;\n    }\n    if (typeof objA !== \"object\" || objA === null || typeof objB !== \"object\" || objB === null) {\n        return false;\n    }\n    if (objA instanceof Map && objB instanceof Map) {\n        if (objA.size !== objB.size) return false;\n        for (const [key, value] of objA){\n            if (!Object.is(value, objB.get(key))) {\n                return false;\n            }\n        }\n        return true;\n    }\n    if (objA instanceof Set && objB instanceof Set) {\n        if (objA.size !== objB.size) return false;\n        for (const value of objA){\n            if (!objB.has(value)) {\n                return false;\n            }\n        }\n        return true;\n    }\n    const keysA = Object.keys(objA);\n    if (keysA.length !== Object.keys(objB).length) {\n        return false;\n    }\n    for(let i = 0; i < keysA.length; i++){\n        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {\n            return false;\n        }\n    }\n    return true;\n}\nvar shallow = (objA, objB)=>{\n    if (( false ? 0 : void 0) !== \"production\") {\n        console.warn(\"[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`.\");\n    }\n    return shallow$1(objA, objB);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vc2hhbGxvdy5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxVQUFVQyxJQUFJLEVBQUVDLElBQUk7SUFDM0IsSUFBSUMsT0FBT0MsRUFBRSxDQUFDSCxNQUFNQyxPQUFPO1FBQ3pCLE9BQU87SUFDVDtJQUNBLElBQUksT0FBT0QsU0FBUyxZQUFZQSxTQUFTLFFBQVEsT0FBT0MsU0FBUyxZQUFZQSxTQUFTLE1BQU07UUFDMUYsT0FBTztJQUNUO0lBQ0EsSUFBSUQsZ0JBQWdCSSxPQUFPSCxnQkFBZ0JHLEtBQUs7UUFDOUMsSUFBSUosS0FBS0ssSUFBSSxLQUFLSixLQUFLSSxJQUFJLEVBQ3pCLE9BQU87UUFDVCxLQUFLLE1BQU0sQ0FBQ0MsS0FBS0MsTUFBTSxJQUFJUCxLQUFNO1lBQy9CLElBQUksQ0FBQ0UsT0FBT0MsRUFBRSxDQUFDSSxPQUFPTixLQUFLTyxHQUFHLENBQUNGLE9BQU87Z0JBQ3BDLE9BQU87WUFDVDtRQUNGO1FBQ0EsT0FBTztJQUNUO0lBQ0EsSUFBSU4sZ0JBQWdCUyxPQUFPUixnQkFBZ0JRLEtBQUs7UUFDOUMsSUFBSVQsS0FBS0ssSUFBSSxLQUFLSixLQUFLSSxJQUFJLEVBQ3pCLE9BQU87UUFDVCxLQUFLLE1BQU1FLFNBQVNQLEtBQU07WUFDeEIsSUFBSSxDQUFDQyxLQUFLUyxHQUFHLENBQUNILFFBQVE7Z0JBQ3BCLE9BQU87WUFDVDtRQUNGO1FBQ0EsT0FBTztJQUNUO0lBQ0EsTUFBTUksUUFBUVQsT0FBT1UsSUFBSSxDQUFDWjtJQUMxQixJQUFJVyxNQUFNRSxNQUFNLEtBQUtYLE9BQU9VLElBQUksQ0FBQ1gsTUFBTVksTUFBTSxFQUFFO1FBQzdDLE9BQU87SUFDVDtJQUNBLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxNQUFNRSxNQUFNLEVBQUVDLElBQUs7UUFDckMsSUFBSSxDQUFDWixPQUFPYSxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDaEIsTUFBTVUsS0FBSyxDQUFDRyxFQUFFLEtBQUssQ0FBQ1osT0FBT0MsRUFBRSxDQUFDSCxJQUFJLENBQUNXLEtBQUssQ0FBQ0csRUFBRSxDQUFDLEVBQUViLElBQUksQ0FBQ1UsS0FBSyxDQUFDRyxFQUFFLENBQUMsR0FBRztZQUN2RyxPQUFPO1FBQ1Q7SUFDRjtJQUNBLE9BQU87QUFDVDtBQUVBLElBQUlJLFVBQVUsQ0FBQ2xCLE1BQU1DO0lBQ25CLElBQUksQ0FBQyxNQUFlLEdBQUcsQ0FBb0IsR0FBRyxLQUFLLE9BQU8sY0FBYztRQUN0RW9CLFFBQVFDLElBQUksQ0FDVjtJQUVKO0lBQ0EsT0FBT3ZCLFVBQVVDLE1BQU1DO0FBQ3pCO0FBRW9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3p1c3RhbmQvZXNtL3NoYWxsb3cubWpzPzNhYjUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2hhbGxvdyQxKG9iakEsIG9iakIpIHtcbiAgaWYgKE9iamVjdC5pcyhvYmpBLCBvYmpCKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG9iakEgaW5zdGFuY2VvZiBNYXAgJiYgb2JqQiBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGlmIChvYmpBLnNpemUgIT09IG9iakIuc2l6ZSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBvYmpBKSB7XG4gICAgICBpZiAoIU9iamVjdC5pcyh2YWx1ZSwgb2JqQi5nZXQoa2V5KSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAob2JqQSBpbnN0YW5jZW9mIFNldCAmJiBvYmpCIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgaWYgKG9iakEuc2l6ZSAhPT0gb2JqQi5zaXplKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2Ygb2JqQSkge1xuICAgICAgaWYgKCFvYmpCLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhvYmpCKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhT2JqZWN0LmlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBzaGFsbG93ID0gKG9iakEsIG9iakIpID0+IHtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbREVQUkVDQVRFRF0gRGVmYXVsdCBleHBvcnQgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCB1c2UgYGltcG9ydCB7IHNoYWxsb3cgfSBmcm9tICd6dXN0YW5kL3NoYWxsb3cnYC5cIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHNoYWxsb3ckMShvYmpBLCBvYmpCKTtcbn07XG5cbmV4cG9ydCB7IHNoYWxsb3cgYXMgZGVmYXVsdCwgc2hhbGxvdyQxIGFzIHNoYWxsb3cgfTtcbiJdLCJuYW1lcyI6WyJzaGFsbG93JDEiLCJvYmpBIiwib2JqQiIsIk9iamVjdCIsImlzIiwiTWFwIiwic2l6ZSIsImtleSIsInZhbHVlIiwiZ2V0IiwiU2V0IiwiaGFzIiwia2V5c0EiLCJrZXlzIiwibGVuZ3RoIiwiaSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNoYWxsb3ciLCJlbnYiLCJNT0RFIiwiY29uc29sZSIsIndhcm4iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/shallow.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/zustand/esm/vanilla.mjs":
/*!**********************************************!*\
  !*** ./node_modules/zustand/esm/vanilla.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore),\n/* harmony export */   \"default\": () => (/* binding */ vanilla)\n/* harmony export */ });\nconst createStoreImpl = (createState)=>{\n    let state;\n    const listeners = /* @__PURE__ */ new Set();\n    const setState = (partial, replace)=>{\n        const nextState = typeof partial === \"function\" ? partial(state) : partial;\n        if (!Object.is(nextState, state)) {\n            const previousState = state;\n            state = (replace != null ? replace : typeof nextState !== \"object\" || nextState === null) ? nextState : Object.assign({}, state, nextState);\n            listeners.forEach((listener)=>listener(state, previousState));\n        }\n    };\n    const getState = ()=>state;\n    const getInitialState = ()=>initialState;\n    const subscribe = (listener)=>{\n        listeners.add(listener);\n        return ()=>listeners.delete(listener);\n    };\n    const destroy = ()=>{\n        if (( false ? 0 : void 0) !== \"production\") {\n            console.warn(\"[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.\");\n        }\n        listeners.clear();\n    };\n    const api = {\n        setState,\n        getState,\n        getInitialState,\n        subscribe,\n        destroy\n    };\n    const initialState = state = createState(setState, getState, api);\n    return api;\n};\nconst createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;\nvar vanilla = (createState)=>{\n    if (( false ? 0 : void 0) !== \"production\") {\n        console.warn(\"[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.\");\n    }\n    return createStore(createState);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vdmFuaWxsYS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxrQkFBa0IsQ0FBQ0M7SUFDdkIsSUFBSUM7SUFDSixNQUFNQyxZQUFZLGFBQWEsR0FBRyxJQUFJQztJQUN0QyxNQUFNQyxXQUFXLENBQUNDLFNBQVNDO1FBQ3pCLE1BQU1DLFlBQVksT0FBT0YsWUFBWSxhQUFhQSxRQUFRSixTQUFTSTtRQUNuRSxJQUFJLENBQUNHLE9BQU9DLEVBQUUsQ0FBQ0YsV0FBV04sUUFBUTtZQUNoQyxNQUFNUyxnQkFBZ0JUO1lBQ3RCQSxRQUFRLENBQUNLLFdBQVcsT0FBT0EsVUFBVSxPQUFPQyxjQUFjLFlBQVlBLGNBQWMsSUFBRyxJQUFLQSxZQUFZQyxPQUFPRyxNQUFNLENBQUMsQ0FBQyxHQUFHVixPQUFPTTtZQUNqSUwsVUFBVVUsT0FBTyxDQUFDLENBQUNDLFdBQWFBLFNBQVNaLE9BQU9TO1FBQ2xEO0lBQ0Y7SUFDQSxNQUFNSSxXQUFXLElBQU1iO0lBQ3ZCLE1BQU1jLGtCQUFrQixJQUFNQztJQUM5QixNQUFNQyxZQUFZLENBQUNKO1FBQ2pCWCxVQUFVZ0IsR0FBRyxDQUFDTDtRQUNkLE9BQU8sSUFBTVgsVUFBVWlCLE1BQU0sQ0FBQ047SUFDaEM7SUFDQSxNQUFNTyxVQUFVO1FBQ2QsSUFBSSxDQUFDLE1BQWUsR0FBRyxDQUFvQixHQUFHLEtBQUssT0FBTyxjQUFjO1lBQ3RFRyxRQUFRQyxJQUFJLENBQ1Y7UUFFSjtRQUNBdEIsVUFBVXVCLEtBQUs7SUFDakI7SUFDQSxNQUFNQyxNQUFNO1FBQUV0QjtRQUFVVTtRQUFVQztRQUFpQkU7UUFBV0c7SUFBUTtJQUN0RSxNQUFNSixlQUFlZixRQUFRRCxZQUFZSSxVQUFVVSxVQUFVWTtJQUM3RCxPQUFPQTtBQUNUO0FBQ0EsTUFBTUMsY0FBYyxDQUFDM0IsY0FBZ0JBLGNBQWNELGdCQUFnQkMsZUFBZUQ7QUFDbEYsSUFBSTZCLFVBQVUsQ0FBQzVCO0lBQ2IsSUFBSSxDQUFDLE1BQWUsR0FBRyxDQUFvQixHQUFHLEtBQUssT0FBTyxjQUFjO1FBQ3RFdUIsUUFBUUMsSUFBSSxDQUNWO0lBRUo7SUFDQSxPQUFPRyxZQUFZM0I7QUFDckI7QUFFMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vdmFuaWxsYS5tanM/OWQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVTdG9yZUltcGwgPSAoY3JlYXRlU3RhdGUpID0+IHtcbiAgbGV0IHN0YXRlO1xuICBjb25zdCBsaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBzZXRTdGF0ZSA9IChwYXJ0aWFsLCByZXBsYWNlKSA9PiB7XG4gICAgY29uc3QgbmV4dFN0YXRlID0gdHlwZW9mIHBhcnRpYWwgPT09IFwiZnVuY3Rpb25cIiA/IHBhcnRpYWwoc3RhdGUpIDogcGFydGlhbDtcbiAgICBpZiAoIU9iamVjdC5pcyhuZXh0U3RhdGUsIHN0YXRlKSkge1xuICAgICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHN0YXRlO1xuICAgICAgc3RhdGUgPSAocmVwbGFjZSAhPSBudWxsID8gcmVwbGFjZSA6IHR5cGVvZiBuZXh0U3RhdGUgIT09IFwib2JqZWN0XCIgfHwgbmV4dFN0YXRlID09PSBudWxsKSA/IG5leHRTdGF0ZSA6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXh0U3RhdGUpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihzdGF0ZSwgcHJldmlvdXNTdGF0ZSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZTtcbiAgY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gKCkgPT4gaW5pdGlhbFN0YXRlO1xuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4gbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiW0RFUFJFQ0FURURdIFRoZSBgZGVzdHJveWAgbWV0aG9kIHdpbGwgYmUgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gSW5zdGVhZCB1c2UgdW5zdWJzY3JpYmUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgc3Vic2NyaWJlLiBFdmVyeXRoaW5nIHdpbGwgYmUgZ2FyYmFnZS1jb2xsZWN0ZWQgaWYgc3RvcmUgaXMgZ2FyYmFnZS1jb2xsZWN0ZWQuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICB9O1xuICBjb25zdCBhcGkgPSB7IHNldFN0YXRlLCBnZXRTdGF0ZSwgZ2V0SW5pdGlhbFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3kgfTtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gc3RhdGUgPSBjcmVhdGVTdGF0ZShzZXRTdGF0ZSwgZ2V0U3RhdGUsIGFwaSk7XG4gIHJldHVybiBhcGk7XG59O1xuY29uc3QgY3JlYXRlU3RvcmUgPSAoY3JlYXRlU3RhdGUpID0+IGNyZWF0ZVN0YXRlID8gY3JlYXRlU3RvcmVJbXBsKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZVN0b3JlSW1wbDtcbnZhciB2YW5pbGxhID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIERlZmF1bHQgZXhwb3J0IGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQgdXNlIGltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnenVzdGFuZC92YW5pbGxhJy5cIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKGNyZWF0ZVN0YXRlKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlLCB2YW5pbGxhIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZUltcGwiLCJjcmVhdGVTdGF0ZSIsInN0YXRlIiwibGlzdGVuZXJzIiwiU2V0Iiwic2V0U3RhdGUiLCJwYXJ0aWFsIiwicmVwbGFjZSIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImlzIiwicHJldmlvdXNTdGF0ZSIsImFzc2lnbiIsImZvckVhY2giLCJsaXN0ZW5lciIsImdldFN0YXRlIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaW5pdGlhbFN0YXRlIiwic3Vic2NyaWJlIiwiYWRkIiwiZGVsZXRlIiwiZGVzdHJveSIsImVudiIsIk1PREUiLCJjb25zb2xlIiwid2FybiIsImNsZWFyIiwiYXBpIiwiY3JlYXRlU3RvcmUiLCJ2YW5pbGxhIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/vanilla.mjs\n");

/***/ })

};
;