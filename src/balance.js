import { height } from "./height-depth.js";

import { levelOrder } from "./breadth-first";

import { mergeSort } from "./merge-sort";

import { tree } from "./tree";

const isBalanced = function checkIfBalanced(root) {
  if (root == null) {
    return true;
  }

  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

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
  let values = levelOrder(root);

  return tree(values);
};

export { isBalanced, balance };
