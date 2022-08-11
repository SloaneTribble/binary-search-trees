import { node } from "./tree";

import { find } from "./search";

const addValue = function addLeafToTree(root, value) {
  if (root == null) {
    root = node(value);
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
  if (find(root, value) === "Not found") {
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

export { insertValue, deleteValue };
