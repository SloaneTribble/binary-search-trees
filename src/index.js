import { mergeSort } from "./merge-sort";

import { preOrder } from "./traverse";

import { node, tree, buildTree } from "./tree";

import { insertValue } from "./insert-delete";

let array1 = [1, 2, 3, 4, 5, 6, 7];

const newTree = tree(array1);

console.log(newTree.root);

preOrder(newTree.root);

insertValue(newTree.root, 15);

preOrder(newTree.root);
