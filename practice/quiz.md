# event loop 作業

程式 1: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？  
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

> 我把執行程式碼當作是我要做的工作。
> <br>After 會印在 500 後面。
> <br>因為(1) (2) 都是我自己做沒外包，所以我要全部做完才能處理 after(3)。
> <br>![](https://i.imgur.com/4UkSyhr.png)

```javascript
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
}
readData(0);
console.log("after");
```

程式 2: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？  
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

> 我把執行程式碼當作是我要做的工作。
> <br>(非同步、沒阻塞 after)
> <br>After 會印在 100 後面。
> <br>因為我把 (2) 丟給外包做了，所以有空去處理 after(3)，外包處理完後排隊等我做完所有事，我沒事了以後就把外包幫我做好的東西再丟出來。
> <br>![](https://i.imgur.com/7JWRIhd.jpg)

```javascript
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    setTimeout(function () {
      readData(idx);
    }, 0);
  }
}
readData(0);
console.log("after");
```
