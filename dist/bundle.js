/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/balance.js":
/*!************************!*\
  !*** ./src/balance.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "balance": () => (/* binding */ balance),
/* harmony export */   "isBalanced": () => (/* binding */ isBalanced)
/* harmony export */ });
/* harmony import */ var _height_depth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./height-depth.js */ "./src/height-depth.js");
/* harmony import */ var _breadth_first__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadth-first */ "./src/breadth-first.js");
/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge-sort */ "./src/merge-sort.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree */ "./src/tree.js");








const isBalanced = function checkIfBalanced(root) {
  if (root == null) {
    return true;
  }

  let leftHeight = (0,_height_depth_js__WEBPACK_IMPORTED_MODULE_0__.height)(root.left);
  let rightHeight = (0,_height_depth_js__WEBPACK_IMPORTED_MODULE_0__.height)(root.right);

  if (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    isBalanced(root.left) == true &&
    isBalanced(root.right) == true
  ) {
    return true;
  }

  return false;
};

/**
 * Balance function should traverse tree to get array of values,
 * sort that array, then generate a new tree
 */

const balance = function traverseAndReplace(root) {
  let values = (0,_breadth_first__WEBPACK_IMPORTED_MODULE_1__.levelOrder)(root);

  return (0,_tree__WEBPACK_IMPORTED_MODULE_3__.tree)(values);
};




/***/ }),

/***/ "./src/breadth-first.js":
/*!******************************!*\
  !*** ./src/breadth-first.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "levelOrder": () => (/* binding */ levelOrder),
/* harmony export */   "levelOrderRecursive": () => (/* binding */ levelOrderRecursive)
/* harmony export */ });
/**
 * Accept a root and another function as parameters
 * Traverse the tree in breadth-first level order and pass each node as an
 * argument to the provided function.
 *
 * If no function is given, return an array of values.
 *
 * Use a queue to keep track of child nodes to be traversed.
 */

// push() to add element to end of array (enqueue)
// shift() to remove element from beginning of array (dequeue)

const basic = function defaultCallBack(node, array) {
  array.push(node.data);
};

const levelOrder = function levelOrderTraverse(root, callBack) {
  if (root === null) {
    return;
  }

  if (!callBack) {
    callBack = basic;
  }

  // Only used if no callback is provided
  let traversal = [];

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let current = queue.shift();
    callBack(current, traversal);

    if (current.left != null) {
      queue.push(current.left);
    }
    if (current.right != null) {
      queue.push(current.right);
    }
  }

  if (callBack == basic) {
    return traversal;
  }
};

const levelOrderRecursive = function recursiveLevelOrderTraverse(
  root,
  callBack
) {
  if (!callBack) {
    callBack = basic;
  }
  let traversal = [];
  let queue = [];
  queue.push(root);
  recursiveComponent(queue, callBack, traversal);
};

const recursiveComponent = function recursion(queue, callBack, array) {
  if (queue.length === 0) {
    // If no callback was provided, an array was generated
    if (array.length > 0) {
      // console.log(array);
    }
    return;
  }

  let currentNode = queue.shift();
  callBack(currentNode, array);
  if (currentNode.left) {
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }
  recursiveComponent(queue, callBack, array);
};




/***/ }),

/***/ "./src/depth-first.js":
/*!****************************!*\
  !*** ./src/depth-first.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inOrder": () => (/* binding */ inOrder),
/* harmony export */   "postOrder": () => (/* binding */ postOrder),
/* harmony export */   "preOrder": () => (/* binding */ preOrder)
/* harmony export */ });
const preOrder = function preOrderTraversal(node, callBack, arr = []) {
  if (node == null) {
    return;
  }
  if (!callBack) {
    arr.push(node.data);
  } else {
    arr.push(callBack(node.data));
  }
  preOrder(node.left, callBack, arr);
  preOrder(node.right, callBack, arr);

  return arr;
};

const inOrder = function inOrderTraversal(node, callBack, arr = []) {
  if (node === null) {
    return;
  }
  inOrder(node.left, callBack, arr);

  if (!callBack) {
    arr.push(node.data);
  } else {
    arr.push(callBack(node.data));
  }
  inOrder(node.right, callBack, arr);

  return arr;
};

const postOrder = function postOrderTraversal(node, callBack, arr = []) {
  if (node === null) {
    return;
  }
  postOrder(node.left, callBack, arr);
  postOrder(node.right, callBack, arr);

  if (!callBack) {
    arr.push(node.data);
  } else {
    arr.push(callBack(node.data));
  }

  return arr;
};




/***/ }),

/***/ "./src/height-depth.js":
/*!*****************************!*\
  !*** ./src/height-depth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "depth": () => (/* binding */ depth),
/* harmony export */   "height": () => (/* binding */ height)
/* harmony export */ });
/**
 * Given a node, return the number of edges in longest path from a given node to a leaf node
 */

const height = function getHeight(node) {
  if (node == null) {
    return 0;
  }
  let leftHeight = height(node.left);
  let rightHeight = height(node.right);

  return max(leftHeight, rightHeight) + 1;
};

const max = function getMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const depth = function findDepth(root, x) {
  // If tree is empty
  if (root == null) {
    return -1;
  }
  let distance = -1;

  if (
    root.data == x ||
    // If x is present in either subtree
    (distance = depth(root.left, x)) >= 0 ||
    (distance = depth(root.right, x)) >= 0
  ) {
    return distance + 1;
  }

  return distance;
};




/***/ }),

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
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/search.js");




const addValue = function addLeafToTree(root, value) {
  if (root == null) {
    root = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.node)(value);
  }

  if (value < root.data) {
    root.left = addValue(root.left, value);
  } else if (value > root.data) {
    root.right = addValue(root.right, value);
  }

  return root;
};

const insertValue = function checkForDupsThenInsert(root, value) {
  // Must avoid duplicates to prevent complications
  if ((0,_search__WEBPACK_IMPORTED_MODULE_1__.find)(root, value) === "Not found") {
    addValue(root, value);
  } else {
    return "Cannot add duplicates";
  }
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

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": () => (/* binding */ find)
/* harmony export */ });
/**
 * Given a node and a value to search, compare that node's data to the value
 *
 * If the node's data is larger, perform the search on the left subtree
 *
 * If the node's data is smaller, perform the search on the right subtree
 *
 * If the node's data is equal, return that node
 *
 * If you run out of nodes, return "not found"
 */

const find = function binarySeach(root, value) {
  if (root == null) {
    return "Not found";
  }
  if (root.data === value) {
    return root;
  }

  if (root.data > value) {
    return find(root.left, value);
  }

  if (root.data < value) {
    return find(root.right, value);
  }
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
/* harmony import */ var _depth_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./depth-first */ "./src/depth-first.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree */ "./src/tree.js");
/* harmony import */ var _insert_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insert-delete */ "./src/insert-delete.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/search.js");
/* harmony import */ var _breadth_first__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadth-first */ "./src/breadth-first.js");
/* harmony import */ var _height_depth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./height-depth */ "./src/height-depth.js");
/* harmony import */ var _balance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./balance */ "./src/balance.js");














const dummy = function useless(node) {
  return `Callback for ${node}`;
};

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const newTree = (0,_tree__WEBPACK_IMPORTED_MODULE_1__.tree)(array1);

// console.log(newTree.root);

// console.log(preOrder(newTree.root, dummy));

// console.log(inOrder(newTree.root, dummy));

// console.log(postOrder(newTree.root, dummy));

// insertValue(newTree.root, 15);

(0,_depth_first__WEBPACK_IMPORTED_MODULE_0__.preOrder)(newTree.root);

// deleteValue(newTree.root, 3);

(0,_depth_first__WEBPACK_IMPORTED_MODULE_0__.preOrder)(newTree.root);

// console.log(find(newTree.root, 4));

(0,_breadth_first__WEBPACK_IMPORTED_MODULE_4__.levelOrder)(newTree.root);

(0,_breadth_first__WEBPACK_IMPORTED_MODULE_4__.levelOrderRecursive)(newTree.root);

console.log((0,_height_depth__WEBPACK_IMPORTED_MODULE_5__.height)(newTree.root.left));

console.log((0,_height_depth__WEBPACK_IMPORTED_MODULE_5__.depth)(newTree.root, 5));

console.log((0,_balance__WEBPACK_IMPORTED_MODULE_6__.isBalanced)(newTree.root));

(0,_insert_delete__WEBPACK_IMPORTED_MODULE_2__.deleteValue)(newTree.root, 3);
(0,_insert_delete__WEBPACK_IMPORTED_MODULE_2__.insertValue)(newTree.root, 3);

console.log((0,_balance__WEBPACK_IMPORTED_MODULE_6__.isBalanced)(newTree.root));

const balanced = (0,_balance__WEBPACK_IMPORTED_MODULE_6__.balance)(newTree.root);

console.log((0,_balance__WEBPACK_IMPORTED_MODULE_6__.isBalanced)(balanced));

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map