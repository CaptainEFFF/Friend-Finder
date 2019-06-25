var express = require("express");

var path =  require("path");

var app = express();

var PORT = 3000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

var friends = [   
{name: "Bob",
survey: [1,2,3,4,5,1,2,3,4,5]
},
{name: "Testificate",
survey: [2,4,1,5,4,3,2,1,3,4]
},
{name: "Hank",
survey: [5,4,3,2,1,3,2,1,5,4]
},
{name: "Peggy",
survey: [2,3,5,1,3,4,2,5,2,3]
},
{name: "Boomhower",
survey: [4,3,2,4,3,2,5,2,1,2]
},
{name: "Sam",
survey: [2,5,2,1,4,2,3,5,1,2]
}
]

app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
})
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})
app.get("/api/friends",function(req,res){
    res.sendFile(path.join(__dirname, "app/data/friends.js"));
    return res.json(friends);

})

app.post("/api/friends",function(req,res){
    var smallestScore = 1000;
    var newUser = req.body;
    var closestUser;
    newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
    // console.log(newUser);
    // console.log(friends)
    for(var i = 0; i < friends.length; i ++){
        similarArr = []
        for(var j = 0; j < friends[i].survey.length; j ++){
        similarArr.push(Math.abs(newUser.survey[j] - friends[i].survey[j]))
        }
        var score = similarArr.reduce((a, b) => a + b, 0)

        if (score < smallestScore){
            smallestScore = score
            closestUser = friends[i].name
        }
        else{
        module.exports = closestUser
        }

    }    









    friends.push(newUser)
    res.json(newUser)



})





app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT)
})