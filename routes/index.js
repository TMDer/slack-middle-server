
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

  body = req.body || {};
  
  console.log("body");
  console.log(req.body);
  console.log("get")
  console.log(req.query);

  res.send({
    status: 200,
    message: "it is webhook"
  });

  slack = new Slack(config.webhook, config.domain);
  data = JSON.parse(body.payload);

  slack.webhook({
    username: data.user || "webhookbot",
    channel: data.channel || "#general",
    text: data.text || "",
    attachments: data.attachments,
    icon_url: data.icon_url
  }, function(err, response) {
    console.log(response);
  });


};

