const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const User = require('./userdatabase/userdata')
require("./userdatabase/mongoose_connection")
const app= express()
app.set("view engine","hbs");
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}));


app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/register',(req,res)=>{
    res.render('index');
})
app.post('/register',async (req,res)=>
{
    try{
        console.log("jiiii")
    let user = new User({
        fullname :req.body.fullname,
        email :req.body.email,
        phone :req.body.phone,
        password :req.body.password,
    });
    await user.save();
    console.log(user)
    console.log("hii")
    res.send('Registered successfully')
}
catch(e){
res.send(e)
}
})
app.listen(7003,()=>{
    console.log("port connected");
})