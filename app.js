// creating the simple http server

const http = require('http')


//this creates an instance of http server

const server = http.createServer((req,res)=>{
   if(req.url == "/about") {
        res.end("Welcome to About Page!");
   } 

   if(req.url == "/profile"){
        res.end('Welcome to the Profile Page!');
   }

   if(req.url == "/") {
        res.end("Hello World!")
   }
})

server.listen(3000)