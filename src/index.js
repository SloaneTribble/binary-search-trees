import { mergeSort } from "./merge-sort";

const node = function nodeFactory(data = null) {
  const node = {};

  node.left = null;
  node.data = data;
  node.right = null;

  return node;
};

const tree = function treeFactory(array) {
  const tree = {};

  tree.root = buildTree(array);
};

let array1 = [2, 4, 1, 12, 110, 1];

