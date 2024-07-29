const express = require('express');
const cors = require('cors');
const app = express();
const crypto = require('crypto');

app.use(cors());

function generateToken(length) {
  return crypto.randomBytes(length).toString('base64url');
}

app.get('/api/generate-token', (req, res) => {
  const token = generateToken(16);
  console.log("token", token)
  return res.status(200).json({ token });
});

app.listen(3001, () => console.log('Server listening on port 3001'));
