/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");

var _index2 = _interopRequireDefault(_index);

var _AR = __webpack_require__(/*! ./scripts/AR */ "./src/scripts/AR.js");

var _AR2 = _interopRequireDefault(_AR);

var _startAnimate = __webpack_require__(/*! ./scripts/startAnimate */ "./src/scripts/startAnimate.js");

var _startAnimate2 = _interopRequireDefault(_startAnimate);

var _load = __webpack_require__(/*! ./load/load */ "./src/load/load.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startCode = '// magic don`t touch';

var rightFont = new _AR2.default({
   language: 'css',
   containerName: '#style-editor',
   content: _load.code1
});
// let rightFont2 = new ar({
//    language: 'css',
//    containerName: '#right-container',
//    content: code2,
//    rewrite: false
// })

// let comma = /\D[\,]\s$/;
// let endOfBlock = /[^\/]\n\n$/;

// startAnimate('#style-editor',startCode)
//     .then(rightFont.load.bind(rightFont))
// .then(rightFont2.load.bind(rightFont2))

rightFont.load();

// style-editor

/***/ }),

/***/ "./src/load/load.js":
/*!**************************!*\
  !*** ./src/load/load.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var code1 = exports.code1 = "/**\n *\n * Hey. My name's qishaoxuan. I'm a web developer.\n *\n * I build a animating resume\n *\n * Let's begin. We start by animating... yes, everything.\n */\n\n* {\n  transition: all 1s;\n}\n\n/**\n * It seems to do noting. But you'll see.\n *\n * Black on white is really boring,\n * change them first.\n */\n\nhtml {\n  background: rgb(63, 82, 99);\n}\n\n/***\n * Hold on...\n */\n\npre, a {\n  color: #ffffff;\n}\n\n/**\n * That's better. \n *\n * Working in this big empty space is tough.\n *\n * I'm going to make a nice area to show the content.\n */\n\npre:not(:empty) {\n  overflow: auto;\n  background: rgb(48, 48, 48);\n  border: 1px solid #ccc;\n  width: 49%;\n  /*font-family: monospace;*/\n  padding: 10px 10px 20px;\n  box-shadow: -4x 2px 0 rgba(0,0,0,0.3);\n  white-space: pre-wrap;\n  outline: 0;\n}\n\n#style-editor {\n  transform: translateX(95%);\n  position: absolute;\n  max-height: 94%;\n}\n\n/**\n * This is good, but all the text is white!\n * Let's make it more readable.\n */\n\n#style-editor  { color: #DEDEDE }\n.comment       { color: #857F6B; font-style: italic; }\n.selector      { color: #D7BA7D; }\n.keyword       { color: #569CD6; }\n.property      { color: #569CD6; }\n.function      { color: #DCDCDC; }\n.punctuation   { color: #999999; }\n\n/**\n * It`s time to get a little perspective.\n */\n\nbody {\n  perspective: 1000px;\n}\n\n#style-editor {\n  transform: translateX(98.5%) rotateY(-10deg);\n  transform-origin: right;\n}\n\n/**\n *  * Okey, it is time to show the resume.\n * You must not just come to see the pretty colors.\n */\n \n #resume-content {\n  transform: rotateY(10deg);\n  transform-origin: left;\n}\n";

var code2 = exports.code2 = "\n\npre:not(#style-text) {\n  -webkit-transform: rotateY(10deg);\n  -webkit-transform-origin: left;\n}\n\n\n/**\n * That markdown on the left doesn't look great. Let's render it.\n */\n\n#work-text.flipped {\n  -webkit-transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);\n}\n\n#work-text .md {\n  -webkit-transform: rotateY(190deg) rotateZ(180deg);\n  margin-top: 800px;\n}\n\n/**\n * Alright. We're ready.\n *\n * 3...\n * 2...\n * 1...\n *\n * .\n * ....faked you out.\n *\n * Okay here we go!\n *\n */\n\n\n/**\n * The text could use some tweaks.\n */\n\n.md {\n  font-family: \"Helvetica Neue\", Helvetica, sans-serif;\n}\n\n.md h1, .md h2, .md h3, .md h4, .md h5, .md h6 {\n  display: inline-block;\n  color: #ddd;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 5px;\n}\n\n.md li {\n  margin: 5px 0;\n}\n\n.md h1, .md h2, .md h3, .md h4, .md h5, .md h6, .md ul, .md p {\n  margin: 0px;\n}\n\n/**\n * That's better.\n *\n * If you want to contact me, use the PGP keys on the left.\n *\n * You know, if you're into that sort of thing.\n */\n\n#pgp-text {\n  font-size: 12px;\n  color: #ada;\n}\n\n\n/**\n * We're almost done.\n */\n\n pre:hover{\n   box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);\n }\n\n #skip-animation, #pause-resume {\n   display: none;\n }\n\n/**\n * I hope you enjoyed this.\n *\n * Thanks to Jake Albaugh, who was the first (that I know of) to do\n * a page like this. Some of the autotyping and syntax highlighting\n * code is based off his work.\n *\n * See more of Jake's work at http://codepen.io/jakealbaugh/\n */\n\n/**\n * By the way, you can edit this box. Try adding new CSS!\n *\n * For example,\n *\n * The property 'text-shadow' takes the parameters:\n * 'x', 'y', 'blur', 'color'.\n *\n * So if I wanted to mirror the values,\n * I could place a shadow 15px under it,\n * with a little blur for effect:\n */\n\n.value {\n  color:hi;\n  text-shadow: 0px 15px 1px white;\n}\n\n/**\n * Try it out! There's lots you can do.\n * Try playing with text sizes, shadows, animations, or just\n * break the page. I won't hold it against you.\n */";

/***/ }),

/***/ "./src/scripts/AR.js":
/*!***************************!*\
  !*** ./src/scripts/AR.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _prismjs = __webpack_require__(/*! prismjs */ "./node_modules/_prismjs@1.15.0@prismjs/prism.js");

var _prismjs2 = _interopRequireDefault(_prismjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ar = function () {
   function ar() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
         language: '',
         containerName: '',
         content: '',
         rewrite: true
      };
      (0, _classCallCheck3.default)(this, ar);

      var lang = ['css', 'markdown'];
      if (!lang.includes(options.language)) {
         return console.error('language only support ' + lang.join());
      }

      this.container = document.querySelector(options.containerName);
      this.lang = options.language;
      this.content = options.content;
      this.rewrite = options.rewrite;
      this.interval = 16;
      this.styleContainer = null;
      this.endOfSentence = /[\.\?\!]\s$/;
      this.comma = /\D[\,]\s$/;
      this.endOfBlock = /[^\/]\n\n$/;

      if (this.lang === 'css') {
         var newStyle = document.createElement('style');
         var head = document.querySelector('head');
         head.appendChild(newStyle);
         var allStyle = document.querySelectorAll('style');
         this.styleContainer = allStyle[allStyle.length - 1];
      }
   }

   (0, _createClass3.default)(ar, [{
      key: 'load',
      value: function load() {
         var _this = this;

         return new _promise2.default(function (resolve) {
            var num = 0;
            var sum = _this.content.length;
            var containerOriginContent = '';
            if (!_this.rewrite) {
               containerOriginContent = _this.container.innerHTML;
            }

            var start = function () {
               var _this2 = this;

               setTimeout(function () {
                  num += 1;
                  if (num <= sum) {
                     var str = _this2.content.substr(0, num);
                     var code = _prismjs2.default.highlight(str, _prismjs2.default.languages[_this2.lang]);
                     _this2.scrollToBottom();
                     _this2.container.innerHTML = containerOriginContent + code;
                     if (_this2.lang === 'css') {
                        _this2.styleContainer.innerText = str;
                     }
                     var interval = _this2.setInterval(str);
                     if (interval) {
                        setTimeout(function () {
                           start();
                        }, interval);
                     } else {
                        start();
                     }
                  } else {
                     return resolve();
                  }
               }, this.interval);
            }.bind(_this);

            start();
         });
      }
   }, {
      key: 'scrollToBottom',
      value: function scrollToBottom() {
         this.container.scrollTop = 100000;
      }
   }, {
      key: 'setInterval',
      value: function setInterval(str) {
         if (this.comma.test(str)) return this.interval * 20;
         if (this.endOfBlock.test(str)) return this.interval * 40;
         if (this.endOfSentence.test(str)) return this.interval * 60;
         return 0;
      }
   }]);
   return ar;
}();

exports.default = ar;

/***/ }),

/***/ "./src/scripts/startAnimate.js":
/*!*************************************!*\
  !*** ./src/scripts/startAnimate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = appear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function appear(container, text) {
   return new _promise2.default(function (resolve) {
      var dom = document.querySelector(container);
      var loadStr = text;
      var num = 0;
      var isEnd = false;
      var sum = loadStr.length;
      var start = function start(interval) {
         setTimeout(function () {
            if (num === 0 && isEnd) {
               return resolve();
            }
            if (isEnd) {
               num -= 1;
            } else {
               num += 1;
               if (num == sum) {
                  isEnd = true;
               }
            }
            dom.innerText = loadStr.substr(0, num);
            start(isEnd ? 10 : 50);
         }, interval);
      };
      start(50);
   });
}

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/_babel-polyfill@6.26.0@babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! D:\mygit\animate_resume\src\index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.964e42ec.js.map