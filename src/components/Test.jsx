import React, { useState, useEffect } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';

const Test = () => {
    const text='hello';
    const  {speak}=useSpeechSynthesis();
    useEffect(() => {
      console.log("speaking");
      setTimeout(function(){
        speak({text:text});
      },1000)
      console.log("speak");
      }, [])
  return (
    <div>
      {text}
    </div>
  )
}

export default Test
