// handling forms 

//morgan
// morgan is basically a logger which shows which request was sent, where it was sent, what was it's type, response port, time taken to give response back, etc. (all this shows in terminal)

const express = require('express');
const app = express(); 

const morgan = require('morgan');
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.set("view engine", 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/profile', (req,res)=>{
    res.send('This is profile page')
    console.log(req.url);
})

app.post('/get-form-data', (req, res)=> {
    console.log(req.body);
    res.send('data received!')
})

app.listen(3000);