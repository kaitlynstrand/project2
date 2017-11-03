var db = require("../models");

module.exports = function(app) {
	app.post("/api/twilio", function(req, res) {
		db.Twilio.create(req.body).then(function(results) {
			res.json(results)
		})
	})
}