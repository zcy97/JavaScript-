Array.prototype.mergeSort = function () {
  //第一步，分，将数组分为长度小于2的数组，长度小于2代表这个数组已经有序
  const rec = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2); //获取数组中间下标，将数组分为左右两个数组
    const left = arr.slice(0, mid); //左边数组
    const right = arr.slice(mid, arr.length); //右边数组
    //调用递归将左右两边的数组继续拆分，直到数组长度小于2
    const orderLeft = rec(left); //有序的左边数组，最后return出来的长度为1
    const orderRight = rec(right); //有序的右边数组
    const res = [];
    //当左边或者右边数组有值的情况下
    while (orderLeft.length || orderRight.length) {
      //当左边数组和右边数组都有值的情况下，比较左右两边数组的第一个数，将较小的数推入res中
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      }
      //如果右边数组值为空，左边不为空，将左边的数全部推入res
      else if (orderLeft.length) {
        res.push(orderLeft.shift()); //删除并返回数组的第一个元素
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    //返回合并后的有序数组作为递归的结果
    return res;
  };
  const res = rec(this);
  // console.log(res);
  res.forEach((n, i) => {
    this[i] = n;
  });
  return this;
};
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(arr.mergeSort());

// const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const midIndex = Math.floor(arr.length / 2);
//   const left = arr.slice(0, midIndex);
//   const right = arr.slice(midIndex, arr.length);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let temp = [];
//   while (left.length && right.length) {
//     temp.push(left[0] < right[0] ? left.shift() : right.shift());
//   }
//   while (left.length) {
//     temp.push(left.shift());
//   }
//   while (right.length) {
//     temp.push(right.shift());
//   }
//   return temp;
// }
// console.log(mergeSort(arr));
