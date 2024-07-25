import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function GenerateToken() {
    const navigate = useNavigate();
    const generateToken = async () => {
        try {
            await axios.get('http://localhost:3001/api/generate-token').then((result) => {
            console.log("result", result);
            if ( result.data.token ) {
                navigate(`form?token=${result.data.token}`);
              }
          });
        } catch (error) {
          console.error('Error generating token:', error);
        }
      };
  return (
    <div>
      <button onClick={generateToken}>Generate Token</button>
    </div>
  )
}

export default GenerateToken
