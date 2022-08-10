import { node } from "./tree";

const insertValue = function addLeafToTree(root, value) {
  if (root == null) {
    root = node(value);
  }

  if (value < root.data) {
    root.left = insertValue(root.left, value);
  } else if (value > root.data) {
    root.right = insertValue(root.right, value);
  }

  return root;
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