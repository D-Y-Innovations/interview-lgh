var quickSort = function (arr, left, right) {
  if (right <= left) {
	return;
}

  left = 0;
  right = arr.length - 1;

  var leftPoint = left;
  var rightPoint = right;
  var temp = arr[left];

  while (leftPoint != rightPoint) {
    while (arr[rightPoint] >= temp && leftPoint < rightPoint) {
      rightPoint--;
    }
    while (arr[leftPoint] <= temp && leftPoint < rightPoint) {
      leftPoint++;
    }
    if (leftPoint < rightPoint) {
      var changeNumber = arr[leftPoint];
      arr[leftPoint] = arr[rightPoint];
      arr[rightPoint] = changeNumber;
    }
  }
  arr[left] = arr[leftPoint];
  arr[leftPoint] = temp;

  quickSort(arr, left, leftPoint - 1)
  quickSort(arr, leftPoint + 1, right)

  return arr
};