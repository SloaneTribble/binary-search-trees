/**
 * Given a node and a value to search, compare that node's data to the value
 *
 * If the node's data is larger, perform the search on the left subtree
 *
 * If the node's data is smaller, perform the search on the right subtree
 *
 * If the node's data is equal, return that node
 *
 * If you run out of nodes, return "not found"
 */

const find = function binarySeach(root, value) {
  if (root == null) {
    return "Not found";
  }
  if (root.data === value) {
    return root;
  }

  if (root.data > value) {
    return find(root.left, value);
  }

  if (root.data < value) {
    return find(root.right, value);
  }
};

export { find };
