const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({extended: true}));

app.get("/register", (req, res) =>{
    let {user,password} = req.query;
    res.send(`standard GET response. Welcome ${user}`);
});

app.post("/register",(req, res) =>{
    let {user,password} = req.body;
    res.send(`standard POST response.Welcome ${user} whose id is ${password}`);
});

app.listen(port,() =>{
    console.log(`listening to port ${port}`);
});