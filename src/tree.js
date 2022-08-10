import { mergeSort } from "./merge-sort";

const node = function nodeFactory(data = null) {
  const node = {};

  node.left = null;
  node.data = data;
  node.right = null;

  return node;
};

const tree = function treeFactory(array) {
  let tree = {};

  let sortedArray = mergeSort(array);
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

export { node, tree, buildTree };
