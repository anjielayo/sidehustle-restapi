//how to make a post request to external server in node js
const http = require("http");

const data = JSON.stringify({
    username:'desire'
});

const options={
 hostname: "127.0.0.1",
 port: 5000,
 method:"POST",
 path:"",
 headers:{
    'Content-Type':'application/json'
 }
};


const request=http.request(options,(response)=>{
    console.log(`Status code:${response.statusCode}`);
    console.log(`Headers:${response.headers}`);

    response.on('data',(chunk)=>console.log(`Chunk received:${chunk}`));
});

request.on('error',(err)=>console.error(err));
request.write(data);
request.end();