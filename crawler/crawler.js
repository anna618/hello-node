const axios = require("axios");

let format = "json";
let today = "20211017";
let stockCode = "0056";

// https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=${format}&date=${today}&stockNo=${stockCode}

axios
  .get(`https://www.twse.com.tw/exchangeReport/STOCK_DAY`, {
    params: {
      response: format,
      date: today,
      stockNo: stockCode,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
