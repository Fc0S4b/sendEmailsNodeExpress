const nodemailer = require('nodemailer');
require('dotenv');
const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.ETHEREAL_USER,
      pass: process.env.ETHEREAL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: '"Test user" <testuser@mail.com>',
    to: 'bar@example.com',
    subject: 'hello',
    html: '<h2>sending emails with Node.js</h2>',
  });
  res.json(info);
};

module.exports = sendEmail;
