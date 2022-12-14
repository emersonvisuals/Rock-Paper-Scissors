/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/bg-triangle.svg":
/*!************************************!*\
  !*** ./src/assets/bg-triangle.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bg-triangle.svg";

/***/ }),

/***/ "./src/assets/icon-close.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-close.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-close.svg";

/***/ }),

/***/ "./src/assets/icon-paper.svg":
/*!***********************************!*\
  !*** ./src/assets/icon-paper.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-paper.svg";

/***/ }),

/***/ "./src/assets/icon-rock.svg":
/*!**********************************!*\
  !*** ./src/assets/icon-rock.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-rock.svg";

/***/ }),

/***/ "./src/assets/icon-scissors.svg":
/*!**************************************!*\
  !*** ./src/assets/icon-scissors.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-scissors.svg";

/***/ }),

/***/ "./src/assets/image-rules.svg":
/*!************************************!*\
  !*** ./src/assets/image-rules.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "image-rules.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_icon_paper_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icon-paper.svg */ "./src/assets/icon-paper.svg");
/* harmony import */ var _assets_icon_scissors_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon-scissors.svg */ "./src/assets/icon-scissors.svg");
/* harmony import */ var _assets_icon_rock_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icon-rock.svg */ "./src/assets/icon-rock.svg");
/* harmony import */ var _assets_bg_triangle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/bg-triangle.svg */ "./src/assets/bg-triangle.svg");
/* harmony import */ var _assets_image_rules_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/image-rules.svg */ "./src/assets/image-rules.svg");
/* harmony import */ var _assets_icon_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icon-close.svg */ "./src/assets/icon-close.svg");







var iconPaper = document.querySelector('.paper');
iconPaper.src = _assets_icon_paper_svg__WEBPACK_IMPORTED_MODULE_1__;
var iconScissors = document.querySelector('.scissors');
iconScissors.src = _assets_icon_scissors_svg__WEBPACK_IMPORTED_MODULE_2__;
var iconRock = document.querySelector('.rock');
iconRock.src = _assets_icon_rock_svg__WEBPACK_IMPORTED_MODULE_3__;
var rules = document.querySelector('.rulesDiagram');
rules.src = _assets_image_rules_svg__WEBPACK_IMPORTED_MODULE_5__;
var close = document.querySelector('.close');
close.src = _assets_icon_close_svg__WEBPACK_IMPORTED_MODULE_6__;
})();

/******/ })()
;
//# sourceMappingURL=bundlede22948b06ff2b37d0d9.js.map