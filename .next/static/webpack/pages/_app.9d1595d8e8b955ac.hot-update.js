"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/Projects.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/Projects.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".projects-section {\\n  margin: 5em 0 15em 0;\\n  width: 100%;\\n  height: 80vh;\\n  margin: 0px auto;\\n  padding: 1vh 0px;\\n  max-width: 1000px;\\n  margin-bottom: 5vh;\\n  background-color: aquamarine;\\n}\\n\\n.project-wrapper {\\n  display: flex;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.project-content {\\n  max-width: 50%;\\n}\\n\\n.project-overline {\\n  margin: 10px 0px;\\n  color: rgb(109, 131, 242);\\n  font-family: \\\"SF Mono\\\",\\\"Fira Code\\\",\\\"Fira Mono\\\",\\\"Roboto Mono\\\",monospace;\\n  font-size: 13px;\\n  font-weight: 400;\\n}\\n\\n.project-title {\\n  color: #ccd6f6;\\n  font-size: 28px;\\n  z-index: 9999;\\n  position: relative;\\n\\n}\\n\\n.project-title:hover {\\n  color: rgb(109, 131, 242);\\n}\\n\\n@media (min-width: 768px) {\\n  .project-title {\\n    margin: 0px 0px 20px;\\n  }\\n}\\n\\n.project-description {\\n  box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);\\n  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);\\n  position: relative;\\n  z-index: 2;\\n  padding: 25px;\\n  border-radius: 4px;\\n  background-color: #112240;\\n  color: #a8b2d1;\\n  font-size: 14px;\\n  font-family: 'Montserrat', 'sans-serif';\\n}\\n\\n.project-tech-list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: relative;\\n  z-index: 2;\\n  margin: 25px 0px 10px;\\n  padding: 0px;\\n  list-style: none;\\n}\\n\\n.projects-section:nth-of-type(2n+1) .project-tech-list {\\n  justify-content: flex-end;\\n}\\n\\n.projects-section .project-tech-list li {\\n  margin: 0px 20px 5px 0px;\\n  color: #a8b2d1;\\n  font-family: \\\"SF Mono\\\",\\\"Fira Code\\\",\\\"Fira Mono\\\",\\\"Roboto Mono\\\",monospace;\\n  font-size: 13px;\\n  white-space: nowrap;\\n}\\n\\n.projects-section:nth-of-type(2n+1) .project-tech-list li {\\n  margin: 0px 0px 5px 20px;\\n}\\n\\n.project-links {\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n  margin-top: 10px;\\n  margin-left: -10px;\\n}\\n\\n.project-links a {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 10px;\\n}\\n\\n.projects-section .project-image {\\n  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);\\n  position: relative;\\n  z-index: 1;\\n  margin-left: -75px;\\n  margin-top: 65px;\\n}\\n\\n@media (max-width: 1050px) {\\n  .project-content {\\n    width: 75%;\\n  }\\n}\\n\\n@media (max-width: 925px) {\\n  .project-content {\\n    width: 100%;\\n  }\\n}\\n\\n@media (max-width: 810px) {\\n  .project-content {\\n    width: 150%;\\n  }\\n}\\n\\n@media (max-width: 950px) {\\n  .project-title {\\n    margin-top: 0.5em;\\n  }\\n  .project-description {\\n    margin-top: 190px;\\n    width: 70%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 400px;\\n    margin-left: 75px;\\n    margin-top: 75px;\\n  }\\n}\\n\\n@media (max-width: 690px) {\\n  .project-description {\\n    margin-top: 130px;\\n    width: 70%;\\n  }\\n  .projects-section .project-image {\\n    width: 300px;\\n  }\\n}\\n\\n@media (max-width: 525px) {\\n  .project-title {\\n    margin-top: 0.5em;\\n  }\\n  .project-description {\\n    margin-top: 225px;\\n    width: 100%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 300px;\\n    margin: 85px auto;\\n  }\\n}\\n\\n@media (max-width: 430px) {\\n  .project-description {\\n    margin-top: 190px;\\n    width: 100%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 250px;\\n    margin: 85px auto;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Projects.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,sEAAsE;EACtE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,aAAa;EACb,kBAAkB;;AAEpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,+CAA+C;EAC/C,uDAAuD;EACvD,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EAEE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,sEAAsE;EACtE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EAEb,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EAEb,uBAAuB;EAEvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,uDAAuD;EACvD,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,UAAU;EACZ;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,UAAU;EACZ;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;EACnB;AACF\",\"sourcesContent\":[\".projects-section {\\n  margin: 5em 0 15em 0;\\n  width: 100%;\\n  height: 80vh;\\n  margin: 0px auto;\\n  padding: 1vh 0px;\\n  max-width: 1000px;\\n  margin-bottom: 5vh;\\n  background-color: aquamarine;\\n}\\n\\n.project-wrapper {\\n  display: flex;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.project-content {\\n  max-width: 50%;\\n}\\n\\n.project-overline {\\n  margin: 10px 0px;\\n  color: rgb(109, 131, 242);\\n  font-family: \\\"SF Mono\\\",\\\"Fira Code\\\",\\\"Fira Mono\\\",\\\"Roboto Mono\\\",monospace;\\n  font-size: 13px;\\n  font-weight: 400;\\n}\\n\\n.project-title {\\n  color: #ccd6f6;\\n  font-size: 28px;\\n  z-index: 9999;\\n  position: relative;\\n\\n}\\n\\n.project-title:hover {\\n  color: rgb(109, 131, 242);\\n}\\n\\n@media (min-width: 768px) {\\n  .project-title {\\n    margin: 0px 0px 20px;\\n  }\\n}\\n\\n.project-description {\\n  box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);\\n  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);\\n  position: relative;\\n  z-index: 2;\\n  padding: 25px;\\n  border-radius: 4px;\\n  background-color: #112240;\\n  color: #a8b2d1;\\n  font-size: 14px;\\n  font-family: 'Montserrat', 'sans-serif';\\n}\\n\\n.project-tech-list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: relative;\\n  z-index: 2;\\n  margin: 25px 0px 10px;\\n  padding: 0px;\\n  list-style: none;\\n}\\n\\n.projects-section:nth-of-type(2n+1) .project-tech-list {\\n  -webkit-box-pack: end;\\n  justify-content: flex-end;\\n}\\n\\n.projects-section .project-tech-list li {\\n  margin: 0px 20px 5px 0px;\\n  color: #a8b2d1;\\n  font-family: \\\"SF Mono\\\",\\\"Fira Code\\\",\\\"Fira Mono\\\",\\\"Roboto Mono\\\",monospace;\\n  font-size: 13px;\\n  white-space: nowrap;\\n}\\n\\n.projects-section:nth-of-type(2n+1) .project-tech-list li {\\n  margin: 0px 0px 5px 20px;\\n}\\n\\n.project-links {\\n  display: flex;\\n  -webkit-box-align: center;\\n  align-items: center;\\n  position: relative;\\n  margin-top: 10px;\\n  margin-left: -10px;\\n}\\n\\n.project-links a {\\n  display: flex;\\n  -webkit-box-pack: center;\\n  justify-content: center;\\n  -webkit-box-align: center;\\n  align-items: center;\\n  padding: 10px;\\n}\\n\\n.projects-section .project-image {\\n  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);\\n  position: relative;\\n  z-index: 1;\\n  margin-left: -75px;\\n  margin-top: 65px;\\n}\\n\\n@media (max-width: 1050px) {\\n  .project-content {\\n    width: 75%;\\n  }\\n}\\n\\n@media (max-width: 925px) {\\n  .project-content {\\n    width: 100%;\\n  }\\n}\\n\\n@media (max-width: 810px) {\\n  .project-content {\\n    width: 150%;\\n  }\\n}\\n\\n@media (max-width: 950px) {\\n  .project-title {\\n    margin-top: 0.5em;\\n  }\\n  .project-description {\\n    margin-top: 190px;\\n    width: 70%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 400px;\\n    margin-left: 75px;\\n    margin-top: 75px;\\n  }\\n}\\n\\n@media (max-width: 690px) {\\n  .project-description {\\n    margin-top: 130px;\\n    width: 70%;\\n  }\\n  .projects-section .project-image {\\n    width: 300px;\\n  }\\n}\\n\\n@media (max-width: 525px) {\\n  .project-title {\\n    margin-top: 0.5em;\\n  }\\n  .project-description {\\n    margin-top: 225px;\\n    width: 100%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 300px;\\n    margin: 85px auto;\\n  }\\n}\\n\\n@media (max-width: 430px) {\\n  .project-description {\\n    margin-top: 190px;\\n    width: 100%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 250px;\\n    margin: 85px auto;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL1Byb2plY3RzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkRBQTZELHlCQUF5QixnQkFBZ0IsaUJBQWlCLHFCQUFxQixxQkFBcUIsc0JBQXNCLHVCQUF1QixpQ0FBaUMsR0FBRyxzQkFBc0Isa0JBQWtCLGlCQUFpQixnQkFBZ0IsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsdUJBQXVCLHFCQUFxQiw4QkFBOEIsbUZBQW1GLG9CQUFvQixxQkFBcUIsR0FBRyxvQkFBb0IsbUJBQW1CLG9CQUFvQixrQkFBa0IsdUJBQXVCLEtBQUssMEJBQTBCLDhCQUE4QixHQUFHLCtCQUErQixvQkFBb0IsMkJBQTJCLEtBQUssR0FBRywwQkFBMEIsb0RBQW9ELDREQUE0RCx1QkFBdUIsZUFBZSxrQkFBa0IsdUJBQXVCLDhCQUE4QixtQkFBbUIsb0JBQW9CLDRDQUE0QyxHQUFHLHdCQUF3QixrQkFBa0Isb0JBQW9CLHVCQUF1QixlQUFlLDBCQUEwQixpQkFBaUIscUJBQXFCLEdBQUcsNERBQTRELDhCQUE4QixHQUFHLDZDQUE2Qyw2QkFBNkIsbUJBQW1CLG1GQUFtRixvQkFBb0Isd0JBQXdCLEdBQUcsK0RBQStELDZCQUE2QixHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLHVCQUF1QixxQkFBcUIsdUJBQXVCLEdBQUcsc0JBQXNCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixHQUFHLHNDQUFzQyw0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Qiw4QkFBOEIsd0JBQXdCLGtCQUFrQixHQUFHLHNDQUFzQyw0REFBNEQsdUJBQXVCLGVBQWUsdUJBQXVCLHFCQUFxQixHQUFHLGdDQUFnQyxzQkFBc0IsaUJBQWlCLEtBQUssR0FBRywrQkFBK0Isc0JBQXNCLGtCQUFrQixLQUFLLEdBQUcsK0JBQStCLHNCQUFzQixrQkFBa0IsS0FBSyxHQUFHLCtCQUErQixvQkFBb0Isd0JBQXdCLEtBQUssMEJBQTBCLHdCQUF3QixpQkFBaUIsS0FBSyxzQ0FBc0MseUJBQXlCLG1CQUFtQix3QkFBd0IsdUJBQXVCLEtBQUssR0FBRywrQkFBK0IsMEJBQTBCLHdCQUF3QixpQkFBaUIsS0FBSyxzQ0FBc0MsbUJBQW1CLEtBQUssR0FBRywrQkFBK0Isb0JBQW9CLHdCQUF3QixLQUFLLDBCQUEwQix3QkFBd0Isa0JBQWtCLEtBQUssc0NBQXNDLHlCQUF5QixtQkFBbUIsd0JBQXdCLEtBQUssR0FBRywrQkFBK0IsMEJBQTBCLHdCQUF3QixrQkFBa0IsS0FBSyxzQ0FBc0MseUJBQXlCLG1CQUFtQix3QkFBd0IsS0FBSyxHQUFHLG1CQUFtQjtBQUNualE7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvUHJvamVjdHMuY3NzP2YxMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0cy1zZWN0aW9uIHtcXG4gIG1hcmdpbjogNWVtIDAgMTVlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgcGFkZGluZzogMXZoIDBweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnQge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LW92ZXJsaW5lIHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBjb2xvcjogcmdiKDEwOSwgMTMxLCAyNDIpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTRiBNb25vXFxcIixcXFwiRmlyYSBDb2RlXFxcIixcXFwiRmlyYSBNb25vXFxcIixcXFwiUm9ib3RvIE1vbm9cXFwiLG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGNvbG9yOiAjY2NkNmY2O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG59XFxuXFxuLnByb2plY3QtdGl0bGU6aG92ZXIge1xcbiAgY29sb3I6IHJnYigxMDksIDEzMSwgMjQyKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAucHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbjogMHB4IDBweCAyMHB4O1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsMTIsMjcsMC43KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTIyNDA7XFxuICBjb2xvcjogI2E4YjJkMTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdzYW5zLXNlcmlmJztcXG59XFxuXFxuLnByb2plY3QtdGVjaC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgbWFyZ2luOiAyNXB4IDBweCAxMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb246bnRoLW9mLXR5cGUoMm4rMSkgLnByb2plY3QtdGVjaC1saXN0IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LXRlY2gtbGlzdCBsaSB7XFxuICBtYXJnaW46IDBweCAyMHB4IDVweCAwcHg7XFxuICBjb2xvcjogI2E4YjJkMTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU0YgTW9ub1xcXCIsXFxcIkZpcmEgQ29kZVxcXCIsXFxcIkZpcmEgTW9ub1xcXCIsXFxcIlJvYm90byBNb25vXFxcIixtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbjpudGgtb2YtdHlwZSgybisxKSAucHJvamVjdC10ZWNoLWxpc3QgbGkge1xcbiAgbWFyZ2luOiAwcHggMHB4IDVweCAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWltYWdlIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xcbiAgbWFyZ2luLXRvcDogNjVweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkge1xcbiAgLnByb2plY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MjVweCkge1xcbiAgLnByb2plY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODEwcHgpIHtcXG4gIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTUwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAucHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgfVxcbiAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG4gIC5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWltYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcXG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTMwcHg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1pbWFnZSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUyNXB4KSB7XFxuICAucHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgfVxcbiAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAyMjVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IDg1cHggYXV0bztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDE5MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWltYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIG1hcmdpbjogODVweCBhdXRvO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL1Byb2plY3RzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHNFQUFzRTtFQUN0RSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsdURBQXVEO0VBQ3ZELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLHNFQUFzRTtFQUN0RSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUViLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2plY3RzLXNlY3Rpb24ge1xcbiAgbWFyZ2luOiA1ZW0gMCAxNWVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODB2aDtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxuICBwYWRkaW5nOiAxdmggMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLnByb2plY3Qtb3ZlcmxpbmUge1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIGNvbG9yOiByZ2IoMTA5LCAxMzEsIDI0Mik7XFxuICBmb250LWZhbWlseTogXFxcIlNGIE1vbm9cXFwiLFxcXCJGaXJhIENvZGVcXFwiLFxcXCJGaXJhIE1vbm9cXFwiLFxcXCJSb2JvdG8gTW9ub1xcXCIsbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgY29sb3I6ICNjY2Q2ZjY7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbn1cXG5cXG4ucHJvamVjdC10aXRsZTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDEwOSwgMTMxLCAyNDIpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XFxuICB9XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwxMiwyNywwLjcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwwLjA0NSwwLjM1NSwxKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMjI0MDtcXG4gIGNvbG9yOiAjYThiMmQxO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnO1xcbn1cXG5cXG4ucHJvamVjdC10ZWNoLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBtYXJnaW46IDI1cHggMHB4IDEwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbjpudGgtb2YtdHlwZSgybisxKSAucHJvamVjdC10ZWNoLWxpc3Qge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtdGVjaC1saXN0IGxpIHtcXG4gIG1hcmdpbjogMHB4IDIwcHggNXB4IDBweDtcXG4gIGNvbG9yOiAjYThiMmQxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTRiBNb25vXFxcIixcXFwiRmlyYSBDb2RlXFxcIixcXFwiRmlyYSBNb25vXFxcIixcXFwiUm9ib3RvIE1vbm9cXFwiLG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uOm50aC1vZi10eXBlKDJuKzEpIC5wcm9qZWN0LXRlY2gtbGlzdCBsaSB7XFxuICBtYXJnaW46IDBweCAwcHggNXB4IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWxpbmtzIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1pbWFnZSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcXG4gIG1hcmdpbi10b3A6IDY1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTI1cHgpIHtcXG4gIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMHB4KSB7XFxuICAucHJvamVjdC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDE1MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgLnByb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIH1cXG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTkwcHg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcXG4gICAgbWFyZ2luLXRvcDogNzVweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XFxuICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgfVxcbiAgLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtaW1hZ2Uge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjVweCkge1xcbiAgLnByb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIH1cXG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiA4NXB4IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xcbiAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXJnaW46IDg1cHggYXV0bztcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/Projects.css\n");

/***/ })

});