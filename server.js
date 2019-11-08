const dotenv = require('dotenv');
dotenv.config();
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is a test using Twilio.',
    from: '+1',
    to: '+1'
  })
  .then(message => console.log(message.sid))
  .catch(err => console.log(err));
