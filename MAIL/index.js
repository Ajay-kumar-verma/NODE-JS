var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ajay.ongraph@gmail.com',
    pass: 'Ajayongraph@123'
  }
});

var mailOptions = {
  from: 'ajay.ongraph@gmail.com',
  to: 'ajay.ongraph@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});