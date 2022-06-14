const express = require("express");
const app = express();
const path = require("path");

app.use('/Assets', express.static(path.join(__dirname, 'Assets')));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/play", (req, res) => {
    let name=req.query.id;
    console.log(name);
    res.render("play.ejs",{name});
});


const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, function(){
    console.log('Server running on port '+ port);
});