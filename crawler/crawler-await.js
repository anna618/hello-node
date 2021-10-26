const axios = require("axios");

//async function會回傳promise
async function getData() {
  let format = "json";
  let today = "20211017";
  let stockCode = "0056";
  try {
    let result = await axios.get(
      `https://www.twse.com.tw/exchangeReport/STOCK_DAY`,
      {
        params: {
          response: format,
          date: today,
          stockNo: stockCode,
        },
      }
    );
    console.log(result.data);
  } catch (err) {
    console.error(err);
  }
}
getData();