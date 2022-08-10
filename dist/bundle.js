/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/insert-delete.js":
/*!******************************!*\
  !*** ./src/insert-delete.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteValue": () => (/* binding */ deleteValue),
/* harmony export */   "insertValue": () => (/* binding */ insertValue)
/* harmony export */ });
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./src/tree.js");


const insertValue = function addLeafToTree(root, value) {
  if (root == null) {
    root = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.node)(value);
  }

  if (value < root.data) {
    root.left = insertValue(root.left, value);
  } else if (value > root.data) {
    root.right = insertValue(root.right, value);
  }

  return root;
};

const deleteValue = function removeNodeFromTree(root, value) {
  if (root == null) {
    return root;
  }
  if (value < root.data) {
    root.left = deleteValue(root.left, value);
  } else if (value > root.data) {
    root.right = deleteValue(root.right, value);
  } else {
    if (root.left == null) {
      return root.right;
    } else if (root.right == null) {
      return root.left;
    }

    root.data = minValue(root.right);

    root.right = deleteValue(root.right, root.data);
  }

  return root;
};

const minValue = function findMinValue(root) {
  let minV = root.data;

  while (root.left != null) {
    minV = root.left.data;
    root = root.left;
  }
  return minV;
};




/***/ }),

/***/ "./src/merge-sort.js":
/*!***************************!*\
  !*** ./src/merge-sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeSort": () => (/* binding */ mergeSort)
/* harmony export */ });
const merge = function mergeLeftAndRight(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length > 0) {
    result.push(left.shift());
  }
  while (right.length > 0) {
    result.push(right.shift());
  }
  return result;
};

const mergeSort = function divideAndConquer(array) {
  if (array.length === 1) {
    return array;
  }

  let midIndex = Math.floor(array.length / 2);

  let left = array.slice(0, midIndex);

  let right = array.slice(midIndex);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};




/***/ }),

/***/ "./src/traverse.js":
/*!*************************!*\
  !*** ./src/traverse.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preOrder": () => (/* binding */ preOrder)
/* harmony export */ });
const preOrder = function preOrderTraversal(node) {
  if (node === null) {
    return;
  }
  console.log(`${node.data}, `);
  preOrder(node.left);
  preOrder(node.right);
};




/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTree": () => (/* binding */ buildTree),
/* harmony export */   "node": () => (/* binding */ node),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge-sort */ "./src/merge-sort.js");


const node = function nodeFactory(data = null) {
  const node = {};

  node.left = null;
  node.data = data;
  node.right = null;

  return node;
};

const tree = function treeFactory(array) {
  let tree = {};

  let sortedArray = (0,_merge_sort__WEBPACK_IMPORTED_MODULE_0__.mergeSort)(array);
  console.log(sortedArray);

  const length = array.length;

  // The root is an object linking to all of its descendants
  tree.root = buildTree(sortedArray, 0, length - 1);
  return tree;
};

const buildTree = function buildTreeFromArray(array, start, end) {
  if (start > end) {
    return null;
  }

  let mid = parseInt((start + end) / 2);
  let newNode = node(array[mid]);

  newNode.left = buildTree(array, start, mid - 1);
  newNode.right = buildTree(array, mid + 1, end);

  return newNode;
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traverse */ "./src/traverse.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree */ "./src/tree.js");
/* harmony import */ var _insert_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insert-delete */ "./src/insert-delete.js");






let array1 = [1, 2, 3, 4, 5, 6, 7];

const newTree = (0,_tree__WEBPACK_IMPORTED_MODULE_1__.tree)(array1);

console.log(newTree.root);

(0,_traverse__WEBPACK_IMPORTED_MODULE_0__.preOrder)(newTree.root);

(0,_insert_delete__WEBPACK_IMPORTED_MODULE_2__.insertValue)(newTree.root, 15);

(0,_traverse__WEBPACK_IMPORTED_MODULE_0__.preOrder)(newTree.root);

(0,_insert_delete__WEBPACK_IMPORTED_MODULE_2__.deleteValue)(newTree.root, 3);

(0,_traverse__WEBPACK_IMPORTED_MODULE_0__.preOrder)(newTree.root);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map