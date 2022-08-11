const preOrder = function preOrderTraversal(node, arr = []) {
  if (node == null) {
    return;
  }
  arr.push(node.data);
  console.log(node.data);
  preOrder(node.left, arr);
  preOrder(node.right, arr);

  return arr;
};

const inOrder = function inOrderTraversal(node, array = []) {
  if (node === null) {
    return;
  }
  inOrder(node.left);
  array.push(node.data);
  inOrder(node.right);

  return array;
};

const postOrder = function postOrderTraversal(node, array = []) {
  if (node === null) {
    return array;
  }
  postOrder(node.left);
  postOrder(node.right);
  array.push(node.data);

  return array;
};

export { preOrder, inOrder, postOrder };
