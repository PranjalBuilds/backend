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



app.get('/register', (req, res)=> {
    res.render('register');
})

// CRUD (CREATE, READ, UPDATE, DELETE)

// CREATE

app.post('/register', async (req,res)=> {

   //destructuring data coming from register page (storing in this variables)
    const {username, email, password } = req.body;

    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })

})

// READ 

// find(), findOne() in READ operations

// find() - helps to read the data from db based on given conditions

// app.get('/get-users', (req,res) => {
//     userModel.find({
//         username: 'b'
//     }).then((users)=>{
//         res.send(users);
//     })
// })

//findOne() - it returns only one user which created earlier 

app.get('/get-users', (req,res) => {
    userModel.findOne({
        username: 'b'
    }).then((users)=>{
        res.send(users);
    })
}) 

// UPDATE 

app.get('/update-user', async (req,res) => {
    await userModel.findOneAndUpdate({
        username: 'b',
        _id: '672a1a44a524e2c361794633',
    }, {
        email: "c@gmail.com",
        username: 'c',
        password: 'c'
    }),
    res.send('User Updated!')
})

app.listen(3000);