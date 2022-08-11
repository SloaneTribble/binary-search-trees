import { preOrder, inOrder, postOrder } from "./depth-first";

import { tree } from "./tree";

import { insertValue, deleteValue } from "./insert-delete";

import { find } from "./search";

import { levelOrder, levelOrderRecursive } from "./breadth-first";

import { height, depth } from "./height-depth";

const dummy = function useless(node) {
  return `Callback for ${node}`;
};

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const newTree = tree(array1);

// console.log(newTree.root);

// console.log(preOrder(newTree.root, dummy));

// console.log(inOrder(newTree.root, dummy));

// console.log(postOrder(newTree.root, dummy));

// insertValue(newTree.root, 15);

preOrder(newTree.root);

// deleteValue(newTree.root, 3);

preOrder(newTree.root);

// console.log(find(newTree.root, 4));

levelOrder(newTree.root);

levelOrderRecursive(newTree.root);

console.log(height(newTree.root.left));

console.log(depth(newTree.root, 5));
