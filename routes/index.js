
/*
 * GET home page.
 */

var Slack = require('slack-node');
var config = require("../config");

var slack = new Slack(config.webhook, config.domain);

exports.index = function(req, res) {
  res.send({
    status: "ok",
    message: "it is main page"
  })
};

exports.gitlab = function(req, res){

  var body = req.body || {};

  res.send({
    status: 200,
    message: "gitlab, it is webhook"
  });

  body = req.body;

  data = {
    username: "gitlab-PR",
    channel: req.query.channel || "#pull-request",
    text: "code updated by " + body.user.username + " ,  <" + object_attributes.last_commit.url + "|" + object_attributes.last_commit.url + ">"
  }

  slack.webhook({
    username: data.username || "gitlab-PR",
    channel: data.channel || "#pull-request",
    text: data.text || "",
    icon_url: "http://www.gravatar.com/avatar/b9b1205a8b7a87ce0135cbcaa9848163?size=40&default=https://cdn.uservoice.com/pkg/admin/icons/user_40-7a960fe4b882cdb283360295191002d7.png"
  }, function(err, response) {
    console.log(response);
  });


};

exports.jenkins = function(req, res){
  var body = req.body || {};
  var redmine = config.redmine;
  var title = req.query.buildName || "";

  res.send({
    status: 200,
    message: "it is webhook"
  });

  if ( ! req.query.buildName) {
    return;
  }

  console.log("query");
  console.log(req.query);
  console.log("body");
  console.log(req.body);

  data = {
    text: "Build a task: " + title,
    user: body.username,
    icon_url: body.icon_url
  };

  slack.webhook({
    username: data.user || "jenkins",
    channel: req.query.channel || "#general",
    text: data.text || "",
    attachments: { text: 'Built time is' + new Date()},
    icon_url: data.icon_url || "https://slack.global.ssl.fastly.net/12837/img/services/jenkins-ci_32.png"
  }, function(err, response) {
    console.log(response);
  });
};

exports.redmine = function(req, res){

  var body = req.body || {};
  var redmine = config.redmine;

  res.send({
    status: 200,
    message: "it is webhook"
  });

  data = JSON.parse(body.payload);
  
  if (redmine.userhook) {
    var text = data.text;
    var passhook = false;
    var users = redmine.users;
    
    for (key in users) {
      if (text.indexOf(users[key]) > -1) {
        passhook = true;
        break;
      }
    }

    if (passhook == false) {
      return;
    }
  }

  

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

