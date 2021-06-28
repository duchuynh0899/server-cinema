const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // service: 'smtp.gmail.com', //smtp.gmail.com  //in place of service use host...
  // secure: true, //true
  // port: 465, //465
  // auth: {
  //   user: 'duchuynh0899@gmail.com',
  //   pass: 'Duchuynh123',
  // },
  // tls: {
  //   rejectUnauthorized: false,
  // },
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'duchuynh0899@gmail.com',
    pass: 'Duchuynh123'
  }
});

transporter.sendEMail = function(mailRequest) {
  return new Promise(function(resolve, reject) {
    transporter.sendMail(mailRequest, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve('The message was sent!');
      }
    });
  });
};

module.exports = transporter;
