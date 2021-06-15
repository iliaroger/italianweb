const nodemailer = require('nodemailer');

export default async (req, res) => {
  const { from, to, subject, text } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: 'ilia.roger@outlook.com',
      pass: 'Whiteboard30.',
    },
  });

  transporter.sendMail(
    {
      from: {
        name: 'Bio Etic Goods',
        address: 'ilia.roger@outlook.com',
      },
      to: 'ilia.roger@outlook.com, iliailia@me.com',
      subject,
      text,
    },
    (err, info) => {
      console.log(info);
    }
  );

  res.end();
};
