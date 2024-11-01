// creating the simple http server

const http = require('http')


//this creates an instance of http server

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end('Hello World!') 
})

server.listen(3000)