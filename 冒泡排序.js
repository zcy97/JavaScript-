// Array.prototype.bubbleSort = function () {
//   for (let i = 0; i < this.length - 1; i++) {
//     //循环第一次之后数组最后一位就是最大的，下一次循环到最后一位的前i位就行，所有-i,这样每次冒泡排序的区间都会把已排序好的区间减掉
//     for (let j = 0; j < this.length - 1 - i; j++) {
//       //第一位和第二位比较，如果第一位比第二位大，则交换位置
//       if (this[j] > this[j + 1]) {
//         const temp = this[j];
//         this[j] = this[j + 1];
//         this[j + 1] = temp;
//       }
//     }
//   }
//   return this;
// };
// const arr = [5, 4, 3, 2, 1];
// console.log(arr.bubbleSort());

function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    //循环第一次之后数组最后一位就是最大的，下一次循环到最后一位的前i位就行，所有-i,这样每次冒泡排序的区间都会把已排序好的区间减掉
    for (let j = 0; j < length - 1 - i; j++) {
      //第一位和第二位比较，如果第一位比第二位大，则交换位置
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const arr = [5, 5, 7, 2, 8, 1, 0, 4, 5, 1];
console.log(bubbleSort(arr));
