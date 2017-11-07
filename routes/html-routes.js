var path = require("path");
var db = require("../models");
var sequelize = require("sequelize")

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {

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

        console.log(tasksUsers.leaders[0])

        res.render("home", tasksUsers)

      })
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

    db.Task.findAll({
      where: {UserId: 1}
    }).then(function(taskResults){
      db.Task.findAll({
        attributes : [[sequelize.fn('count', sequelize.col('id')), 'completed_tasks'], [sequelize.fn('sum', sequelize.col('points')), 'sum_points'] ],
        where: {UserId: 1,
                completed: 1}
      }).then(function(completedCountResults){
          
              var hbsObject = {tasks : taskResults,
                               completedCount: completedCountResults }


              res.render("mytasks", hbsObject)

              console.log(hbsObject.completedCount)


      })



    })

  });
};
