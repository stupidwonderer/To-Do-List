const express= require('express');
const bodyParser = require('body-parser');
const date=require(__dirname+"/date.js")
const app=express();

var items=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.get("/",function(req,res){
    day= date.getDate();
    
    res.render("list",{kindOfDay:day,newevent:items});
})
app.post("/",function(req,res){
     var item= req.body.newEvent;
     items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("server started at port 30000");
})