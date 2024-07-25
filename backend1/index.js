const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

function generateToken() {
  return 'your-secure-token'; 
}

app.get('/api/generate-token', (req, res) => {
  const token = generateToken();
  console.log("token", token)
  return res.status(200).json({ token });
});

app.listen(3001, () => console.log('Server listening on port 3001'));
