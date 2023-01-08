//fetch=>簡單不用寫很多get / post資料
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     //將api轉換為純文字
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: "22222",
    name: "蘇菲",
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  });
