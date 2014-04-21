
/*
 * GET home page.
 */

var Slack = require('node-slack');
var slack = new Slack("hpp-hiiir","VTBCYNneXdoNRZjIH5QPYkFj");

domain = "--your-slack-subdomain--";
webhookToken = "--your-slack-webhook--";

exports.redmine = function(req, res){

  console.log("body");
  console.log(req.body);
  console.log("get")
  console.log(req.query);

  slack = new Slack(webhookToken, domain);

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


