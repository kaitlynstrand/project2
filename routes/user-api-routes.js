var db = require("../models");

module.exports = function(app) {
	app.get("/api/users", function(req, res) {
		db.User.findAll({}).then(function(results) {
			res.json(results);
		});
	});
	
	app.post("/api/users", function(req, res) {
		db.User.create(req.body).then(function(results) {
			res.json(results)
		});
	});

	app.put("/api/users", function(req, res) {
		db.User.update({
			
		})
	})

	
	app.get("/api/lookupuser/:email", function(req,res){
		console.log(req.params.id)
		db.User.findOne({
			attributes : ['id'],
			where : {last_name : req.params.email}
		}).then(function(results){
			res.json(results)
		})
	})
}