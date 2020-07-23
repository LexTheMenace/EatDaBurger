var orm = require("../config/orm");

var burgers = {
    selectAll: function(cb) {
      orm.selectAll('burgers', function(res) {
        cb(res);
      });
    },
  
    // Add one
    insertOne: function(cols, vals, cb) {     
      console.log(vals);
      
      orm.insertOne('burgers', cols, vals, function(res) {
        cb(res);
      });
    },
  
    // Devour one
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export db 
  module.exports = burgers;