var express = require("express");

var path =  require("path");

var app = express();

var PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname, "survey.html"));
})
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "home.html"));
})
app.get("/api/friends",function(req,res){
    return res.json(friends);
})

app.post("/api/friends",function(req,res){
    var newUser = req.body;
    newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
    console.log(newUser);
    friends.push(newUser)
    res.json(newUser)

})





app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT)
})