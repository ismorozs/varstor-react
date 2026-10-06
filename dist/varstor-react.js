(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("varstor"), require("react/jsx-runtime"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "varstor", "react/jsx-runtime"], factory);
	else if(typeof exports === 'object')
		exports["VarstorReact"] = factory(require("react"), require("varstor"), require("react/jsx-runtime"));
	else
		root["VarstorReact"] = factory(root["react"], root["varstor"], root["react/jsx-runtime"]);
})(this, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_varstor__, __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react"
/*!************************!*\
  !*** external "react" ***!
  \************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ },

/***/ "react/jsx-runtime"
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__;

/***/ },

/***/ "varstor"
/*!**************************!*\
  !*** external "varstor" ***!
  \**************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_varstor__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VarstorProvider: () => (/* binding */ VarstorProvider),
/* harmony export */   useVarstor: () => (/* binding */ useVarstor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var varstor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! varstor */ "varstor");
/* harmony import */ var varstor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(varstor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const CONTEXTS = {};
const useVarstor = store => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CONTEXTS[store.namespace()]);
const VarstorProvider = ({
  children,
  stores
}) => {
  const contextProviders = stores.map(store => {
    const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(store.get());
    CONTEXTS[store.namespace()] = Context;
    const ContextProvider = ({
      children
    }) => {
      const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(store.get());
      const contextValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => state, [state]);
      const onStoreChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_, store) => setState(store.get()), []);
      (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        store.onChange(onStoreChange);
        return () => {
          store.removeListener(onStoreChange);
        };
      }, [onStoreChange]);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Context, {
        value: contextValues,
        children: children
      });
    };
    return ContextProvider;
  });
  return contextProviders.reduce((children, ContextProvider) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ContextProvider, {
    children: children
  }), children);
};
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});