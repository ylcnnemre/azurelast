var express = require("express");



var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({
    msg: "merhaba",
  });
});

app.get("/test",(req,res)=>{
    res.send("merhabaaa")
})

app.listen(8999,()=>{
    console.log("server is running")
})
