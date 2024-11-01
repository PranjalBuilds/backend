//Working with Express JS

// [ install express.js before execution! ]

const express = require('express');
const app = express(); 

// create the default route
app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/about', (req, res) => {
    res.send('This is the about page');
})

app.get('/profile', (req, res)=> {
    res.send('This is the Profile Page!');
})

app.listen(3000);

// note : we don't have to create server in Express js