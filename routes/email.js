var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "gaAdmissionsSystem@gmail.com",
        pass: "15202ndst"
    }
});

router.get('/email',function(req,res){
  res.render('email');
});

router.post('/email',function(req, res){
  var mailOptions = {
    from: "GA Admissions <gaAdmissionsSystem@gmail.com>",
    to : "christina.freeze@gmail.com",
    subject : req.body.subject,
    body : req.body.body
  };
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
    console.log(error);
  } else {
    console.log("Message sent: " + response.message);
  }
  });
});

module.exports = router;
