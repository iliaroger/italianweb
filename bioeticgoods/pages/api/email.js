const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const data = req.body;
  try {
    const message = {
      to: 'thepresethub@gmail.com',
      from: 'iliailia@me.com',
      subject: 'New Inquiry - Bioeticgoods',
      text: `Subject: ${data.inquiry} \nFirst Name: ${data.firstName} \nLast Name: ${data.lastName} \nEmail: ${data.email} \nPhone: ${data.phone} \nMessage: ${data.text}`,
    };
    mail
      .send(message)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    res.end();
  } catch (err) {
    throw new Error(err);
  }
};
