const nodemailer = require('nodemailer');

export default async (req, res) => {
  const { firstName, lastName, email, inquiry, text, phone } = req.body;

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
      to: `ilia.roger@outlook.com, iliailia@me.com`,
      subject: inquiry,
      text: `First Name: ${firstName} \nLast Name: ${lastName} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${text}`,
    },
    (err, info) => {
      console.log(info);
    }
  );

  res.end();
};
