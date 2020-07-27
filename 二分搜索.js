Array.prototype.binarySearch = function (item) {
  let low = 0; //数组的最小下标
  let high = this.length - 1; //数组的最大下标
  //在最小下标小于最大下标的前提下
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const element = this[mid]; //中间元素
    if (element < item) {
      //目标元素在较大的那一半中，最小下边为mid+1
      low = mid + 1;
    } else if (element > item) {
      //目标元素在较小的那一半中，最大下边为mid-1
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.binarySearch(5));
