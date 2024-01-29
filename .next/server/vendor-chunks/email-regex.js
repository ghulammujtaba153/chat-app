"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/email-regex";
exports.ids = ["vendor-chunks/email-regex"];
exports.modules = {

/***/ "(ssr)/./node_modules/email-regex/index.js":
/*!*******************************************!*\
  !*** ./node_modules/email-regex/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ emailRegex)\n/* harmony export */ });\nconst regex = \"[^\\\\.\\\\s@:](?:[^\\\\s@:]*[^\\\\s@:\\\\.])?@[^\\\\.\\\\s@]+(?:\\\\.[^\\\\.\\\\s@]+)*\";\nfunction emailRegex({ exact } = {}) {\n    return exact ? new RegExp(`^${regex}$`) : new RegExp(regex, \"g\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWwtcmVnZXgvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFFBQVE7QUFFQyxTQUFTQyxXQUFXLEVBQUNDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxPQUFPQSxRQUFRLElBQUlDLE9BQU8sQ0FBQyxDQUFDLEVBQUVILE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSUcsT0FBT0gsT0FBTztBQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9lbWFpbC1yZWdleC9pbmRleC5qcz9iZDllIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZ2V4ID0gJ1teXFxcXC5cXFxcc0A6XSg/OlteXFxcXHNAOl0qW15cXFxcc0A6XFxcXC5dKT9AW15cXFxcLlxcXFxzQF0rKD86XFxcXC5bXlxcXFwuXFxcXHNAXSspKic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVtYWlsUmVnZXgoe2V4YWN0fSA9IHt9KSB7XG5cdHJldHVybiBleGFjdCA/IG5ldyBSZWdFeHAoYF4ke3JlZ2V4fSRgKSA6IG5ldyBSZWdFeHAocmVnZXgsICdnJyk7XG59XG4iXSwibmFtZXMiOlsicmVnZXgiLCJlbWFpbFJlZ2V4IiwiZXhhY3QiLCJSZWdFeHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/email-regex/index.js\n");

/***/ })

};
;