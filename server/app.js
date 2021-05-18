const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
//Access config.env
dotenv.config({path:"./config.env"});
const db = process.env.DATABASE;
const port = process.env.PORT;
//Database Connection



mongoose.connect(db, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
    .then(()=>{console.log('Connection Success!')})
    .catch(()=>{console.log('Connection Failure!')});
//Middleware

const middleware = (req,res,next)=>{
    console.log('Middleware Calling...')
    next();
}

app.get('/', (req,res)=>{
    res.send("Hello World")
});

app.get('/about',middleware,(req,res)=>{
    console.log('Middlware Called')
    res.send("This is aboutus page")
})

app.get('/contact',(req,res)=>{
    res.send("This is Contact Page")
})

app.get('/signin',(req,res)=>{
    res.send("This is SignIn Page")
})

app.get('/signup',(req,res)=>{
    res.send("This is SignUp Page")
})


app.listen(port,()=>{
    console.log('Server is running on port 3000');
})