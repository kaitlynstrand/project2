var db = require("../models");

module.exports = function(app) {
	app.get("/api/task", function(req, res) {
		db.Task.get
	})

	app.post("/api/task", function(req, res) {
		db.Task.create(req.body).then(function(results) {
			res.json(results)
		})
	})
}