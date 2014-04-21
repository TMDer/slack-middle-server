
/*
 * GET home page.
 */

var Slack = require('slack-node');
var config = require("../config");

exports.index = function(req, res) {
  res.send({
    status: "ok",
    message: "it is main page"
  })
}

exports.redmine = function(req, res){

  console.log("body");
  console.log(req.body);
  console.log("get")
  console.log(req.query);

  slack = new Slack(config.webhook, config.domain);

  slack.webhook({
    channel: "#general",
    username: "webhookbot",
    text: "This is posted to #general and comes from a bot named webhookbot."
  }, function(err, response) {
    console.log(response);
  });

  res.send({
    status: 200,
    message: "it is webhook"
  });
};


