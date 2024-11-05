const mongoose = require('mongoose')

const con = mongoose.connect('mongodb://0.0.0.0/backend').then(()=>{
    console.log('Connected to DB!');
})

module.exports = con;