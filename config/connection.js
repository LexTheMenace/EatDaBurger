var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "b7258238403bd1",
  password: "d37240dc",
  database: "heroku_d17f969daa1a53a"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;


mysql://:@/?reconnect=true