
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
};

exports.gitlab = function(req, res){

  body = req.body || {};
  
  console.log("body");
  console.log(req.body);
  console.log("get")
  console.log(req.query);

  res.send({
    status: 200,
    message: "gitlab, it is webhook"
  });

  slack = new Slack(config.webhook, config.domain);

  body = req.body;

  data = {
    username: "gitlab",
    channel: req.query.channel || "general",
    text: "code updated by " + body.user_name + " ,  <" + body.commits[0].url + "|" + body.comments[0].message + ">"
  }

  slack.webhook({
    username: data.username || "webhookbot",
    channel: data.channel || "#general",
    text: data.text || "",
    icon_url: "http://www.gravatar.com/avatar/b9b1205a8b7a87ce0135cbcaa9848163?size=40&default=https://cdn.uservoice.com/pkg/admin/icons/user_40-7a960fe4b882cdb283360295191002d7.png"
  }, function(err, response) {
    console.log(response);
  });


};

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

