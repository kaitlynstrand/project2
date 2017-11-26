var db = require("../models");

module.exports = function(app) {
	app.get("/api/group", function(req, res) {
		db.Group.findAll({}).then(function(results) {
			res.json(results)
		})
	})

	app.post("/api/group", function(req, res) {
		db.Group.create(req.body).then(function(results) {
			res.json(results)
		})
	})
}