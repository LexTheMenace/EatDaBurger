var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
}else {
  var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
}); 
  //var connection = mysql.createConnection("mysql://cls9xnwvhc44bndk:nla4r1t8ocsp32de@qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/cmb8vgqqs7zag0kn")
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
