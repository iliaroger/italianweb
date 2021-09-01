const aws = require('aws-sdk');
require('dotenv').config();
aws.config.update({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_BEG,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_BEG,
  },
});
// email settings
module.exports = async (req, res) => {
  const { firstName, lastName, email, phone, inquiry, text } = req.body;
  let params = {
    Destination: {
      /* required */
      CcAddresses: ['info@bioeticgoods.com'],
      ToAddresses: ['iliailia@me.com'],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
            <div>
              <p>Bio Etic Goods: New Message</p>
              <p>First Name: ${firstName}</p>
              <p>Last Name: ${lastName}</p>
              <p>Email: ${email}</p>
              <p>Phone: ${phone}</p>
              <br></br>
              <p>Message: ${text}</p>
            </div>
          `,
        },
        Text: {
          Charset: 'UTF-8',
          Data: `First Name: ${firstName} \nLast Name: ${lastName} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${text}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: inquiry,
      },
    },
    Source: 'info@bioeticgoods.com',
    ReplyToAddresses: [email],
  };

  // Create the promise and SES service object
  await new aws.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

  res.end();
};
