const merge = function mergeLeftAndRight(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length > 0) {
    result.push(left.shift());
  }
  while (right.length > 0) {
    result.push(right.shift());
  }
  return result;
};

const mergeSort = function divideAndConquer(array) {
  if (array.length === 1) {
    return array;
  }

  let midIndex = Math.floor(array.length / 2);

  let left = array.slice(0, midIndex);

  let right = array.slice(midIndex);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

export { mergeSort };
