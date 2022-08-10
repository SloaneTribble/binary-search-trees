import { preOrder } from "./traverse";

import { tree } from "./tree";

import { insertValue, deleteValue } from "./insert-delete";

import { find } from "./search";

let array1 = [1, 2, 3, 4, 5, 6, 7];

const newTree = tree(array1);

console.log(newTree.root);

preOrder(newTree.root);

insertValue(newTree.root, 15);

preOrder(newTree.root);

deleteValue(newTree.root, 3);

preOrder(newTree.root);

console.log(find(newTree.root, 4));
