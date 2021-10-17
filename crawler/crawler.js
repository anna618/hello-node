const axios = require("axios");

axios
  .get(
    "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20211017&stockNo=0050&_=1634438682049"
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
