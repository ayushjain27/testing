import React, { useState, useEffect } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const text='Hello Ayush';
  const  {speak}=useSpeechSynthesis();
const navigate = useNavigate();
const handleClick = () => {
  navigate('/other');
  speak({text:text});
}

  return (
    <div>
      "Hello Ayush Jain"
      <button style={{ cursor: 'pointer'}} onClick={handleClick}>Click on me</button>
    </div>
  )
}

export default Test
