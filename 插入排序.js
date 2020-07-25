Array.prototype.insertionSort = function () {
  //从第二个开始循环，所以i=1
  for (let i = 1; i < this.length; i++) {
    let temp = this[i]; //找到右边没排序的第一个数，第一次循环默认为第二个数
    let j = i; //左边已经排序好了的个数
    while (j > 0) {
      //将需要插入的数依次与左边排序好的数组对比
      //如果需要插入的数比被对比的数小，被对比的数往后移一位
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]; //前面的数往后移一位
      } else {
        //如果需要插入的数比被比较的数大，则退出
        break;
      }
      j--;
    }
    //循环结束之后j的值就是要插入的位置，将temp插入进去
    this[j] = temp;
  }

  return this;
};

const arr = [1, 8, 5, 2, 13, 7, 42, 64, 2];
console.log(arr.insertionSort());

// function insertionSort(arr) {
//   //从数组的第二位开始往左比较，所以i=1
//   for (let i = 1; i < arr.length; i++) {
//     let target = i; //这个是右边没排序的第一个数，第一次循环默认位第二个数
//     for (let j = i - 1; j >= 0; j--) {
//       //将target与左边排序好的数比较，如果比较小，则与被比较的数交换位置
//       if (arr[target] < arr[j]) {
//         [arr[target], arr[j]] = [arr[j], arr[target]];
//         //交换完之后target往前插入一位
//         target = j;
//       } else {
//         //如果前面没有比target小的数，退出循环
//         break;
//       }
//     }
//   }
//   return arr;
// }

// console.log(insertionSort(arr));
