/**
 * Given a node, return the number of edges in longest path from a given node to a leaf node
 */

const height = function getHeight(node) {
  if (node == null) {
    return 0;
  }
  let leftHeight = height(node.left);
  let rightHeight = height(node.right);

  return max(leftHeight, rightHeight) + 1;
};

const max = function getMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const depth = function findDepth(root, x) {
  // If tree is empty
  if (root == null) {
    return -1;
  }
  let distance = -1;

  if (
    root.data == x ||
    // If x is present in either subtree
    (distance = depth(root.left, x)) >= 0 ||
    (distance = depth(root.right, x)) >= 0
  ) {
    return distance + 1;
  }

  return distance;
};

export { height, depth };
