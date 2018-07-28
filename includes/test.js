var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

var conn = con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


 var create_db = con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  var create_tbl = con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

module.exports = {
    db_connection: conn,
    createdb: create_db,
    createtbl: create_tbl
}