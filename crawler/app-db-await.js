const axios = require("axios");
const moment = require("moment");
const fs = require("fs/promises");
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // 本機 127.0.0.1
  port: process.env.DB_PORT, // 埠號 mysql 預設就是 3306
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect(); // 資料庫連線

function insertPromise(insertData) {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT IGNORE INTO stock (stock_no, date, deal, amount, count) VALUES (?, ?, ?, ?, ?);",
      insertData,
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
}

async function queryData() {
  let today = moment().format("YYYYMMDD"); // 自動給當天的日期
  let format = "json";
  // let stockCode = "2303"; // 寫死要查的代碼
  try {
    let stockCode = await fs.readFile("stock.txt", "utf-8");
    console.log("stockCode", stockCode); // 檢查 stock.txt 裡的 stockCode

    let res = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: format,
          date: today,
          stockNo: stockCode,
        },
      }
    );
    // console.log(res.data.data); // 這要看其他人 data 如何設計的
    let firstItem = res.data.data[0];
    // console.log(firstItem); // 全部項目

    // 只取我需要的項目 0, 1, 2, 8
    let insertData = [
      stockCode,
      firstItem[0],
      firstItem[1],
      firstItem[2],
      firstItem[8],
    ];

    let result = await insertPromise(insertData);
    console.log(result); // 這句可省略不寫
  } catch (err) {
    console.error(err);
  } finally {
    connection.end(); // 寫入結束
  }
}

queryData();
