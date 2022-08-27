/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/components/App.js":
/*!**********************************!*\
  !*** ./client/components/App.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App.css */ \"./client/components/App.css\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _Child = _interopRequireDefault(__webpack_require__(/*! ./Child */ \"./client/components/Child.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar App = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          count = _this$props.count,\n          dispatch = _this$props.dispatch;\n      return /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, /*#__PURE__*/_react[\"default\"].createElement(\"h1\", null, \"Demo 1\"), /*#__PURE__*/_react[\"default\"].createElement(\"p\", null, count.num), /*#__PURE__*/_react[\"default\"].createElement(\"button\", {\n        className: _App[\"default\"].increment,\n        onClick: function onClick() {\n          return dispatch({\n            type: \"INC\"\n          });\n        }\n      }, \"+1\"), /*#__PURE__*/_react[\"default\"].createElement(_Child[\"default\"], null), /*#__PURE__*/_react[\"default\"].createElement(\"p\", null, /*#__PURE__*/_react[\"default\"].createElement(\"a\", {\n        href: \"/whoami\"\n      }, \"Server-only route\")));\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nApp.propTypes = {\n  count: _propTypes[\"default\"].object.isRequired,\n  dispatch: _propTypes[\"default\"].func.isRequired\n};\n\nvar _default = (0, _reactRedux.connect)(function (state) {\n  return {\n    count: state\n  };\n})(App); // export default hot(module)( connect(state => ({count: state}))(App) );\n\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./client/components/App.js?");

/***/ }),

/***/ "./client/components/Child.js":
/*!************************************!*\
  !*** ./client/components/Child.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Child = /*#__PURE__*/function (_Component) {\n  _inherits(Child, _Component);\n\n  var _super = _createSuper(Child);\n\n  function Child() {\n    var _this;\n\n    _classCallCheck(this, Child);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n    _this.state = {\n      local: \"state\"\n    };\n    return _this;\n  }\n\n  _createClass(Child, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var local = this.state.local;\n      return /*#__PURE__*/_react[\"default\"].createElement(\"p\", null, \"Child Component\", \" \", /*#__PURE__*/_react[\"default\"].createElement(\"input\", {\n        type: \"text\",\n        value: local,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            local: e.target.value\n          });\n        }\n      }));\n    }\n  }]);\n\n  return Child;\n}(_react.Component);\n\nvar _default = Child;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./client/components/Child.js?");

/***/ }),

/***/ "./client/reducers/index.js":
/*!**********************************!*\
  !*** ./client/reducers/index.js ***!
  \**********************************/
/***/ ((module) => {

eval("\n\nvar initial = {\n  num: 5\n};\nvar handlers = {\n  INC: function INC(s) {\n    return {\n      num: s.num + 1\n    };\n  }\n};\n\nfunction reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (handlers[action.type]) {\n    return handlers[action.type](state);\n  }\n\n  return state;\n}\n\nmodule.exports = reducer;\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./client/reducers/index.js?");

/***/ }),

/***/ "./client/store.js":
/*!*************************!*\
  !*** ./client/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar configureStore = function configureStore(initialState) {\n  var store = (0, _redux.createStore)(__webpack_require__(/*! ./reducers */ \"./client/reducers/index.js\"), initialState);\n\n  if (false) {}\n\n  return store;\n};\n\nvar _default = configureStore;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./client/store.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-render */ \"./server/server-render.js\");\nvar app=express__WEBPACK_IMPORTED_MODULE_0___default().Router();app.get('/whoami',function(req,res){res.send(\"You are a winner 1\");});// Anything else gets passed to the client app's server rendering\napp.get('*',function(req,res,next){(0,_server_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req.path,function(err,page){if(err)return next(err);res.send(page);});});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./server/app.js?");

/***/ }),

/***/ "./server/server-render.js":
/*!*********************************!*\
  !*** ./server/server-render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _client_components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/App */ \"./client/components/App.js\");\n/* harmony import */ var _client_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/store */ \"./client/store.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n// eslint-disable-next-line no-sync\nvar template=fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(__dirname+'/../index.html','utf8');function renderApp(path,callback){var store=(0,_client_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();var state=store.getState();var rendered=(0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__.renderToString)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider,{store:store},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_client_components_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"],null)));var page=template.replace('<!-- CONTENT -->',rendered).replace('\"-- STORES --\"',JSON.stringify(state));callback(null,page);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderApp);\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./server/server-render.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use!./client/common/layout.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use!./client/common/layout.css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"box\": \"layout__box__qyZYy\"\n});\n\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./client/common/layout.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use");

/***/ }),

/***/ "./client/components/App.css":
/*!***********************************!*\
  !*** ./client/components/App.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_common_layout_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use!../common/layout.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use!./client/common/layout.css\");\n// Imports\n\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"increment\": \"App__increment__LKAHJ \" + _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_common_layout_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].box + \"\"\n});\n\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./client/components/App.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/app.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;