
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var handlebars = require("handlebars");
var path = require("path");

var app = express();
var db = require("./models");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("views"));

// app.get('/', function (req, res) {
//     res.render('tasks');
// });



require("./routes/group-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/tasks-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
})

