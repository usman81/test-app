// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("SendEmail", function(request, response) {

   var Mailgun = require('mailgun');
Mailgun.initialize('sandboxd29592fd5a8a4d3396cfd318ed3d9213.mailgun.org', 'key-86301bee86e0779d3763ede0587d5502');

Mailgun.sendEmail({
  to: request.params.to,
  from: request.params.from,
  subject: request.params.subject,
  text: request.params.text
}, {
  success: function(httpResponse) {
    console.log(httpResponse);
    response.success("Email sent!");
  },
  error: function(httpResponse) {
    console.error(httpResponse);
    response.error("Uh oh, something went wrong");
  }
});
});