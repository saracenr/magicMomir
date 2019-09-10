var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var http = require("http");
var fs = require("fs");
var request = require("request");
var multer = require("multer");
var upload = multer({dest: 'images/'});

app.use(bodyParser.urlencoded({extended: true}));

//  Default landing page
app.get("/", function(req, res){
	res.render("momir.ejs");
});

// Post request sending the card url pulled from scryfall API
app.post("/printCard", upload.single('imageFile'), function(req, res){
	var imageSource = req.body.imageSRC
	//  Downloads the file locally to local/images/card.png
	request.get({url: imageSource, encoding: null}, function (err, response, body) {
	fs.writeFile("images/card.png", body, null, function(err) {
    if(err)
      console.log(err);
    else
      console.log("The file was saved!");
// Calls a shell command for Processing to convert the png to a bitmap and print it		
      var exec = require('child_process').exec, child;
      child = exec('lp -o fit-to-page /home/pi/magic/magic/images/card.png',
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
  }); 
});
	console.log(req.body.imageSRC)
	res.redirect("/");
});


app.get("*", function(req,res){
	res.send("Invalid Request")
});

app.listen(3000, function() {
	console.log("Serving magic on port 3000");
});
