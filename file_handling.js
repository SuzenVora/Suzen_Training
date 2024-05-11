// const { error } = require("console");
const fs = require("fs")

// const os = require('os')
// console.log(os.cpus().length);


// //sync // returns something // it is blocking code

// fs.writeFileSync('./hey.txt','Hello World sync')
// let readFileSync=fs.readFileSync('./hey.txt','utf-8')
// console.log(readFileSync);
// fs.appendFileSync('./hey.txt','\nappend')
// fs.cpSync('./hey.txt',"./copy.txt")
// fs.unlinkSync("./copy.txt")
// console.log(fs.statSync('./hey.txt'));


// //async // do not return anything // it is non blocking code 

fs.writeFile('./hey.txt','Hello World async',(err)=>{})
fs.readFile('./hey.txt','utf-8',(error,result)=>{
    if(error){
        console.log(`ERROR: ${error}`);
    }
    else{
        console.log(result);
    }
})
