var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  });

  // cms route loads cms.html
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/admin.html"));
  });

  // blog route loads blog.html
  app.get("/creategoup", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/creategroup.html"));
  });

  // authors route loads author-manager.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  });

  app.get("/submittask", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/submittask.html"));
  });

  app.get("/tasks", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/tasks.html"));
  });

};
