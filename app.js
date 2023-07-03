var express = require('express');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.get("/",(req,res)=>{

    res.send("adamm oolllll")
})


app.get("/test",(req,res)=>{

    res.json({
        msg : "testini sikerimm"
    })
})

app.listen(3900,()=>{
    console.log("server is running")
})

module.exports=app