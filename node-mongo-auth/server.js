require('dotenv').config()
const express = require("express");
const BodyParser =  require("body-parser");
const mongoose = require('mongoose');
const User =  require("./Models/User");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post('/v1/user/signup',(req,res)=>{
    const user = new User({
        email:req.body.email,
        password:req.body.password
    }).save((error,response)=>{
        if (error) res.status(400).send(error);
        res.status(200).send(response);
    })
})

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${server.address().port}`);
  });