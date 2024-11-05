const express = require('express');
const morgan = require('morgan');
const userModel = require('./models/user');
const dbcon = require('./config/db');

const app = express(); 

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