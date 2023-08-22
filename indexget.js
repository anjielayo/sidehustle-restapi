//how to make a get request to external server in node js
const http = require("http");



const request = http.get("http://www.google.com", (response) => {
  console.log(`Status code:${response.statusCode}`);
  console.log(`Headers:${response.headers}`);

  response.on("data", (chunk) => console.log(`Chunk received:${chunk}`));
});

request.on("error", (err) => console.error(err));
