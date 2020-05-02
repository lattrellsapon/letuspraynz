const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  console.log(req.body.userFullName);
  console.log(req.body.userEmail);
  console.log(req.body.userMessage);

  const output = `
      <p>Message from Let Us Pray.</p>
      <h3>Contact Details</h3>
      <ul>
          <li>Name: ${req.body.userFullName}</li>
          <li>Name: ${req.body.userEmail}</li>
      </ul>
      <h3>Message: </h3>
      <p>${req.body.userMessage}</p>
    `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'letuspraynz2020@gmail.com', // generated ethereal user
      pass: 'letmein2020', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"LET US PRAY NZ" <letuspraynz2020@gmail.com>', // sender address
    to: 'letuspraynz2020@gmail.com', // list of receivers
    subject: 'New message from contact page', // Subject line
    text: 'Hello world?', // plain text body
    html: output, // html body
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});

module.exports = router;
