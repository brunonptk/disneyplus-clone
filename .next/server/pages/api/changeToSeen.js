"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/changeToSeen";
exports.ids = ["pages/api/changeToSeen"];
exports.modules = {

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "./pages/api/changeToSeen.js":
/*!***********************************!*\
  !*** ./pages/api/changeToSeen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async ({ body  }, res)=>{\n    const graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(process.env.ENDPOINT, {\n        headers: {\n            \"Authorization \": process.env.GRAPH_CMS_TOKEN\n        }\n    });\n    await graphcms.request(`\n        mutation($slug: String!) {\n            updateVideo(where:\n              { slug : $slug},\n              data: { seen: true} \n            ) {\n              id,\n              title,\n              seen\n            }\n          }\n        `, {\n        slug: body.slug\n    });\n    await graphcms.request(`mutation publishVideo($slug: String) {\n        publishVideo(where: { slug: $slug}, to: PUBLISHED) {\n            slug\n            }\n        } \n        `, {\n        slug: body.slug\n    });\n    res.status(201).json({\n        slug: body.slug\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hhbmdlVG9TZWVuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxpRUFBTSxPQUFnQixDQUFDLENBQUNDLElBQUksR0FBQyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNwQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNILDBEQUFhLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLEVBQUUsQ0FBQztRQUN0REMsT0FBTyxFQUFFLENBQUM7WUFBQyxDQUFnQixpQkFBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGVBQWU7UUFBQSxDQUFDO0lBRTlELENBQUM7SUFHRCxLQUFLLENBQUNMLFFBQVEsQ0FBQ00sT0FBTyxFQUNqQjtRQVlDQyxJQUFJLEVBQUVULElBQUksQ0FBQ1MsSUFBSTtJQUFBLENBQUM7SUFHdEIsS0FBSyxDQUFDUCxRQUFRLENBQUNNLE9BQU8sRUFDakI7UUFNRUMsSUFBSSxFQUFFVCxJQUFJLENBQUNTLElBQUk7SUFBQyxDQUFDO0lBRXhCUixHQUFHLENBQUNTLE1BQU0sQ0FBQztRQUFZRCxJQUFJLEVBQUVULElBQUksQ0FBQ1M7SUFBSyxDQUFDO0FBRzVDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNuZXktY2xvbmUvLi9wYWdlcy9hcGkvY2hhbmdlVG9TZWVuLmpzP2ZjYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgYm9keX0sIHJlcykgPT4ge1xyXG4gICAgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudChwcm9jZXNzLmVudi5FTkRQT0lOVCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJBdXRob3JpemF0aW9uIFwiIDogcHJvY2Vzcy5lbnYuR1JBUEhfQ01TX1RPS0VOfVxyXG5cclxuICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChcclxuICAgICAgICBgXHJcbiAgICAgICAgbXV0YXRpb24oJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgICAgICAgdXBkYXRlVmlkZW8od2hlcmU6XHJcbiAgICAgICAgICAgICAgeyBzbHVnIDogJHNsdWd9LFxyXG4gICAgICAgICAgICAgIGRhdGE6IHsgc2VlbjogdHJ1ZX0gXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgIHNlZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgeyBzbHVnOiBib2R5LnNsdWd9XHJcbiAgICApXHJcblxyXG4gICAgYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChcclxuICAgICAgICBgbXV0YXRpb24gcHVibGlzaFZpZGVvKCRzbHVnOiBTdHJpbmcpIHtcclxuICAgICAgICBwdWJsaXNoVmlkZW8od2hlcmU6IHsgc2x1ZzogJHNsdWd9LCB0bzogUFVCTElTSEVEKSB7XHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgYFxyXG4gICAgICAgICx7IHNsdWc6IGJvZHkuc2x1ZyB9XHJcbiAgICApXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHNsdWc6IGJvZHkuc2x1ZyB9KVxyXG5cclxuICAgIFxyXG59Il0sIm5hbWVzIjpbIkdyYXBoUUxDbGllbnQiLCJib2R5IiwicmVzIiwiZ3JhcGhjbXMiLCJwcm9jZXNzIiwiZW52IiwiRU5EUE9JTlQiLCJoZWFkZXJzIiwiR1JBUEhfQ01TX1RPS0VOIiwicmVxdWVzdCIsInNsdWciLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/changeToSeen.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/changeToSeen.js"));
module.exports = __webpack_exports__;

})();