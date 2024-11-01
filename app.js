//Middlewares

// middlewares are basically used to pass all routes by a functions that we create which has some sort of logic behind it.

// types of middlewares: 
//built-in, custom, third-party.

const express = require('express');
const app = express(); 

app.set("view engine", 'ejs');


//simple example of custom middleware.

app.use((req, res, next)=> {
    console.log('This is middleware');    
    
    let a = 1;
    let b = 3;
    let c = a + b;

    console.log(c);

    return next();
});

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000);