Array.prototype.selecttionSore = function () {
  //执行n-1轮之后完成排序
  for (let i = 0; i < this.length - 1; i++) {
    //声明一个最小值下标，默认为0，第一轮为第一个元素，第二轮为第二个元素
    let indexMin = i;
    //做一次循环，如果当前元素小于最小值，那么最小值下标就要换成当前元素下标
    //外层每做一次循环，前面i个元素是已经排好序的，所以排序区间从i开始
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    //经过一轮循环就可以找到最小值的下标
    //将最小值和数组的第一个元素进行交换
    const temp = this[i]; //数组的第一个值
    this[i] = this[indexMin]; //将数组第一个值设为最小值
    this[indexMin] = temp; //将最小值下标元素设为数组第一个值
  }
  return this;
};

const arr = [6, 5, 4, 3, 2, 1];
console.log(arr.selecttionSore());

const arr = [6, 5, 4, 3, 2, 1];
function selectionSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let indexMIn = i;
    for (let j = i; j < length; j++) {
      if (arr[j] < arr[indexMIn]) {
        indexMIn = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[indexMIn];
    arr[indexMIn] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));
