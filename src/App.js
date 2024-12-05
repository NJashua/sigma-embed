// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [embedUrl, setEmbedUrl] = useState('');

  // Fetching the embed URL from Netlify function
  useEffect(() => {
    const fetchEmbedUrl = async () => {
      try {
        const response = await axios.get('/.netlify/functions/generate-embed-url');
        setEmbedUrl(response.data.url);
      } catch (error) {
        console.error('Error fetching embed URL:', error);
      }
    };
    fetchEmbedUrl();
  }, []);

  return (
    <div className="App">
      <h2>Sigma Public Embed Sample</h2>
      {embedUrl ? (
        <iframe
          src={embedUrl}
          frameBorder="0"
          width="100%"
          height="600px"
          title="Sigma Embed"
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
