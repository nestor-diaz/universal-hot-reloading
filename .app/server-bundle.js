/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/components/App.js":
/*!**********************************!*\
  !*** ./client/components/App.js ***!
  \**********************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/client/components/App.js: Expected corresponding JSX closing tag for <h1>. (12:20)\\n\\n\\u001b[0m \\u001b[90m 10 |\\u001b[39m     \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 |\\u001b[39m       \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 12 |\\u001b[39m         \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mDemo\\u001b[39m \\u001b[35m100\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                     \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 |\\u001b[39m         \\u001b[33m<\\u001b[39m\\u001b[33mp\\u001b[39m\\u001b[33m>\\u001b[39m{count\\u001b[33m.\\u001b[39mnum}\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mp\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 |\\u001b[39m         \\u001b[33m<\\u001b[39m\\u001b[33mbutton\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 |\\u001b[39m           className\\u001b[33m=\\u001b[39m{styles\\u001b[33m.\\u001b[39mincrement}\\u001b[0m\\n    at instantiate (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/parse-error/credentials.ts:62:21)\\n    at toParseError (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/parse-error.ts:60:12)\\n    at JSXParserMixin.raise (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/tokenizer/index.ts:1464:19)\\n    at JSXParserMixin.jsxParseElementAt (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/plugins/jsx/index.ts:527:16)\\n    at JSXParserMixin.jsxParseElementAt (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/plugins/jsx/index.ts:484:34)\\n    at JSXParserMixin.jsxParseElement (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/plugins/jsx/index.ts:569:19)\\n    at JSXParserMixin.parseExprAtom (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/plugins/jsx/index.ts:585:21)\\n    at JSXParserMixin.parseExprSubscripts (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/parser/expression.ts:738:23)\\n    at JSXParserMixin.parseUpdate (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/parser/expression.ts:714:21)\\n    at JSXParserMixin.parseMaybeUnary (/Users/nestor.diaz/Documents/external/ultimate-hot-reloading-example/node_modules/@babel/parser/src/parser/expression.ts:675:23)\");\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./client/components/App.js?");

/***/ }),

/***/ "./client/reducers/index.js":
/*!**********************************!*\
  !*** ./client/reducers/index.js ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar initial = {\n  num: 5\n};\nvar handlers = {\n  INC: function INC(s) {\n    return {\n      num: s.num + 1\n    };\n  }\n};\n\nfunction reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (handlers[action.type]) {\n    return handlers[action.type](state);\n  }\n\n  return state;\n}\n\nmodule.exports = reducer;\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./client/reducers/index.js?");

/***/ }),

/***/ "./client/store.js":
/*!*************************!*\
  !*** ./client/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar configureStore = function configureStore(initialState) {\n  var store = (0, _redux.createStore)(__webpack_require__(/*! ./reducers */ \"./client/reducers/index.js\"), initialState);\n\n  if (false) {}\n\n  return store;\n};\n\nvar _default = configureStore;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./client/store.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _serverRender = _interopRequireDefault(__webpack_require__(/*! ./server-render */ \"./server/server-render.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar app = _express[\"default\"].Router();\n\napp.get('/whoami', function (req, res) {\n  res.send(\"You are a winner 10\");\n}); // Anything else gets passed to the client app's server rendering\n\napp.get('*', function (req, res, next) {\n  (0, _serverRender[\"default\"])(req.path, function (err, page) {\n    if (err) return next(err);\n    res.send(page);\n  });\n});\nvar _default = app;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./server/app.js?");

/***/ }),

/***/ "./server/server-render.js":
/*!*********************************!*\
  !*** ./server/server-render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ../client/components/App */ \"./client/components/App.js\"));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../client/store */ \"./client/store.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction renderApp(path, callback) {\n  var store = (0, _store[\"default\"])();\n  var state = store.getState();\n\n  try {\n    var rendered = (0, _server.renderToString)( /*#__PURE__*/_react[\"default\"].createElement(_reactRedux.Provider, {\n      store: store\n    }, /*#__PURE__*/_react[\"default\"].createElement(_App[\"default\"], null)));\n    callback(null, \"\\n      <html>\\n        <head>\\n          <title>Sample App</title>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\".concat(rendered, \"</div>\\n          <script type=\\\"text/javascript\\\">\\n            window.initialStoreData = \").concat(JSON.stringify(state), \";\\n          </script>\\n          <script src=\\\"/bundle.js\\\"></script>\\n        </body>\\n      </html>\\n    \"));\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nvar _default = renderApp;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://ultimate-hot-reloading-example/./server/server-render.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/app.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;