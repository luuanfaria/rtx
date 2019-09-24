var nodemailer = require("nodemailer");

module.exports = {
  sendEmail
};

function sendEmail({ nome, tel, email, assunto, mensagem }) {
  console.log(nome, tel, email, assunto, mensagem);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gvcapanema@gmail.com",
      pass: "ab32hj67rf95"
    }
  });

  var mailOptions = {
    from: email,
    to: "luuan.fariaf@gmail.com",
    subject: assunto,
    text: { nome, tel, email, mensagem }
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
