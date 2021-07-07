const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default (req, res) => {
  const data = req.body;
  //change email
  try {
    const message = {
      to: 'iliailia@me.com',
      from: 'info@bioeticgoods.iliaroger.de',
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
