const fs = require("fs");

// promise版
function readFilePromise(){
    return new Promise((resolve, reject) => {
        fs.readFile('input.txt',"utf-8", (err, data) => {
            if (err) {
                reject(err);
                // console.error("發生錯誤囉", err);
            } else {
                resolve(data);
                // console.log("拿到資料:", data);
            }
          });

    })

};

readFilePromise()
.then((data) => {
    console.log("Promise版本，成功：", data);
  })
  .catch((err) => {
    console.error("Promise版本，錯誤：", err);
  });


// callback版
// fs.readFile("input.txt", "utf-8", (err, data) => {
//     if (err){
//         console.error("發生錯誤囉", err);
//     }else{
//         console.log("拿到資料:", data);
//     }
// } )