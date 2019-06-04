const connection = require("./connection");
// Here's all the SQL queries
const orm = {
    selectAll: function(tableName, cb) {
        connection.query("SELECT * FROM ??;", [tableName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, colName, newValue, cb) {
        connection.query("INSERT INTO ??(??) values(?);", [tableName, colName, newValue], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, change, condition, cb) {
        connection.query("UPDATE ?? SET ? WHERE ?;", [tableName, change, condition], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;
// next rung: burger.js