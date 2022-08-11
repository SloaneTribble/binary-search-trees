import { preOrder, inOrder, postOrder } from "./depth-first";

import { tree } from "./tree";

import { insertValue, deleteValue } from "./insert-delete";

import { find } from "./search";

import { levelOrder, levelOrderRecursive } from "./breadth-first";

import { height, depth } from "./height-depth";

import { isBalanced, balance } from "./balance";

const dummy = function useless(node) {
  return `Callback for ${node}`;
};

// Create a BST from an array of random numbers
let array1 = [10, 1, 4, 3, 2, 12, 9, 8, 6, 5, 7];

const newTree = tree(array1);

const treeRoot = newTree.root;

// Confirm that the tree is balanced

console.log(isBalanced(treeRoot));

console.log(levelOrder(treeRoot));
console.log(preOrder(treeRoot));
console.log(inOrder(treeRoot));
console.log(postOrder(treeRoot));

// Unbalance the tree

insertValue(treeRoot, 300);
insertValue(treeRoot, 200);
insertValue(treeRoot, 100);

// Confirm that tree is unbalanced

console.log(isBalanced(treeRoot));

// Balance the tree

const balancedTree = balance(treeRoot);

const balancedRoot = balancedTree.root;

// Confirm that tree is balanced

console.log(isBalanced(balancedRoot));

console.log(levelOrder(balancedRoot));
console.log(preOrder(balancedRoot));
console.log(inOrder(balancedRoot));
console.log(postOrder(balancedRoot));
