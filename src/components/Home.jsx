import React, { useState, useEffect } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const text='Hello Ayush Jain';
    const  {speak}=useSpeechSynthesis();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/test');
    speak({text:text});
  }
  return (
      <button style={{ cursor: 'pointer'}} onClick={handleClick}>Click on me</button>
  )
}

export default Home
