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

export { insertValue };
