var commentModel = require('./commentModel.js');
  
  module.exports = {
    create: function(req, res) {
      var comment = new commentModel(req.body);
      comment.save(function(err, result){
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    },
    read: function(req, res) {
      commentModel
      .find(req.query)
      .exec(function (err, result) {
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    }
  };
