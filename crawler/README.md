## 如何使用

參照 `.env.example` 修改自己的 `.env` 設定

## 此 Crawler 專案練習內容

- 開好分支 crawler，並放入 cb 版本 await 版本 (證交所)
  - 套件：axios、moment
- 移除不小心多加進來的不相干檔案
- 先寫好該版本 mysql (promise/await) 且是 dotenv 版
  - 套件：fs (內建 → 置換成 promise 版本)、mysql、dotenv
  - `.gitignore` 要給別人，內容要放的檔案有 `node_modules` `.env`
  - `.env.example` 要給別人，並於 `README.md` 寫清楚 `.env` 用法
  - `.env` 自己留好
  - `package-lock.json` 要更新
  - `package.json` 要更新
- 把之前版本刪除 (有密碼的) 連線資料庫檔案
- New Pull request 寫好要請別人檢查的項目，請對方確認沒問題就 merge
