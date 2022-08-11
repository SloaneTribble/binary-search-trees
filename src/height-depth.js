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

export { height };
