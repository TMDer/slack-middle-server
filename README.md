slack-webhook-server
====================

In real case, we have to waste time for waiting Slack API server response. That is why i built this middle server, it will quick response back, and send message to Slack API server.

##Requirement

 * node.js > 0.10
 * git

##Installation

    git clone https://github.com/clonn/slack-middle-server.git
    cd slack-middle-server
    npm i

##configuration

You need to copy *config.default.js* to *config.js*

    cp config.default.js config.js

then edit files, check [your Slack webhook config](https://my.slack.com/services), fill in slack webhook detail,

 * domain // webhook domain name
 * webhook // webhook token

##Support

Now it is support service below

 * redmine -> /redmine
 * gitlab -> /gitlab
 * github -> /github

##License

MIT

##Author

[clonn](github.com/clonn)