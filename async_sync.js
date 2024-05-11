let fs = require('fs')

//sync is blocking code

// console.log(1);
// console.log(fs.readFileSync('./hey.txt','utf-8'));
// console.log(2);
// console.log(3);


// async is non blocking code 
console.log(1);
fs.readFile('./hey.txt','utf-8',(err,result)=>{
    if(err){console.log(`ERROR: ${err}`);}
    else{
        console.log(result);
    }
})
console.log(2);
console.log(3);

