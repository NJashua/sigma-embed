// netlify/functions/generate-embed-url.js

exports.handler = async (event, context) => {
    const EMBED_URL = "https://app.sigmacomputing.com/embed/1-3WWNtcBJk5Vl7rQN6dlBQw"; // Replace with your Sigma embed URL
  
    return {
      statusCode: 200,
      body: JSON.stringify({ url: EMBED_URL }),
    };
  };
  