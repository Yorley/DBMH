/*var oracledb = require('oracledb');
 
oracledb.getConnection(
  {
    user          : "hr",
    password      : "welcome",
    connectString : "localhost/XE"
  },
  function(err, connection)
  {
    if (err) { console.error(err.message); return; }
 
    connection.execute(
      "SELECT department_id, department_name " +
        "FROM departments " +
        "WHERE manager_id < :id",
      [110],  // bind value for :id 
      function(err, result)
      {
        if (err) { console.error(err.message); return; }
        console.log(result.rows);
      });
  });*/

exports.test = function(req, res){
  res.status(200).jsonp({"usuario" : "yorley", "edad" : "19"});
}