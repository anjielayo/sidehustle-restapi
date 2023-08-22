const fs = require("fs");
//to read content of a file
fs.readFile("./cback.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const content="Hey I'm writing"
//to write data into a file
fs.writeFile('./test.txt',content,err=>{
    if (err) {
      console.error(err);
      
    }
})

//to remove a file
fs.unlink("./write.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Success')
});