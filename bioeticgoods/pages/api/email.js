require('dotenv').config();

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  const data = req.body;
  try {
    const message = {
      to: 'iliailia@me.com',
      from: 'iliailia@me.com',
      subject: data.inquiry,
      text: `First Name: ${data.firstName} \nLast Name: ${data.lastName} \nEmail: ${data.email} \nPhone: ${data.phone} \nMessage: ${data.text}`,
    };
    mail
      .send(message)
      .then(() => console.log('email send!'))
      .catch((err) => console.log(err));

    res.end();
  } catch (err) {
    throw new Error(err);
  }
};
