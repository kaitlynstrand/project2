var db = require("../models");

module.exports = function(app) {
	app.get("/api/task", function(req, res) {
		db.Task.findAll({}).then(function(results) {
			res.json(results);
		});
	});
	app.post("/api/task", function(req, res) {
		db.Task.create(req.body).then(function(results) {
			res.json(results);
		});
	});

	app.put("/api/task/:claim", function(req, res) {
		db.Task.update({
			claim: true
		},
		{
			where: {
				id: req.params.claim
			}
		}).then(function(results) {
			res.json(results);
		});
	});

app.put("/api/task/:completed", function(req, res) {
		db.Task.update({
			completed: true
		},
		{
			where: {
				id: req.params.completed
			}
		}).then(function(results) {
			res.json(results);
		});
	});

	app.delete("/api/task/:id", function(req, res) {   
		db.Task.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(results) {
			res.json(results);
		});
	});

}

