var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {

    db.Task.findAll({}).then(function(results) {

      var choresObject = {chores :  results}

      res.render("home", choresObject)
    });




  });

  app.get("/groups", function(req, res) {
    res.render("groups");
  });

  app.get("/creategoup", function(req, res) {
    res.render("groups");
  });

  app.get("/add", function(req, res) {
    res.render("add-task");
  });


  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  });

  app.get("/mytasks", function(req, res) {
    res.render("mytasks");
  });
};
