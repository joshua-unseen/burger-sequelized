const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sequelize models
const db = require("./models");

// Static resources
app.use(express.static("public"));

// JSON handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.use(routes);

// Start the server
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("server is listening on http://localhost:" + PORT);
    });
});