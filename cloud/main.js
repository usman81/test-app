// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("SendEmail", function(request, response) {

   var Mailgun = require('mailgun');
Mailgun.initialize('sandbox56933a30ae88460a975e0668405d62ba.mailgun.org', 'key-3d838799058c118a82601599a16dcd75');

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