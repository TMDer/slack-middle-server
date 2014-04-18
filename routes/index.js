
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.send({
    status: 200,
    message: "it is work"
  });
};

exports.webhook = function(req, res){
  console.log("body");
  console.log(req.body);
  console.log("get")
  console.log(req.query);
  
  res.send({
    status: 200,
    message: "it is webhook"
  });
};


