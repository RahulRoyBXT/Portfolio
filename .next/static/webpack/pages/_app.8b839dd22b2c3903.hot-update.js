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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".projects-section {\\n  margin: 5em 0 15em 0;\\n  width: 100%;\\n  height: 80vh;\\n  margin: 0px auto;\\n  padding: 1vh 0px;\\n  max-width: 1000px;\\n  margin-bottom: 5vh;\\n  flex-wrap: wrap;\\n}\\n\\n.project-wrapper {\\n  display: flex;\\n  height: 100%;\\n  width: 100%;\\n  flex-wrap: wrap;\\n}\\n\\n.project-content {\\n  max-width: 60%;\\n  height: 60%;\\n}\\n\\n.project-overline {\\n  margin: 10px 0px;\\n  color: rgb(109, 131, 242);\\n  font-family: \\\"SF Mono\\\",\\\"Fira Code\\\",\\\"Fira Mono\\\",\\\"Roboto Mono\\\",monospace;\\n  font-size: 13px;\\n  font-weight: 400;\\n}\\n\\n.project-title {\\n  color: #ccd6f6;\\n  font-size: 28px;\\n  z-index: 9999;\\n  position: relative;\\n\\n}\\n\\n.project-title:hover {\\n  color: rgb(109, 131, 242);\\n}\\n\\n@media (min-width: 768px) {\\n  .project-title {\\n    margin: 0px 0px 20px;\\n  }\\n}\\n\\n.project-description {\\n  box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);\\n  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);\\n  position: relative;\\n  z-index: 2;\\n  padding: 25px;\\n  border-radius: 4px;\\n  background-color: #112240;\\n  color: #a8b2d1;\\n  font-size: 14px;\\n  font-family: 'Montserrat', 'sans-serif';\\n}\\n\\n.project-tech-list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: relative;\\n  z-index: 2;\\n  margin: 25px 0px 10px;\\n  padding: 0px;\\n  list-style: none;\\n}\\n\\n.projects-section:nth-of-type(2n+1) .project-tech-list {\\n  justify-content: flex-end;\\n}\\n\\n.projects-section .project-tech-list li {\\n  margin: 0px 20px 5px 0px;\\n  color: #a8b2d1;\\n  font-family: \\\"SF Mono\\\",\\\"Fira Code\\\",\\\"Fira Mono\\\",\\\"Roboto Mono\\\",monospace;\\n  font-size: 13px;\\n  white-space: nowrap;\\n}\\n\\n.projects-section:nth-of-type(2n+1) .project-tech-list li {\\n  margin: 0px 0px 5px 20px;\\n}\\n\\n.project-links {\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n  margin-top: 10px;\\n  margin-left: -10px;\\n}\\n\\n.project-links a {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 10px;\\n}\\n\\n.projects-section .project-image {\\n  height: 50%;\\n  width: 40%;\\n  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);\\n  margin-top: 10%;\\n  padding: .5%;\\n}\\n.projects-section .project-image img{\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n@media (max-width: 1050px) {\\n  .project-content {\\n    width: 75%;\\n  }\\n}\\n\\n@media (max-width: 925px) {\\n  .project-content {\\n    width: 100%;\\n  }\\n}\\n\\n@media (max-width: 810px) {\\n  .project-content {\\n    width: 150%;\\n  }\\n}\\n\\n@media (max-width: 950px) {\\n  .project-title {\\n    margin-top: 0.5em;\\n  }\\n  .project-description {\\n    margin-top: 190px;\\n    width: 70%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 400px;\\n    margin-left: 75px;\\n    margin-top: 75px;\\n  }\\n}\\n\\n@media (max-width: 690px) {\\n  .project-description {\\n    margin-top: 0;\\n    min-width: 80vw;\\n    height: -moz-min-content;\\n    height: min-content;\\n    background-color: #1e2438;\\n    margin-left: -20px;\\n    font-size:medium;\\n\\n  }\\n  .projects-section .project-image {\\n    min-width: vw;\\n    height: auto;\\n    background-color:rgb(110, 82, 49);\\n    padding: 0;\\n  }\\n}\\n\\n@media (max-width: 525px) {\\n  .project-title {\\n    margin-top: 0.5em;\\n  }\\n  .project-description {\\n    margin-top: 225px;\\n    width: 100%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 300px;\\n    margin: 85px auto;\\n  }\\n}\\n\\n@media (max-width: 430px) {\\n  .project-description {\\n    margin-top: 190px;\\n    width: 100%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 250px;\\n    margin: 85px auto;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Projects.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,sEAAsE;EACtE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,aAAa;EACb,kBAAkB;;AAEpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,+CAA+C;EAC/C,uDAAuD;EACvD,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EAEE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,sEAAsE;EACtE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EAEb,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EAEb,uBAAuB;EAEvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,UAAU;EACV,uDAAuD;EACvD,eAAe;EACf,YAAY;AACd;AACA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,UAAU;EACZ;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,aAAa;IACb,eAAe;IACf,wBAAmB;IAAnB,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;;EAElB;EACA;IACE,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,UAAU;EACZ;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;EACnB;AACF\",\"sourcesContent\":[\".projects-section {\\n  margin: 5em 0 15em 0;\\n  width: 100%;\\n  height: 80vh;\\n  margin: 0px auto;\\n  padding: 1vh 0px;\\n  max-width: 1000px;\\n  margin-bottom: 5vh;\\n  flex-wrap: wrap;\\n}\\n\\n.project-wrapper {\\n  display: flex;\\n  height: 100%;\\n  width: 100%;\\n  flex-wrap: wrap;\\n}\\n\\n.project-content {\\n  max-width: 60%;\\n  height: 60%;\\n}\\n\\n.project-overline {\\n  margin: 10px 0px;\\n  color: rgb(109, 131, 242);\\n  font-family: \\\"SF Mono\\\",\\\"Fira Code\\\",\\\"Fira Mono\\\",\\\"Roboto Mono\\\",monospace;\\n  font-size: 13px;\\n  font-weight: 400;\\n}\\n\\n.project-title {\\n  color: #ccd6f6;\\n  font-size: 28px;\\n  z-index: 9999;\\n  position: relative;\\n\\n}\\n\\n.project-title:hover {\\n  color: rgb(109, 131, 242);\\n}\\n\\n@media (min-width: 768px) {\\n  .project-title {\\n    margin: 0px 0px 20px;\\n  }\\n}\\n\\n.project-description {\\n  box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);\\n  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);\\n  position: relative;\\n  z-index: 2;\\n  padding: 25px;\\n  border-radius: 4px;\\n  background-color: #112240;\\n  color: #a8b2d1;\\n  font-size: 14px;\\n  font-family: 'Montserrat', 'sans-serif';\\n}\\n\\n.project-tech-list {\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: relative;\\n  z-index: 2;\\n  margin: 25px 0px 10px;\\n  padding: 0px;\\n  list-style: none;\\n}\\n\\n.projects-section:nth-of-type(2n+1) .project-tech-list {\\n  -webkit-box-pack: end;\\n  justify-content: flex-end;\\n}\\n\\n.projects-section .project-tech-list li {\\n  margin: 0px 20px 5px 0px;\\n  color: #a8b2d1;\\n  font-family: \\\"SF Mono\\\",\\\"Fira Code\\\",\\\"Fira Mono\\\",\\\"Roboto Mono\\\",monospace;\\n  font-size: 13px;\\n  white-space: nowrap;\\n}\\n\\n.projects-section:nth-of-type(2n+1) .project-tech-list li {\\n  margin: 0px 0px 5px 20px;\\n}\\n\\n.project-links {\\n  display: flex;\\n  -webkit-box-align: center;\\n  align-items: center;\\n  position: relative;\\n  margin-top: 10px;\\n  margin-left: -10px;\\n}\\n\\n.project-links a {\\n  display: flex;\\n  -webkit-box-pack: center;\\n  justify-content: center;\\n  -webkit-box-align: center;\\n  align-items: center;\\n  padding: 10px;\\n}\\n\\n.projects-section .project-image {\\n  height: 50%;\\n  width: 40%;\\n  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);\\n  margin-top: 10%;\\n  padding: .5%;\\n}\\n.projects-section .project-image img{\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n@media (max-width: 1050px) {\\n  .project-content {\\n    width: 75%;\\n  }\\n}\\n\\n@media (max-width: 925px) {\\n  .project-content {\\n    width: 100%;\\n  }\\n}\\n\\n@media (max-width: 810px) {\\n  .project-content {\\n    width: 150%;\\n  }\\n}\\n\\n@media (max-width: 950px) {\\n  .project-title {\\n    margin-top: 0.5em;\\n  }\\n  .project-description {\\n    margin-top: 190px;\\n    width: 70%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 400px;\\n    margin-left: 75px;\\n    margin-top: 75px;\\n  }\\n}\\n\\n@media (max-width: 690px) {\\n  .project-description {\\n    margin-top: 0;\\n    min-width: 80vw;\\n    height: min-content;\\n    background-color: #1e2438;\\n    margin-left: -20px;\\n    font-size:medium;\\n\\n  }\\n  .projects-section .project-image {\\n    min-width: vw;\\n    height: auto;\\n    background-color:rgb(110, 82, 49);\\n    padding: 0;\\n  }\\n}\\n\\n@media (max-width: 525px) {\\n  .project-title {\\n    margin-top: 0.5em;\\n  }\\n  .project-description {\\n    margin-top: 225px;\\n    width: 100%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 300px;\\n    margin: 85px auto;\\n  }\\n}\\n\\n@media (max-width: 430px) {\\n  .project-description {\\n    margin-top: 190px;\\n    width: 100%;\\n  }\\n  .projects-section .project-image {\\n    position: absolute;\\n    width: 250px;\\n    margin: 85px auto;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL1Byb2plY3RzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkRBQTZELHlCQUF5QixnQkFBZ0IsaUJBQWlCLHFCQUFxQixxQkFBcUIsc0JBQXNCLHVCQUF1QixvQkFBb0IsR0FBRyxzQkFBc0Isa0JBQWtCLGlCQUFpQixnQkFBZ0Isb0JBQW9CLEdBQUcsc0JBQXNCLG1CQUFtQixnQkFBZ0IsR0FBRyx1QkFBdUIscUJBQXFCLDhCQUE4QixtRkFBbUYsb0JBQW9CLHFCQUFxQixHQUFHLG9CQUFvQixtQkFBbUIsb0JBQW9CLGtCQUFrQix1QkFBdUIsS0FBSywwQkFBMEIsOEJBQThCLEdBQUcsK0JBQStCLG9CQUFvQiwyQkFBMkIsS0FBSyxHQUFHLDBCQUEwQixvREFBb0QsNERBQTRELHVCQUF1QixlQUFlLGtCQUFrQix1QkFBdUIsOEJBQThCLG1CQUFtQixvQkFBb0IsNENBQTRDLEdBQUcsd0JBQXdCLGtCQUFrQixvQkFBb0IsdUJBQXVCLGVBQWUsMEJBQTBCLGlCQUFpQixxQkFBcUIsR0FBRyw0REFBNEQsOEJBQThCLEdBQUcsNkNBQTZDLDZCQUE2QixtQkFBbUIsbUZBQW1GLG9CQUFvQix3QkFBd0IsR0FBRywrREFBK0QsNkJBQTZCLEdBQUcsb0JBQW9CLGtCQUFrQix3QkFBd0IsdUJBQXVCLHFCQUFxQix1QkFBdUIsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtC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cUIsR0FBRyw0REFBNEQsMEJBQTBCLDhCQUE4QixHQUFHLDZDQUE2Qyw2QkFBNkIsbUJBQW1CLG1GQUFtRixvQkFBb0Isd0JBQXdCLEdBQUcsK0RBQStELDZCQUE2QixHQUFHLG9CQUFvQixrQkFBa0IsOEJBQThCLHdCQUF3Qix1QkFBdUIscUJBQXFCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IsNkJBQTZCLDRCQUE0Qiw4QkFBOEIsd0JBQXdCLGtCQUFrQixHQUFHLHNDQUFzQyxnQkFBZ0IsZUFBZSw0REFBNEQsb0JBQW9CLGlCQUFpQixHQUFHLHVDQUF1QyxpQkFBaUIsZ0JBQWdCLEdBQUcsZ0NBQWdDLHNCQUFzQixpQkFBaUIsS0FBSyxHQUFHLCtCQUErQixzQkFBc0Isa0JBQWtCLEtBQUssR0FBRywrQkFBK0Isc0JBQXNCLGtCQUFrQixLQUFLLEdBQUcsK0JBQStCLG9CQUFvQix3QkFBd0IsS0FBSywwQkFBMEIsd0JBQXdCLGlCQUFpQixLQUFLLHNDQUFzQyx5QkFBeUIsbUJBQW1CLHdCQUF3Qix1QkFBdUIsS0FBSyxHQUFHLCtCQUErQiwwQkFBMEIsb0JBQW9CLHNCQUFzQiwwQkFBMEIsZ0NBQWdDLHlCQUF5Qix1QkFBdUIsT0FBTyxzQ0FBc0Msb0JBQW9CLG1CQUFtQix3Q0FBd0MsaUJBQWlCLEtBQUssR0FBRywrQkFBK0Isb0JBQW9CLHdCQUF3QixLQUFLLDBCQUEwQix3QkFBd0Isa0JBQWtCLEtBQUssc0NBQXNDLHlCQUF5QixtQkFBbUIsd0JBQXdCLEtBQUssR0FBRywrQkFBK0IsMEJBQTBCLHdCQUF3QixrQkFBa0IsS0FBSyxzQ0FBc0MseUJBQXlCLG1CQUFtQix3QkFBd0IsS0FBSyxHQUFHLG1CQUFtQjtBQUNydlI7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvUHJvamVjdHMuY3NzP2YxMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0cy1zZWN0aW9uIHtcXG4gIG1hcmdpbjogNWVtIDAgMTVlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgcGFkZGluZzogMXZoIDBweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3QtY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNjAlO1xcbn1cXG5cXG4ucHJvamVjdC1vdmVybGluZSB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgY29sb3I6IHJnYigxMDksIDEzMSwgMjQyKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU0YgTW9ub1xcXCIsXFxcIkZpcmEgQ29kZVxcXCIsXFxcIkZpcmEgTW9ub1xcXCIsXFxcIlJvYm90byBNb25vXFxcIixtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBjb2xvcjogI2NjZDZmNjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcblxcbi5wcm9qZWN0LXRpdGxlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTA5LCAxMzEsIDI0Mik7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnByb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW46IDBweCAwcHggMjBweDtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiYSgyLDEyLDI3LDAuNyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyMjQwO1xcbiAgY29sb3I6ICNhOGIyZDE7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnc2Fucy1zZXJpZic7XFxufVxcblxcbi5wcm9qZWN0LXRlY2gtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIG1hcmdpbjogMjVweCAwcHggMTBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uOm50aC1vZi10eXBlKDJuKzEpIC5wcm9qZWN0LXRlY2gtbGlzdCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC10ZWNoLWxpc3QgbGkge1xcbiAgbWFyZ2luOiAwcHggMjBweCA1cHggMHB4O1xcbiAgY29sb3I6ICNhOGIyZDE7XFxuICBmb250LWZhbWlseTogXFxcIlNGIE1vbm9cXFwiLFxcXCJGaXJhIENvZGVcXFwiLFxcXCJGaXJhIE1vbm9cXFwiLFxcXCJSb2JvdG8gTW9ub1xcXCIsbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb246bnRoLW9mLXR5cGUoMm4rMSkgLnByb2plY3QtdGVjaC1saXN0IGxpIHtcXG4gIG1hcmdpbjogMHB4IDBweCA1cHggMjBweDtcXG59XFxuXFxuLnByb2plY3QtbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1saW5rcyBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1pbWFnZSB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA0MCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgcGFkZGluZzogLjUlO1xcbn1cXG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1pbWFnZSBpbWd7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkge1xcbiAgLnByb2plY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MjVweCkge1xcbiAgLnByb2plY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODEwcHgpIHtcXG4gIC5wcm9qZWN0LWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTUwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAucHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgfVxcbiAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG4gIC5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWltYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcXG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWluLXdpZHRoOiA4MHZ3O1xcbiAgICBoZWlnaHQ6IC1tb3otbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI0Mzg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gICAgZm9udC1zaXplOm1lZGl1bTtcXG5cXG4gIH1cXG4gIC5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWltYWdlIHtcXG4gICAgbWluLXdpZHRoOiB2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMTAsIDgyLCA0OSk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjVweCkge1xcbiAgLnByb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIH1cXG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiA4NXB4IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xcbiAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXJnaW46IDg1cHggYXV0bztcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9Qcm9qZWN0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixzRUFBc0U7RUFDdEUsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLHVEQUF1RDtFQUN2RCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxzRUFBc0U7RUFDdEUsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBRWIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHVEQUF1RDtFQUN2RCxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0VBRWxCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0cy1zZWN0aW9uIHtcXG4gIG1hcmdpbjogNWVtIDAgMTVlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBtYXJnaW46IDBweCBhdXRvO1xcbiAgcGFkZGluZzogMXZoIDBweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3QtY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNjAlO1xcbn1cXG5cXG4ucHJvamVjdC1vdmVybGluZSB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgY29sb3I6IHJnYigxMDksIDEzMSwgMjQyKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU0YgTW9ub1xcXCIsXFxcIkZpcmEgQ29kZVxcXCIsXFxcIkZpcmEgTW9ub1xcXCIsXFxcIlJvYm90byBNb25vXFxcIixtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBjb2xvcjogI2NjZDZmNjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcblxcbi5wcm9qZWN0LXRpdGxlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTA5LCAxMzEsIDI0Mik7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnByb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW46IDBweCAwcHggMjBweDtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiYSgyLDEyLDI3LDAuNyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LDAuMDQ1LDAuMzU1LDEpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyMjQwO1xcbiAgY29sb3I6ICNhOGIyZDE7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnc2Fucy1zZXJpZic7XFxufVxcblxcbi5wcm9qZWN0LXRlY2gtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIG1hcmdpbjogMjVweCAwcHggMTBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uOm50aC1vZi10eXBlKDJuKzEpIC5wcm9qZWN0LXRlY2gtbGlzdCB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC10ZWNoLWxpc3QgbGkge1xcbiAgbWFyZ2luOiAwcHggMjBweCA1cHggMHB4O1xcbiAgY29sb3I6ICNhOGIyZDE7XFxuICBmb250LWZhbWlseTogXFxcIlNGIE1vbm9cXFwiLFxcXCJGaXJhIENvZGVcXFwiLFxcXCJGaXJhIE1vbm9cXFwiLFxcXCJSb2JvdG8gTW9ub1xcXCIsbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb246bnRoLW9mLXR5cGUoMm4rMSkgLnByb2plY3QtdGVjaC1saXN0IGxpIHtcXG4gIG1hcmdpbjogMHB4IDBweCA1cHggMjBweDtcXG59XFxuXFxuLnByb2plY3QtbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG59XFxuXFxuLnByb2plY3QtbGlua3MgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWltYWdlIHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICBwYWRkaW5nOiAuNSU7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWltYWdlIGltZ3tcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KSB7XFxuICAucHJvamVjdC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkyNXB4KSB7XFxuICAucHJvamVjdC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MTBweCkge1xcbiAgLnByb2plY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiAxNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICB9XFxuICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDE5MHB4O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgfVxcbiAgLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XFxuICAgIG1hcmdpbi10b3A6IDc1cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCkge1xcbiAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtaW4td2lkdGg6IDgwdnc7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI0Mzg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gICAgZm9udC1zaXplOm1lZGl1bTtcXG5cXG4gIH1cXG4gIC5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LWltYWdlIHtcXG4gICAgbWluLXdpZHRoOiB2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMTAsIDgyLCA0OSk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjVweCkge1xcbiAgLnByb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIH1cXG4gIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLnByb2plY3RzLXNlY3Rpb24gLnByb2plY3QtaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWFyZ2luOiA4NXB4IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xcbiAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXJnaW46IDg1cHggYXV0bztcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/Projects.css\n");

/***/ })

});