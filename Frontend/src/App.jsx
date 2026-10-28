import { useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:3000/api/message';

function App() {
  const [message, setMessage] = useState('');

  const getMessage = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage('Could not reach the server. Is it running?');
    }
  };

  return (
    <div className="container">
      <button onClick={getMessage}>Get Message</button>
      <p className="output">{message}</p>
    </div>
  );
}

export default App;