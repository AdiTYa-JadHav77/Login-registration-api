const express = require("express");
const mongoose = require("mongoose");
const routes=require("./Routes/index");
// const cors = require("cors")

const app=express();

const host="localhost";
const port=2021;

// app.use(cors());
// app.options("*",cors())

app.use(express.json())
app.use('/',routes);

//to setup view engine
app.set("view engine","hbs");

//to render by HBS
app.get("/",(req,res)=>{
    res.render('Signup');
});

//to render normal text
app.get("/",(req,res)=>{
    res.send("Hello");
});


mongoose.connect("mongodb+srv://akj123:KOF9FmdBhgdzA3Xt@zomatoclone.12piz.mongodb.net/CodeWithCoffee?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true })
.then(res=>{
    app.listen(port,host,()=>{
    console.log(`Server is running on ${host}:${port}`);
    })
})
.catch(err =>console.log(err));