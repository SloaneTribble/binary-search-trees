import { preOrder } from "./depth-first";

import { tree } from "./tree";

import { insertValue, deleteValue } from "./insert-delete";

import { find } from "./search";

import { levelOrder, levelOrderRecursive } from "./breadth-first";

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const newTree = tree(array1);

console.log(newTree.root);

preOrder(newTree.root);

// insertValue(newTree.root, 15);

preOrder(newTree.root);

// deleteValue(newTree.root, 3);

preOrder(newTree.root);

console.log(find(newTree.root, 4));

const dummy = function useless(node) {
  console.log("Useless!");
};

levelOrder(newTree.root);

levelOrderRecursive(newTree.root);
