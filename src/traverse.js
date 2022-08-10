const preOrder = function preOrderTraversal(node) {
  if (node === null) {
    return;
  }
  console.log(`${node.data}, `);
  preOrder(node.left);
  preOrder(node.right);
};

export { preOrder };
