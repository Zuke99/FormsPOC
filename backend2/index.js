const express = require('express');

const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors())

app.post('/api/submit-data', (req, res) => {
  if(isValidToken(req)){
    console.log('Token is valid');
  return res.status(200).json({ message: 'Token Is Valid' });
  } 
  console.log('InvalidToken');
  return res.status(400).json({ message: 'Invalid Token'})
  
});

const isValidToken = (req) => {
  const token = req.headers['authorization'].split('Bearer ')[1];
  if(token === 'your-secure-token') return true;
}

app.listen(3002, () => console.log('Server listening on port 3002'));
