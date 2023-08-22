//IMPORT THE HTTP MODULE
const http = require('http')

const hostname='127.0.0.1';
const port=5000;

//this variable server calls createServer function which has a callback with request that takes input from the user and response handles info coming from the server
const server=http.createServer((req,res)=>{
  //res.statusCode=200;
  //res.setHeader('Content-Type','text/plain');
  //OR write them together like below:
  //res.writeHead(200,{'Content-Type':'text/plain'})

  //working with URL Paths
  const urlPath = req.url;

  if (urlPath === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello from Sidehustle\n");
  } else if (urlPath === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("My about page\n");
  } else if (urlPath === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("My about page\n");
  } else if (urlPath === "/users") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Users page\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found\n");
  }

  /*res.writeHead(200, { "Content-Type": "application/json" });
    const serializedData=JSON.stringify({
        name:"David",
        age:23,
        country:"Kenya"
    })
    res.write(serializedData);
    res.end();*/

  req.on("error", (err) => {
    console.log("An error occurred");
  });

  res.on("error", (err) => {
    console.log("An error occurred");
  });
});

    

server.listen(port,hostname,()=>{
    console.log(`Running at http://${hostname}:${port}/`);
});