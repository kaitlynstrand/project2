var path = require("path");
var db = require("../models");
var sequelize = require("sequelize")

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  //This should point to the splash page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

  // index route loads view.html
  //this might need to point to another page that's a bit more IN the application and not at the top-level.
  app.get("/home", function(req, res) {
    console.log("starting this")

    db.Task.findAll({
      include: [{model: db.User}]

    }).then(function(resultsTasks) {

      db.User.findAll({
        attributes: ['User.id', 'first_name', 'last_name', [sequelize.fn('sum', sequelize.col('Tasks.points')), 'sum_points']],
        include:[ {
          model:db.Task,
          attributes: [],
          where : {completed : 1}
        }],
        group: ['User.id'],
        order: [[sequelize.fn('sum', sequelize.col('Tasks.points')),'DESC']]

            }).then(function(resultsUsers){

        var tasksUsers = {chores: resultsTasks, leaders: resultsUsers}

        console.log(tasksUsers.leaders[0], "another log in the index route")

        res.render("home", tasksUsers)

      })
    });




  });



  app.get("/groups", function(req, res) {
    res.render("groups");
  });

  app.get("/creategroup", function(req, res) {
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

  app.get("/mytasks/:id", function(req, res) {

    db.Task.findAll({
      where: {UserId: req.params.id}
    }).then(function(taskResults){
      db.Task.findAll({
        attributes : [[sequelize.fn('count', sequelize.col('id')), 'completed_tasks'], [sequelize.fn('sum', sequelize.col('points')), 'sum_points'] ],
        where: {UserId: req.params.id,
                completed: 1}
      }).then(function(completedCountResults){
        db.Task.findAll({
        attributes : [[sequelize.fn('count', sequelize.col('id')), 'incomplete_tasks'] ],
        where: {UserId: req.params.id,
                completed: 0}
        }).then(function(incompleteCountResults){
          var hbsObject = {
                            tasks : taskResults,
                            completedCount: completedCountResults,
                            incompleteCount: incompleteCountResults
                          }
          res.render("mytasks", hbsObject)
          console.log(hbsObject.incompleteCount)
        })
      })
    });
  });
}
