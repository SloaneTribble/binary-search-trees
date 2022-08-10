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

let array1 = [4, 6, 2, 67, 3, 1, 0];

const newTree = tree(array1);

console.log(newTree);
