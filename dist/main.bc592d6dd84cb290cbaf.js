(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "tjUo");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/qbU":
/*!*******************************!*\
  !*** ./src/module/getJSON.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Created by wanghongxiang on 2018/11/20.\n */\nvar getJSON = function (url, callback) {\n    var request = new XMLHttpRequest();\n    request.open('GET', url, true);\n\n    request.onload = function () {\n        if (request.status >= 200 && request.status < 400) {\n            // Success!\n            var data = JSON.parse(request.responseText);\n            callback(data);\n        } else {\n            // We reached our target server, but it returned an error\n            callback({\n                status: request.status\n            });\n        }\n    };\n\n    request.onerror = function (err) {\n        // There was a connection error of some sort\n        callback(err);\n    };\n\n    request.send();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getJSON);\n\n//# sourceURL=webpack://MyLibrary/./src/module/getJSON.js?");

/***/ }),

/***/ "bQRy":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <title>Title</title>\\n</head>\\n<body>\\n<!--这里是注释哈哈哈看看我是否会消失-->\\n</body>\\n</html>\";\n\n//# sourceURL=webpack://MyLibrary/./src/index.html?");

/***/ }),

/***/ "rdrj":
/*!******************************!*\
  !*** ./src/module/extend.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Created by wanghongxiang on 2018/11/20.\n */\nvar deepExtend = function (out) {\n    out = out || {};\n\n    for (var i = 1; i < arguments.length; i++) {\n        var obj = arguments[i];\n\n        if (!obj) continue;\n\n        for (var key in obj) {\n            if (obj.hasOwnProperty(key)) {\n                if (typeof obj[key] === 'object') out[key] = deepExtend(out[key], obj[key]);else out[key] = obj[key];\n            }\n        }\n    }\n    return out;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (deepExtend);\n\n//# sourceURL=webpack://MyLibrary/./src/module/extend.js?");

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"bQRy\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _module_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/extend */ \"rdrj\");\n/* harmony import */ var _module_fadeIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/fadeIn */ \"z3cH\");\n/* harmony import */ var _module_getJSON__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/getJSON */ \"/qbU\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './index.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/**\n * Created by wanghongxiang on 2018/11/18.\n */\n\n\n\n\n\n\n//# sourceURL=webpack://MyLibrary/./src/index.js?");

/***/ }),

/***/ "z3cH":
/*!******************************!*\
  !*** ./src/module/fadeIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Created by wanghongxiang on 2018/11/20.\n */\nvar fadeIn = function (el) {\n    el.style.opacity = 0;\n\n    var last = +new Date();\n    var tick = function () {\n        el.style.opacity = +el.style.opacity + (new Date() - last) / 400;\n        last = +new Date();\n\n        if (+el.style.opacity < 1) {\n            window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);\n        }\n    };\n    console.log('sdsdsdsdsdsßddddddddddd');\n\n    tick();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (fadeIn);\n\n//# sourceURL=webpack://MyLibrary/./src/module/fadeIn.js?");

/***/ })

/******/ });
});