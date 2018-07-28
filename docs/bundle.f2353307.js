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

var _config = __webpack_require__(/*! ./scripts/config */ "./src/scripts/config.js");

var _config2 = _interopRequireDefault(_config);

var _loadStyle = __webpack_require__(/*! ./scripts/loadStyle */ "./src/scripts/loadStyle.js");

var _loadMd = __webpack_require__(/*! ./scripts/loadMd */ "./src/scripts/loadMd.js");

var _endAnimate = __webpack_require__(/*! ./scripts/endAnimate */ "./src/scripts/endAnimate.js");

var _endAnimate2 = _interopRequireDefault(_endAnimate);

var _style = __webpack_require__(/*! ./load/style */ "./src/load/style.js");

var _resume = __webpack_require__(/*! ./load/resume */ "./src/load/resume.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var skipBtn = document.querySelector('#skip-btn');
skipBtn.addEventListener('click', function () {
  _config2.default.pause = true;
});

(0, _loadStyle.loadStyle)({
  containerName: '#style-editor',
  content: _style.style1
}).then(function () {
  return (0, _loadMd.loadMd)({
    containerName: '#resume-content',
    content: _resume.resume
  });
}).then(function () {
  return (0, _loadStyle.loadStyle)({
    containerName: '#style-editor',
    content: _style.style2,
    write: false
  });
}).then(function () {
  skipBtn.style.display = 'none';
  if (_config2.default.isMobile) {
    (0, _endAnimate2.default)();
  }
}).catch(function () {
  skipBtn.style.display = 'none';

  (0, _loadStyle.skipStyle)({ containerName: '#style-editor', content: _style.style1 });
  (0, _loadMd.skipMd)({ containerName: '#resume-content', content: _resume.resume });
  (0, _loadStyle.skipStyle)({ containerName: '#style-editor', content: _style.style2, write: false });
  if (_config2.default.isMobile) {
    (0, _endAnimate2.default)();
  }
});

/***/ }),

/***/ "./src/load/resume.js":
/*!****************************!*\
  !*** ./src/load/resume.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var resume = exports.resume = "# Qi\n\nFront End Engineer\n\n# Availability\n\n* html, css, js\n* jquery, vue, react\n\n# Work Experience\n\n* \u4E0A\u6D77\u5793\u65B9\n\n# Projects\n\n* www.gigacre.com\n* [pretend to be a project](pretend.to.be.a.url)\n* [pretend to be a project](pretend.to.be.a.URL)\n* [pretend to be a project](pretend.to.be.a.url)\n* [pretend to be a project](pretend.to.be.a.url)\n* [pretend to be a project](pretend.to.be.a.url)\n\n# Open Source\n\n* [vue_teris](https://qishaoxuan.github.io/vue_tetris/)\n* [pretend to have many open sources](pretend.to.be.a.url)\n* [pretend to have many open sources](pretend.to.be.a.url)\n* [pretend to have many open sources](pretend.to.be.a.url)\n* [pretend to have many open sources](pretend.to.be.a.url)\n\n";

/***/ }),

/***/ "./src/load/style.js":
/*!***************************!*\
  !*** ./src/load/style.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style2 = exports.style1 = undefined;

var _config = __webpack_require__(/*! ../scripts/config */ "./src/scripts/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style1 = exports.style1 = '/**\n *\n * Hey. My name\'s qishaoxuan. I\'m a web developer.\n *\n * I build a animating resume\n *\n * Let\'s begin. We start by animating... yes, everything.\n */\n\n* {\n  transition: all 1s;\n}\n\n/**\n * It seems to do noting. But you\'ll see.\n *\n * Black on white is really boring,\n * change threm first.\n */\n\nhtml {\n  background: rgb(63, 82, 99);\n  font-size: 10px;\n  overflow: hidden;\n}\n\n/***\n * Hold on...\n */\n\npre, a {\n  color: #ffffff;\n}\n\n/**\n * That\'s better. \n *\n * Working in this big rempty space is tough.\n *\n * I\'m going to make a nice area to show the content.\n */\n\npre:not(:empty) {\n  ' + (_config2.default.isMobile ? 'width: calc(100% - 2rem);\n  max-height: 46%;' : 'width: 49%;\n  max-height: 92%;') + '\n  font-size: 1.2rem;\n  overflow: auto;\n  background: rgb(48, 48, 48);\n  border: 1px solid #ccc;\n  padding: 1rem 1rem 2rem;\n  white-space: pre-wrap;\n  outline: 0;\n}\n\n#style-editor {\n  ' + (_config2.default.isMobile ? '' : 'transform: translateX(95%);') + '\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n}\n\n/**\n * This is good, but all the text is white!\n * Let\'s make it more readable.\n */\n\n#style-editor  { color: #DEDEDE }\n.comment       { color: #857F6B; font-style: italic; }\n.selector      { color: #D7BA7D; }\n.keyword       { color: #569CD6; }\n.property      { color: #569CD6; }\n.function      { color: #C366A3; }\n.punctuation   { color: #FFCF00; }\n\n/**\n * It`s time to get a little perspective.\n */\n\nbody {\n  perspective: 100rem;\n}\n\n#style-editor {\n  ' + (_config2.default.isMobile ? 'transform: rotateX(-10deg);' : 'transform: translateX(98.5%) rotateY(-10deg);') + '\n  transform-origin: right;\n}\n\n/**\n * Okey, it is time to show the resume.\n * You must not just come to see the pretty colors.\n */\n \n #resume-content {\n ' + (_config2.default.isMobile ? 'position: absolute;\n left: 1rem;\n bottom: 3rem;\n height: 48%;' : 'position: absolute;\n  left: 1rem;\n  top: 1rem;\n  transform: rotateY(10deg);\n  transform-origin: left;') + ' \n}\n';

var style2 = exports.style2 = '/**\n * That markdown on the left doesn\'t look great. Let\'s render it.\n */\n\n#resume-content{\n  padding: 2rem;\n  font-size: 1.4rem;\n}\n#resume-content h1{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 2.5rem 0 1rem;\n  font-size: 2.6rem;\n}\n#resume-content a{\n  color: #ffffff;\n  text-decoration: none;\n}\n#resume-content ul> li{\n  margin-bottom: .3rem;\n}\n#resume-content ul> li::before{\n  content: \'\u2022\';\n  margin-right: .5rem;\n  color: \'#ffffff\';\n}\n\n/**\n * Okey, this is almost done.\n *\n * This page is inspired by http://strml.net/\uFF0C which was what I met when I was a beginner of js.\n *\n * It is really surprise me, and now I can code it by my self.\n *\n * Ertainly\uFF0Cmost of sentences is from that, my English is very poor~ after all.\n * \n */';

/***/ }),

/***/ "./src/scripts/config.js":
/*!*******************************!*\
  !*** ./src/scripts/config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  pause: false,
  isMobile: isMobile()
};
function isMobile() {
  return document.body.clientWidth < 750 ? true : false;
}
exports.default = config;

/***/ }),

/***/ "./src/scripts/endAnimate.js":
/*!***********************************!*\
  !*** ./src/scripts/endAnimate.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endAnimate;

var _betterScroll = __webpack_require__(/*! better-scroll */ "./node_modules/_better-scroll@1.12.5@better-scroll/dist/bscroll.esm.js");

var _betterScroll2 = _interopRequireDefault(_betterScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function endAnimate() {
  var body = document.querySelector('body');
  var styleContainer = document.querySelector('.style-container');
  var style = document.querySelector('#style-editor');
  var mdContainer = document.querySelector('.resume-container');
  var md = document.querySelector('#resume-content');
  body.style.cssText = 'overflow:hidden';

  var cs = {
    width: 'calc(100% - 2rem)',
    height: 'calc(100% - 4rem)',
    overflow: 'hidden',
    border: '1px solid #ccc',
    background: 'rgb(48, 48, 48)',
    position: 'absolute',
    left: '1rem'
  };

  for (var key in cs) {
    styleContainer.style[key] = cs[key];
    mdContainer.style[key] = cs[key];
  }
  styleContainer.style.top = '1rem';
  mdContainer.style.top = 'calc(100% + 1rem)';

  var innerStyle = {
    transition: 'all 0s',
    maxHeight: 'none',
    overflow: 'visible',
    position: 'static',
    width: '100%',
    border: 'none',
    height: 'auto'
  };

  for (var _key in innerStyle) {
    style.style[_key] = innerStyle[_key];
    md.style[_key] = innerStyle[_key];
  }
  style.style.transform = 'rotateX(0deg)';
  md.style.paddingBottom = '10rem';

  setTimeout(function () {
    mdContainer.style.transition = 'transform .5s ease-out';
    styleContainer.style.transition = 'transform .5s ease-out';
    mdContainer.style.transform = 'translateY(calc(-100% - 4rem))';
    styleContainer.style.transform = 'translateY(calc(-100% - 1rem))';
  }, 500);

  var styleScroll = new _betterScroll2.default('.style-container', {
    pullUpLoad: {
      threshold: 20
    }
  });

  var mdScroll = new _betterScroll2.default('.resume-container', {
    pullDownRefresh: {
      threshold: 20
    }
  });
  styleScroll.on('pullingUp', function () {
    mdContainer.style.transform = 'translateY(calc(-100% - 4rem))';
    styleContainer.style.transform = 'translateY(calc(-100% - 1rem))';
    styleScroll.finishPullUp();
  });
  mdScroll.on('pullingDown', function () {
    mdContainer.style.transform = 'translateY(0)';
    styleContainer.style.transform = 'translateY(0)';
    mdScroll.finishPullDown();
  });
}

/***/ }),

/***/ "./src/scripts/loadMd.js":
/*!*******************************!*\
  !*** ./src/scripts/loadMd.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.loadMd = loadMd;
exports.skipMd = skipMd;

var _marked = __webpack_require__(/*! marked */ "./node_modules/_marked@0.4.0@marked/lib/marked.js");

var _marked2 = _interopRequireDefault(_marked);

var _config = __webpack_require__(/*! ./config */ "./src/scripts/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadMd() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    containerName: '',
    content: ''
  };

  return new _promise2.default(function (resolve, reject) {
    var container = document.querySelector(options.containerName);
    var mdStr = options.content;
    var interval = 50;
    var num = 0;
    var sum = mdStr.length;

    var start = function start() {
      setTimeout(function () {
        num += 1;
        var wordNow = mdStr.substring(num - 1, num);

        container.scrollTop = 100000;

        if (num <= sum) {
          if (wordNow === '\n') {
            container.innerHTML = (0, _marked2.default)(mdStr.substr(0, num));
          } else {
            container.innerHTML = container.innerHTML + wordNow;
          }
          if (_config2.default.pause) {
            container.scrollTop = 0;
            return reject();
          } else {
            start();
          }
        } else {
          return resolve();
        }
      }, 50);
    };

    start();
  });
}

function skipMd() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    containerName: '',
    content: ''
  };

  var container = document.querySelector(options.containerName);
  var mdStr = options.content;

  container.innerHTML = (0, _marked2.default)(mdStr);
}

/***/ }),

/***/ "./src/scripts/loadStyle.js":
/*!**********************************!*\
  !*** ./src/scripts/loadStyle.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.loadStyle = loadStyle;
exports.skipStyle = skipStyle;

var _prismCore = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/_prismjs@1.15.0@prismjs/components/prism-core.js");

var _prismCore2 = _interopRequireDefault(_prismCore);

__webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/_prismjs@1.15.0@prismjs/components/prism-css.js");

var _config = __webpack_require__(/*! ./config */ "./src/scripts/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadStyle() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    containerName: '',
    content: '',
    rewrite: true
  };

  return new _promise2.default(function (resolve, reject) {
    var styleStr = options.content;
    var container = document.querySelector(options.containerName);
    var num = 0;
    var sum = styleStr.length;
    var containerOriginContent = '';
    var styleContainer = getStyleContainer();
    var interval = 1;
    if (!options.rewrite) {
      containerOriginContent = container.innerHTML;
    }

    var start = function start() {
      setTimeout(function () {
        num += 1;
        if (num <= sum) {
          var str = styleStr.substr(0, num);
          var code = _prismCore2.default.highlight(str, _prismCore2.default.languages.css);
          var nextInterval = setInterval(str, interval);

          container.scrollTop = 100000;

          container.innerHTML = containerOriginContent + code;
          styleContainer.innerText = str;

          if (_config2.default.pause) {
            return reject();
          } else {
            setTimeout(function () {
              start();
            }, nextInterval);
          }
        } else {
          return resolve();
        }
      }, interval);
    };

    start();
  });
}

function skipStyle() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    containerName: '',
    content: '',
    rewrite: true
  };

  var styleStr = options.content;
  var container = document.querySelector(options.containerName);
  var styleContainer = getStyleContainer();
  var containerOriginContent = '';
  var code = _prismCore2.default.highlight(styleStr, _prismCore2.default.languages.css);

  if (!options.rewrite) {
    containerOriginContent = container.innerHTML;
  }

  container.innerHTML = containerOriginContent + code;
  styleContainer.innerText = styleStr;
}

function setInterval(str) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;

  if (/\D[\,]\s$/.test(str)) return interval * 20;
  if (/[^\/]\n\n$/.test(str)) return interval * 40;
  if (/[\.\?\!]\s$/.test(str)) return interval * 60;
  return 0;
}
function getStyleContainer() {
  var newStyle = document.createElement('style');
  var head = document.querySelector('head');
  head.appendChild(newStyle);
  var allStyle = document.querySelectorAll('style');

  return allStyle[allStyle.length - 1];
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
module.exports = __webpack_require__(/*! /Users/qi/mygit/animate_resume/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.f2353307.js.map