var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.render("momir.ejs");
});

app.post("/printCard", function(req, res){
	var magicImage = req.body.magicPicture
	console.log(magicImage)
	res.redirect("/");
});

// app.get("/card/:cmc", function(req, res){
// 	var manacost = req.params.cmc
// 	console.log(manacost)
// 	res.send("The converted mana cost is " + manacost);
// });

app.get("*", function(req,res){
	res.send("Invalid Request")
});

app.listen(3000, function() {
	console.log("Serving magic on port 3000");
});