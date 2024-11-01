//Working with Express.JS x EJS

const express = require('express');
const app = express(); 

//telling to Express Js that which view engine we are working with. 

app.set("view engine", 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000);