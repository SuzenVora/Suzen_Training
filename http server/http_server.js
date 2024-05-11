let http = require('http');

// let server = http.createServer((req,res)=>{
//     switch (req.url) {
//         case "/home": res.end('home page');
//             break;
//         case "/about": res.end('about page');
//             break;
//         default:
//             res.end('404 page not found')
//             break;
//     }
//     // console.log(req.headers);
// })

// server.listen(9000,()=>console.log('server started listen'))


////// express.js // you have to install express using // npm i express

const express = require("express")
let exp = express()

exp.get('/',(req,res)=> res.send("home page"))
exp.get('/about',(req,res)=> res.send('about page'))

exp.listen(786,()=>console.log('server started'))