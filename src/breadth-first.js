/**
 * Accept a root and another function as parameters
 * Traverse the tree in breadth-first level order and pass each node as an
 * argument to the provided function.
 *
 * If no function is given, return an array of values.
 *
 * Use a queue to keep track of child nodes to be traversed.
 */

// push() to add element to end of array (enqueue)
// shift() to remove element from beginning of array (dequeue)

const basic = function defaultCallBack(node, array) {
  array.push(node.data);
};

const levelOrder = function levelOrderTraverse(root, callBack) {
  if (root === null) {
    return;
  }

  if (!callBack) {
    callBack = basic;
  }

  // Only used if no callback is provided
  let traversal = [];

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let current = queue.shift();
    callBack(current, traversal);

    if (current.left != null) {
      queue.push(current.left);
    }
    if (current.right != null) {
      queue.push(current.right);
    }
  }

  if (callBack == basic) {
    return traversal;
  }
};

const levelOrderRecursive = function recursiveLevelOrderTraverse(
  root,
  callBack
) {
  if (!callBack) {
    callBack = basic;
  }
  let traversal = [];
  let queue = [];
  queue.push(root);
  recursiveComponent(queue, callBack, traversal);
};

const recursiveComponent = function recursion(queue, callBack, array) {
  if (queue.length === 0) {
    // If no callback was provided, an array was generated
    if (array.length > 0) {
      // console.log(array);
    }
    return;
  }

  let currentNode = queue.shift();
  callBack(currentNode, array);
  if (currentNode.left) {
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }
  recursiveComponent(queue, callBack, array);
};

export { levelOrder, levelOrderRecursive };
