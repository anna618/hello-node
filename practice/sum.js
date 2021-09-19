console.log("hello world!");

function sum(param) {
  // TODO: 請從 1 + 2 + 3 + .... + param
  var i; // 紀錄目前要處理的數字
  var sum = 0; // 紀錄到目前為止的總和
  for (i = 1; i <= param; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sum(3)); // 6
console.log(sum(6)); // 21
console.log(sum(10)); // 55
