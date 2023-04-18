import React, { useState, useEffect } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import { useNavigate } from 'react-router-dom';

const Other = () => {
  const navigate = useNavigate();
    const text='Hello Ayush!';
  return (
    <div>
      {text}
    </div>
  )
}

export default Other
