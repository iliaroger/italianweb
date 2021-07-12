const aws = require('aws-sdk');
require('dotenv').config();
aws.config.update({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_BEG,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_BEG,
  },
});
// settings
module.exports = (req, res) => {
  const { firstName, lastName, email, phone, inquiry, text } = req.body;
  let params = {
    Destination: {
      /* required */
      CcAddresses: ['iliailia@me.com'],
      ToAddresses: ['iliailia@me.com', 'thepresethub@gmail.com'],
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
    Source: 'iliailia@me.com',
    ReplyToAddresses: [email],
  };

  // Create the promise and SES service object
  let sendPromise = new aws.SES({ apiVersion: '2010-12-01' })
    .sendEmail(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(function (data) {
      console.log('data send: ' + data);
      console.log(data.MessageId);
    })
    .catch(function (err) {
      console.log('there was an error: ' + err);
      console.error(err, err.stack);
    });
};
