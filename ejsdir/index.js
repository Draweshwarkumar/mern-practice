const express = require("express");
const app = express();
const port = 8000;

app.set("view engine","ejs");

app.get("/home",(req,res) =>{
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res) =>{
    let {username} = req.params;
    let follower= ["shivam","dube","pankaj","chandan"];
    res.render("instagram.ejs", {username,follower});
});

app.get("/rolldice",(req,res) =>{
    let diceval = Math.floor(Math.random() * 6)+1;
    res.render("rolldice.ejs",{diceval});
});

app.listen(port,()=>{
    console.log(`app is listening in the port no ${port}`);
});