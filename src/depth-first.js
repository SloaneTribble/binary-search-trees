const preOrder = function preOrderTraversal(node, callBack, arr = []) {
  if (node == null) {
    return;
  }
  if (!callBack) {
    arr.push(node.data);
  } else {
    arr.push(callBack(node.data));
  }
  preOrder(node.left, callBack, arr);
  preOrder(node.right, callBack, arr);

  return arr;
};

const inOrder = function inOrderTraversal(node, callBack, arr = []) {
  if (node === null) {
    return;
  }
  inOrder(node.left, callBack, arr);

  if (!callBack) {
    arr.push(node.data);
  } else {
    arr.push(callBack(node.data));
  }
  inOrder(node.right, callBack, arr);

  return arr;
};

const postOrder = function postOrderTraversal(node, callBack, arr = []) {
  if (node === null) {
    return;
  }
  postOrder(node.left, callBack, arr);
  postOrder(node.right, callBack, arr);

  if (!callBack) {
    arr.push(node.data);
  } else {
    arr.push(callBack(node.data));
  }

  return arr;
};

export { preOrder, inOrder, postOrder };
