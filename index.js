var express = require('express');
var app = express();

app.post('/',function (req,res){
    let userName= req.header("userName");
    let password= req.header("password");

    res.send("User Name:" +userName +"Password:" +password)
});


app.listen(7000, function () {
    console.log("Server running successfully on port 7000");
});