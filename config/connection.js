const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  // Are we deployed?
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  // Local DB connection params
  const keys = require("./keys"); // Pointless to do this now, but I'm trying to get in the habit
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: keys.localUser,
    password: keys.localPass,
    database: "burgers_db"
  });
}

// Connect to the DB
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
// Next rung: orm.js