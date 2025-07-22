const express = require('express');
const admin = require('firebase-admin');
const app = express();
const port = 3000;

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(express.json());

app.post('/send-notification', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).send({ error: 'Device token not provided.' });
  }

  const message = {
    notification: {
      title: 'Incoming Call',
      body: 'John Doe is calling...',
    },
    token: token,
  };

  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log('Successfully sent message:', response);
      res.send({ success: true });
    })
    .catch((error) => {
      console.log('Error sending message:', error);
      res.status(500).send({ error: 'Error sending message.' });
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
