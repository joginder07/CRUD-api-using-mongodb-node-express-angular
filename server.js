var express = require("express");

var app = express();

var mangojs = require("mongojs");

var db = mangojs('contactlist',['contactlist']);

//const MongoClient = require('mongodb').MongoClient;

var bodyparser = require("body-parser");



app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());

//var db;

/*MongoClient.connect('/contactlist', function (err, database) {
  		if (err) {
  			return console.log(err);
  		}
  		db = database ;
	}); */

// app.get(path,callback)
app.get('/contactlist', function (req,res) {

	db.contactlist.find(function(err,docs) {
		res.json(docs);
	}); 

	
    /*person1= {
		name:"joginder",
		email:"joginder@gmail.com",
		number:"12345"
	}

	var contactlist = [person1];
	res.json(contactlist);*/
	//$scope.contactlist= contactlist;

});

app.post('/contactlist', function(req,res){
	db.contactlist.insert(req.body, function(err,docs){
		res.json(docs);
	});
});

app.delete('/contactlist/:id', function (req,res){
    var id = req.params.id;
    db.contactlist.remove({_id: mangojs.ObjectId(id)},function (err,docs){
    	res.json(docs);
    });
});



app.listen(3000);
console.log("server runing");