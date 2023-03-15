
var fs = require("fs");
setTimeout(() => {
    console.log("how far");

    
fs.readFile("index.txt", "utf-8", (err,data) => {
    if(err == null){
        console.log(data);
    }
    else{
        console.log(err);
    }
});
}, 2000);
