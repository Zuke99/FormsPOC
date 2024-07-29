import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../App.css';

function FormComponent() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        field1: field1,
        field2: field2
      }
      console.log(data);
       await axios.post('http://localhost:3002/api/submit-data', data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        console.log('Server response:', response.data); 
        alert(response.data.message);
      });
    } catch (error) {
      alert(error.response.data.message)
      console.error('Error submitting data:', error);
    }
  };
  return (
    <div>
       <form onSubmit={handleSubmit}>
          <input type="text" name="field1" placeholder="Field 1" value={field1} onChange={(e) => setField1(e.target.value)}/>
          <input type="text" name="field2" placeholder="Field 2" value={field2} onChange={(e) => setField2(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
        <div class="iframe-container" id="iframeContainer" >
        <iframe id="googleForm" src={`https://docs.google.com/forms/d/e/1FAIpQLSdZbPzAwenc8_6vRa5E7eyJmez027h3ZpWIPB_8ncKZIO7yYQ/viewform?entry.494066597=${token}&embedded=true`} frameborder="0" marginheight="0" marginwidth="0" title='form'>Loading…</iframe>
        </div>
    </div>
  )
}

export default FormComponent
