import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Gif from './Gif';

function App() {
  const [gifData, setGifData] = useState('');
  const [gifTitle, setGifTitle] = useState('')

  const handleSubmit = title => {
    setGifTitle(title)
  };

  useEffect(() => {
    let apiKey = 'u0Tc3AJbWxlZLkXg1NSyxvuyscOUpdSN'
    let gifUrl = `https://api.giphy.com/v1/gifs/random?tag=${gifTitle}&api_key=${apiKey}`;

  const makeApiCall = () => {
      fetch(gifUrl)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setGifData((data))
        })
    }
    makeApiCall()
  }, [gifTitle])


  return (
    <div className="App">
      <h1>Find a Gif Here </h1>
      <Form handleSubmit={handleSubmit} />
      {gifData.data ? <Gif gif={gifData} /> : "Pull Random Gifs From Giphy"}
    </div>
  );
}

export default App;